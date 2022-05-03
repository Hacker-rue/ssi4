const { TonClient, signerKeys } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')

const { moduleVC } = require('@radianceteam/vc')
const { moduleEver } = require('@radianceteam/vc')
const { ClientContract } = require('@radianceteam/vc/src/build/ClientContract')
const s = require('@radianceteam/vc')

const { randomInt } = require('crypto')
const { StatusVCRootContract } = require('@radianceteam/vc/src/build/StatusVCRootContract')

const schemeVC1 = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https:// w3id.org/security/suites/ed25519-2020/v1",
        "http://localhost:3000/context/myContext.json"
    ],
    "type": ["VerifiableCredential"],
    "issuer": "did:everscale:a1d6d37f31b71c570f8c78d06c955719a7194f23b203851a8be8ea82c9f4035d",
    "issuanceDate": "",
    "credentialSubject": {
        "id": "",
        "age": "",
    },
    "credentialStatus": {
        "id": "",
        "type": "CredentialStatusList2017"
    }
}

const client = new TonClient({
    network: {
        endpoints: ["net.ton.dev"]
    }
})

const issuer = new Account(ClientContract, {
    address: "0:9f918cb6c22d28e82ebb57c79fbbbde00318b6402024d33895ccd5256806a245",
    signer: signerKeys({
        public: 'a1d6d37f31b71c570f8c78d06c955719a7194f23b203851a8be8ea82c9f4035d',
        secret: '3b61258adaada3a048513bbb54c658dc3a656bdaffb391c057196476da5f4e04'
    }),
    client: client
})

const statusRoot = new Account(StatusVCRootContract, {
    address: "0:9f24ed15269eb6f08faff0251b719fa211f13f371b76fc4fe43be82b46a05ce0",
    client: client
})

module.exports = {
    create
}

//Принимает did держателя и адрес его кошелька
function create(did, holder) {
    return new Promise(async (resolve, reject) => {
        try {
            var vc = schemeVC1
            vc.credentialSubject.id = did
            vc.credentialSubject.age = randomInt(90) + 10
            vc.credentialStatus.id = await moduleEver.createStatus(statusRoot, issuer, holder)
            resolve({
                status: true,
                value: await moduleVC.issueVC(vc, issuer.signer.keys.secret)
            })
        } catch(er) {
            //Таким способом я передаю ошибки
            reject({
                status: false,
                value: er
            })
        }
    })
}