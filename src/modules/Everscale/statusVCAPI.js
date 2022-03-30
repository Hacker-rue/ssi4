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

    setStatus: async (statusVCAccount, userAccount, status) => {
        try {
            var { body } = (await TonClient.default.abi.encode_message_body({
                abi: statusVCAccount.abi,
                call_set: {
                    function_name: "setStatus",
                    input: {
                        Status: status
                    }
                },
                is_internal: true,
                signer: signerNone()
            }))

            
        } catch(er) {

        }
    }

}

var { body } = (await TonClient.default.abi.encode_message_body({
    abi: abi,
    call_set: call_set,
    is_internal: is_internal,
    signer: signer
}))

body = await send.buildPayload(storageCotract.abi, {
    function_name: "addDid",
    input: {
        pubKey: id,
        didDocument: didDocument
    }
}, true, signerNone())