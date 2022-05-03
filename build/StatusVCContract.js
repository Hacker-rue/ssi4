const StatusVCContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "name": "codeIndexStatus",
                        "type": "cell"
                    },
                    {
                        "name": "sendToGas",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setStatus",
                "inputs": [
                    {
                        "name": "Status",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deactivate",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "destruct",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "Status",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "resolveCodeHashIndexVC",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndexVC",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrStatus",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndexStatus",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_id",
                "type": "uint256"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeIndexStatus",
                "type": "cell"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_holder",
                "type": "address"
            },
            {
                "name": "_status",
                "type": "uint8"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "868b8a2b0e7e69ba5c3bcfd0d60f4ad4b204d1b102bb45debf5f0b2f198e402f",
};
module.exports = { StatusVCContract };