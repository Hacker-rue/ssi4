const { Account } = require('@tonclient/appkit');
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

module.exports = {

    createAccountStatusVCRoot: async (address, client) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(StatusVCContract, {
                        address: address,
                        signer: signerNone(),
                        client: client
                    }))
            } catch(er) {
                reject(er)
            }
        })
    },

    createStatusVC: async (statusVCRootAccount, userAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: statusVCRootAccount.abi,
                    call_set: {
                        function_name: "createStatusVC"
                    },
                    is_internal: true,
                    signer: signerNone()
                }))
    
                var ress =  await userAccount.run("sendTransaction", {
                    dest: await statusVCRootAccount.getAddress(),
                    value: 400000000,
                    bounce: true,
                    flags: 0,
                    payload: body
                })
                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    getInfo: async (statusVCRootAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAccount.runLocal("getInfo")
                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveCodeHashStatusVC: async (statusVCRootAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAccount.runLocal("resolveCodeHashStatusVC")
                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveStatusVC: async (statusVCRootAccount, id) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCRootAccount.runLocal("resolveCodeHashStatusVC", {
                    id: id
                })
                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    }

}