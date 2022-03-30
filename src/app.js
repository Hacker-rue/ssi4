const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')
const { libNode } = require('@tonclient/lib-node')

const ed = require("noble-ed25519")

const parser = require('./src/parserSchema')
const create = require('./modules/moduleVC')
const createVC = require('./modules/moduleVC')

module.exports = {
    VC: class {

        constructor(uri = null, requiredParameters, credentialSubject) {
            this.uri = uri
            this.requiredParameters = requiredParameters
            this.credentialSubject = credentialSubject
        }
    
        async getMetadataVC() {
            return new Promise(async (resolve, reject) => {
                try {
                    resolve(await parser.getMetadataVC(this.requiredParameters, this.credentialSubject))
                } catch(er) {
                    reject(er)
                }
            })
        }

        async createVC(issuerDID, issuanceDate, userDID, category, secretKey) {
            return new Promise(async (resolve, reject) => {
                try {
                    resolve(await create.createVC(issuerDID, issuanceDate, userDID, category, secretKey))
                } catch(er) {
                    reject(er)
                }
            })
        }

        async verifyVC(VC, publicKey) {
            return new Promise(async (resolve, reject) => {
                try {
                    resolve(await create.verifyVC(VC, publicKey))
                } catch(er) {
                    reject(er)
                }
            })
        }
    
    }
}


async function main() {

    issuerDID = "did:everscale:fed01c09b6e5a3aa90b769ba7d4a92b8426522ebe5a79090fcea2d3f5caefb05"
    issuanceDate = "2010-01-01T19:23:24Z"
    userDID = "did:everscale:fed01c09b6e5a3aa90b769ba71093627826522ebe5a79090fcea2d3f5caefb05"
    category = [
        "B1",
        "B",
        "C"
    ]

    var VC = await create.createVC(issuerDID, issuanceDate, userDID, category, "2598ee42937f0c07fd0c0bb2bd966da904359cb29964d18035615208a0245802")
    var publicKey = await ed.getPublicKey("2598ee42937f0c07fd0c0bb2bd966da904359cb29964d18035615208a0245802")
    console.log(publicKey)

    console.log(await createVC.verifyVC(VC, "12121212", publicKey))
    

}



main()