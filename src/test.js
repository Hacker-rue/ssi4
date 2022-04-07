const { TonClient, signerNone, signerKeys } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')
const { libNode } = require('@tonclient/lib-node')

const moduleEver = require('./modules/moduleEver')
const moduleVC = require('./modules/moduleVC')
const moduleVP = require('./modules/moduleVP')

const statusVCAPI = require('./modules/Everscale/statusVCAPI')
const statusVCRootAPI = require('./modules/Everscale/statusVCRootAPI')
const VCAPI = require('./modules/Everscale/VCAPI')

const { ClientContract } = require('./build/ClientContract')
const { StatusVCRootContract } = require('./build/StatusVCRootContract')
const { StatusVCContract } = require('./build/StatusVCContract')

TonClient.useBinaryLibrary(libNode)


const client = new TonClient({
    network: {
        endpoints: ['net.ton.dev']
    }
})

const userAccount = new Account(ClientContract, {
    address: "0:81426fdc3f6d101c5f20633301f8fec9e3c9b58e5e8f2ad81ac32964b89239e0",
    signer: signerKeys({
        public: '21ceb21f9df888dc72bd173d1026feb7620c9a8b6cc7ca2a4f32d680ba5ddbb4', 
        secret: '0bd2bc82f1cd7c89b2afeb2b6cce2fc3caedfc1c6db1cddbf5a9f18b1f474161'  
      }),
    client: client
})

const statusVCRoot = new moduleEver.statusVC(client, "0:b7a243d1340e113b664a755243941e9ef874f84aaa358f5bb9d7fa4d30940406")


async function main() {
    try {
        var vcDocument = await moduleVC.createVC("https://example.com/issuer/22", "2010-01-01T00:00:00Z", 
        "did:everscale:7cf5fb69c8ec7bf94842f2457970c31a41bdcfa1b0d804b0205fd6d67dd864f1", ["A", "A1", "B", "B1"], 
        await statusVCRoot.createStatus(userAccount), "0bd2bc82f1cd7c89b2afeb2b6cce2fc3caedfc1c6db1cddbf5a9f18b1f474161")

        console.log(vcDocument)

        var signature = await moduleVC.encryptVerifiableCredential(JSON.stringify(vcDocument), "0bd2bc82f1cd7c89b2afeb2b6cce2fc3caedfc1c6db1cddbf5a9f18b1f474161")

        var VCAccount = await moduleEver.newAddressVC(client)

        await userAccount.run("transfer", {
            dest: VCAccount.address,
            value: 550000000
        })

        // console.log(signature)

        Timeout(15000)

        await moduleEver.deployVC(VCAccount.address, VCAccount.keys, client, 
            "0:81426fdc3f6d101c5f20633301f8fec9e3c9b58e5e8f2ad81ac32964b89239e0", "signature", signature)

        Timeout(20000)

        // console.log("1")

        var VC = await VCAPI.createAccountVC(VCAccount.address, client)

        // console.log(VC)
        // console.log(VCAccount.address)
        
        // console.log("3")

        var ress = await VCAPI.getInfo(VC)

        console.log(ress)

        // console.log("2")

        console.log(await moduleVC.decryptVerifiableCredential(ress.value, userAccount.signer.keys.secret))

        


    } catch(er) {
        console.log(er)
    }
}

main()

async function deploy() {
    try {
        var account = new Account(ClientContract, {
            signer: signerKeys(await client.crypto.generate_random_sign_keys()),
            client: client
        })


        await account.deploy({useGiver: true})

        console.log({
            address: await account.getAddress(),
            signer: account.signer.keys
        })
    } catch(er) {
        console.log(er)
    }
}

async function Timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time, undefined)
    })
}

// deploy()