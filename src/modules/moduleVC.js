const { generateKeyPairSync, createSign, createVerify } = require('crypto')
const sha256 = require('crypto-js/sha256.js')
const ed = require("noble-ed25519")




module.exports = {

    createVC: async (issuerDID, issuanceDate, userDID, category, secretKey, credentialStatus) => {
        var VC = {
            '@context': [
                "https://www.w3.org/2018/credentials/v1",
            ],
            "type": ["VerifiableCredential", "DriverCredential"],
            "issuer": issuerDID,
            "issuanceDate": issuanceDate,
            "credentialSubject": {
                "id": userDID,
                "category": [

                ]
            },
            "credentialStatus": credentialStatus
        }

        return new Promise(async (resolve, reject) => {
            try {
                for(i = 0; i < category.length; i++) {
                    VC.credentialSubject.category.push({
                        "Value": category[i]
                    })
                }
                VC["proof"] = await VCSignature(VC, issuerDID, secretKey)
                resolve(VC)
            } catch(er) {
                reject(er)
            }
        })
    },

    verifyVC: async (VC, publicKey) => {
        return new Promise(async (resolve, reject) => {
            try {
                proof = VC["proof"]
                delete VC["proof"]
                console.log(proof["proofValue"])

                resolve(await verifyMessage(proof["proofValue"], JSON.stringify(VC), publicKey))
            } catch(er) {
                reject(er)
            }
        })
    }

    

}

async function VCSignature (VC, issuerDID, secretKey) {
    return new Promise(async (resolve, reject) => {
        try {
            var proof = {
                "type": "Ed25519Signature2020",
                "created": await getDate(),
                "verificationMethod": issuerDID,
                "proofPurpose": "assertionMethod",
                "proofValue": await signData(JSON.stringify(VC), secretKey)
            }
            resolve(proof)
        } catch(er) {
            reject(er)
        }
    })
}

async function signData(msg, secretKey){

    const msgHash = sha256(msg).toString();

    return await ed.sign(msgHash, secretKey);
}

async function verifyMessage(signatureHex, msg, publicKey){

    const msgHash = sha256(msg).toString();

    return await ed.verify(signatureHex, msgHash, publicKey);
}

async function getDate() {
    return new Promise((resolve, reject) => {
        try {
            var date = new Date();
            var ress = ""

            ress+= date.getFullYear() + "-"
            if(date.getMonth() < 10) {
                ress+= "0" + date.getMonth() + "-"
            } else {
                ress+= date.getMonth() + "-"
            }

            if(date.getDate() < 10) {
                ress+= "0" + date.getDate() + "T"
            } else {
                ress+= date.getDate() + "T"
            }

            if(date.getHours() < 10) {
                ress+= "0" + date.getHours() + ":"
            } else {
                ress+= date.getHours() + ":"
            }

            if(date.getMinutes() < 10) {
                ress+= "0" + date.getMinutes() + ":"
            } else {
                ress+= date.getMinutes() + ":"
            }

            if(date.getMilliseconds() < 10) {
                ress+= "0" + date.getMilliseconds() + "Z"
            } else {
                ress+= date.getMilliseconds() + "Z"
            }

            resolve(ress)
        } catch(er) {
            reject(er)
        }
    })
}