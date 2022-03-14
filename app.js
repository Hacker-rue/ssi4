const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')
const { libNode } = require('@tonclient/lib-node')

const parser = require('./src/parserSchema')

module.exports = {
    Metadata: class {

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
    
    }
}