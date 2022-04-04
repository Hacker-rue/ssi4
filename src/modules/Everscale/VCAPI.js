const { Account } = require('@tonclient/appkit')
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')

const { VCContract } = require('../../build/VCContract')


module.exports = {

    createAccountVC: async (address, client) => {
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
    
    setValue: async (VCAccount, userAccount, type, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = await TonClient.default.abi.encode_message_body({
                    abi: statusVCAccount.abi,
                    call_set: {
                        function_name: "setValue",
                        input: {
                            Type: type,
                            value: value
                        }
                    },
                    is_internal: true,
                    signer: signerNone()
                })

                var ress =  await userAccount.run("sendTransaction", {
                    dest: await statusVCAccount.getAddress(),
                    value: 250000000,
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

    destruct: async (VCAccount, userAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = (await TonClient.default.abi.encode_message_body({
                    abi: VCAccount.abi,
                    call_set: {
                        function_name: "destruct"
                    },
                    is_internal: true,
                    signer: signerNone()
                }))

                var ress = await userAccount.run("sendTransaction", {
                    dest: await VCAccount.getAddress(),
                    value: 150000000,
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

    getInfo: async (VCAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await VCAccount.runLocal("getInfo");
                resolve(ress.decoded.output)
            } catch(er) {
                reject(er)
            }
        })
    }

}