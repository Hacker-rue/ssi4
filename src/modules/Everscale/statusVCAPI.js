const { Account } = require('@tonclient/appkit');
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

const { StatusVCContract } = require('../../build/StatusVCContract')

module.exports = {

    createAccountStatusVC: async (address, client) => {
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

    setStatus: async (statusVCAddress, userAccount, status) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: StatusVCContract.abi },
                    call_set: {
                        function_name: "setStatus",
                        input: {
                            Status: status
                        }
                    },
                    is_internal: true,
                    signer: signerNone()
                }))
    
                var ress =  await userAccount.run("sendTransaction", {
                    dest: statusVCAddress,
                    value: 200000000,
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

    deactivate: async (statusVCAddress, userAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: StatusVCContract.abi },
                    call_set: {
                        function_name: "deactivate"
                    },
                    is_internal: true,
                    signer: signerNone()
                }))
    
                var ress =  await userAccount.run("sendTransaction", {
                    dest: statusVCAddress,
                    value: 200000000,
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

    destruct: async (statusVCAddress, userAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: StatusVCContract.abi },
                    call_set: {
                        function_name: "destruct"
                    },
                    is_internal: true,
                    signer: signerNone()
                }))

                var ress = await userAccount.run("sendTransaction", {
                    dest: statusVCAddress,
                    value: 100000000,
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

    getInfo: async (statusVCAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await statusVCAccount.runLocal("getInfo")

                resolve(ress.decoded.output)
            } catch(er) {
                reject(er)
            }
        })
    }

}
