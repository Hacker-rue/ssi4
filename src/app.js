const parser = require('./modules/parserSchema')
const create = require('./modules/moduleVC')



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