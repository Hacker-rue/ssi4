const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')
const { libNode } = require('@tonclient/lib-node')

const parser = require('./src/parserSchema')
const create = require('./src/createVC')

module.exports = {
    VC: class {

        constructor(uri, requiredParameters, credentialSubject) {
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

    await create.createVC(issuerDID, issuanceDate, userDID, category, "675ff27556ee27d4b0d78e89d351fe6c01f9d46ca3fe44bec04006650ac1f127")
}

main()