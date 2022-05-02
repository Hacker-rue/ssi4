const { TonClient, signerKeys } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')

const { moduleVC } = require('@radianceteam/vc')
const { moduleEver } = require('@radianceteam/vc')
const { ClientContract } = require('@radianceteam/vc/src/build/ClientContract')
const { moduleVP } = require('@radianceteam/vc')

const { randomInt } = require('crypto')

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

const schemaVC2 = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https:// w3id.org/security/suites/ed25519-2020/v1",
        "http://localhost:3000/context/myContext.json"
    ],
    "type": ["VerifiableCredential, UserIdentity"],
    "issuer": "did:everscale:a1d6d37f31b71c570f8c78d06c955719a7194f23b203851a8be8ea82c9f4035d",
    "issuanceDate": "",
    "credentialSubject": {
        "id": "",
        "name": "",
        "surname": "",
        "birthDate": ""
    },
    "credentialStatus": {
        "id": "",
        "type": "CredentialStatusList2017"
    }
}

const UserIdentity = [
    {
        "id": "",
        "name": "John",
        "surname": "Simeli",
        "birthDate": getDate(new Date(1987, 7, 18))
    },
    {
        "id": "",
        "name": "Bruce",
        "surname": "Wayne",
        "birthDate": getDate(new Date(2013, 0, 30))
    },
    {
        "id": "",
        "name": "Elizabeth",
        "surname": "Turner",
        "birthDate": getDate(new Date(2018, 4, 1))
    }
]

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

const status = new moduleEver.statusVC(client, "0:124f3f0dc6b0b48928340f93f86c070bc8a724c3e30d231ccc22b5941e3dc0c4")

module.exports = {
    create
}


function create(type, did, holder) {
    return new Promise(async (resolve, reject) => {
        try {
            var vc
            if(type == "UserIdentity") {
                var number = randomInt(2)
                vc = schemaVC2
                vc.credentialSubject = UserIdentity[number]
                vc.credentialSubject.id = did
            } else if(type == age) {
                vc = schemeVC1
                vc.credentialSubject.id = did
                vc.credentialSubject.age = randomInt(90) + 10
            } else {
                reject({
                    status: false,
                    value: "Error: There is no specified type!"
                })
            }
            vc.credentialStatus = await status.createStatus(issuer, holder)
            resolve({
                status: true,
                value: await moduleVC.issueVC(vc, "3b61258adaada3a048513bbb54c658dc3a656bdaffb391c057196476da5f4e04")
            })
        } catch(er) {
            reject({
                status: false,
                value: er
            })
        }
    })
}

function getDate(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
}