const { Account } = require('@tonclient/appkit')
const { TonClient, signerNone, signerKeys } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

const statusVCRootAPI = require('./Everscale/statusVCRootAPI')
const statusVCAPI = require('./Everscale/statusVCAPI')

const { StatusVCContract } = require('../build/StatusVCContract')
const { StatusVCRootContract } = require('../build/StatusVCRootContract')


module.exports = {

    newAddressStatusVCRoot: async (client) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(StatusVCRootContract, {
                    signer: signerKeys(await client.crypto.generate_random_sign_keys()),
                    client: client
                })
                resolve({
                    address: await account.getAddress(),
                    keys: account.signer.keys
                })
            } catch(er) {
                reject(er)
            }
        })
    },

    deployStatusVCRoot: async (address, keys, client, issuerAddress) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(StatusVCRootContract, {
                    address: address,
                    signer: signerKeys(keys),
                    client: client
                })

                var ress = await account.deploy({
                    initInput: {
                        codeStatusVC: StatusVCContract.code,
                        issuer: issuerAddress
                    }
                })

                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    statusVC: class {

        constructor (client, address) {
            this.statusVCRoot = statusVCRootAPI.createAccountStatusVCRoot(address, client)
        }

        async createStatus(userAccount) {
            return new Promise(async (resolve, reject) => {
                try {
                    await statusVCRootAPI.createStatusVC(this.statusVCRoot, userAccount)

                    var ress = await statusVCAPI.getInfo(this.statusVCRoot)

                    
                } catch(er) {
                    reject(er)
                }
            })
        }

    }

    

}