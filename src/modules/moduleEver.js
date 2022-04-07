const { Account } = require('@tonclient/appkit')
const { TonClient, signerNone, signerKeys } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

const statusVCRootAPI = require('./Everscale/statusVCRootAPI')
const statusVCAPI = require('./Everscale/statusVCAPI')

const { StatusVCContract } = require('../build/StatusVCContract')
const { StatusVCRootContract } = require('../build/StatusVCRootContract')
const { VCContract } = require('../build/VCContract')


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

    newAddressVC: async (client) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(VCContract, {
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

    deployVC: async (address, keys, client, ownerAddress, type, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                var account = new Account(VCContract, {
                    address: address,
                    signer: signerKeys(keys),
                    client: client
                })

                var ress = await account.deploy({
                    initInput: {
                        owner: ownerAddress,
                        Type: type,
                        value: value
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
            this.statusVCRoot = new Account(StatusVCRootContract, {
                address: address, 
                client: client
            })
            this.client = client
        }

        async createStatus(userAccount) {
            return new Promise(async (resolve, reject) => {
                try {
                    var ress = await statusVCRootAPI.getInfo(this.statusVCRoot)

                    await statusVCRootAPI.createStatusVC(this.statusVCRoot, userAccount)
                    resolve(await this.statusVCRoot.getAddress() + "/" + parseInt(ress.id))
                } catch(er) {
                    reject(er)
                }
            })
        }

        async getStatus(credentialStatus) {
            return new Promise(async (resolve, reject) => {
                try {
                    credentialStatus = credentialStatus.split("/")
                    if(credentialStatus[0] != await this.statusVCRoot.getAddress()) {
                        reject("ERROR: You have specified an invalid credentialStatus!")
                    }
                    var addressStatusVC = await statusVCRootAPI.resolveStatusVC(this.statusVCRoot, parseInt(credentialStatus[1]))
                    
                    var statusVC = await statusVCAPI.createAccountStatusVC(addressStatusVC, this.client)

                    var ress = await statusVCAPI.getInfo(statusVC)
                    if(ress.Status == 0) {
                        resolve("active")
                    } else if(ress.Status == 1) {
                        resolve("deactivated")
                    } else {
                        resolve("suspended")
                    }
                } catch(er) {
                    reject(er)
                }
            })
        }

    }

    

}