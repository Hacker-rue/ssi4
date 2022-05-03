const IndexStatusContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrStatus",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_addrStatus",
                "type": "address"
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
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_addrStatus",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECFgEAAp4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUVBAQkiu1TIOMDIMD/4wIgwP7jAvILEgYFFALm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA8HA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBERBwIoIIIQaLVfP7rjAiCCEHlsWVq64wIKCAN4MPhG8uBM+EJu4wDR2zwijiMk0NMB+kAwMcjPhyDOcc8LYQLIz5PlsWVqzgHIzs3NyXD7AJFb4ts8f/hnEAkLAAj4SvhLBHAw+EJu4wD4RvJz0fhBiMjPjits1szOyds8IG7y0GUgbvJ/0PpAMPhJ+EvHBfLgZPgA+GvbPH/4Zw8VDAsALvhL+Er4Q/hCyMv/yz/Pg84ByM7Nye1UAhjQIIs4rbNYxwWKiuINDgEK103Q2zwOAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeIB6O1E0NdJwgGKjmlw7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hrgED0DvK91wv/+GJw+GPiEAA07UTQ0//TP9MAMfpA1NHQ+kDR+Gv4avhj+GIACvhG8uBMAgr0pCD0oRQTABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    code: "te6ccgECEwEAAnEAAgaK2zUSAQQkiu1TIOMDIMD/4wIgwP7jAvILDwMCEQLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAwEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfA4OBAIoIIIQaLVfP7rjAiCCEHlsWVq64wIHBQN4MPhG8uBM+EJu4wDR2zwijiMk0NMB+kAwMcjPhyDOcc8LYQLIz5PlsWVqzgHIzs3NyXD7AJFb4ts8f/hnDQYIAAj4SvhLBHAw+EJu4wD4RvJz0fhBiMjPjits1szOyds8IG7y0GUgbvJ/0PpAMPhJ+EvHBfLgZPgA+GvbPH/4ZwwSCQgALvhL+Er4Q/hCyMv/yz/Pg84ByM7Nye1UAhjQIIs4rbNYxwWKiuIKCwEK103Q2zwLAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeIB6O1E0NdJwgGKjmlw7UTQ9AWNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4anEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hrgED0DvK91wv/+GJw+GPiDQA07UTQ0//TP9MAMfpA1NHQ+kDR+Gv4avhj+GIACvhG8uBMAgr0pCD0oREQABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    codeHash: "409f53a19dc7d2855dcbbdfc8a24a361f6303ce1463dfd8ec7c3bcb5644ae76a",
};
module.exports = { IndexStatusContract };