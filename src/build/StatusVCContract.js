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
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_status",
                "type": "uint8"
            }
        ]
    },
    tvc: "te6ccgECGgEAAyoAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUZBAQkiu1TIOMDIMD/4wIgwP7jAvILFgYFGALm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfBAHA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBUVBwRQIIIQNVt26brjAiCCEEdWVNy64wIgghBHxi3auuMCIIIQZUQ/x7rjAhEMCggDfDD4RvLgTPhCbuMA0ds8I44kJdDTAfpAMDHIz4cgznHPC2FeIMjPk5UQ/x7L/87LB83JcPsAkl8D4uMAf/hnFAkSAAz4SvhL+EwDJjD4RvLgTPhCbuMA0ds82zx/+GcUCxIANPhJ+EvHBfLgZPhJyM+FCM6Ab89AyYEAoPsABK4w+EJu4wD4RvJz+kGV1NHQ+kDf0fhBiMjPjits1szOyds8IG7y0GQgbvJ/0PpAMPhJxwXy4GRopv5gghAL68IAvvLgZIIQBfXhAHD7AvhrcPhs2zx/+GcQGQ0SAhjQIIs4rbNYxwWKiuIODwEK103Q2zwPAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeIBru1E0NdJwgGKjkxw7UTQ9AVxIYBA9A6T1wv/kXDi+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a3D4bIBA9A7yvdcL//hicPhj4hQDNjD4RvLgTPhCbuMA0wchwgLy0EnR2zzbPH/4ZxQTEgA4+Ez4S/hK+EP4QsjL/8s/z4PL/1nIzssHzcntVAAW+En4S8cF8uBk+GwASO1E0NP/0z/TADHT/9TR0PpA0wchwgLy0EnR+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShGBcAFHNvbCAwLjQ5LjAAAAAMIPhh7R7Z",
    code: "te6ccgECFwEAAv0AAgaK2zUWAQQkiu1TIOMDIMD/4wIgwP7jAvILEwMCFQLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA0EA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBISBARQIIIQNVt26brjAiCCEEdWVNy64wIgghBHxi3auuMCIIIQZUQ/x7rjAg4JBwUDfDD4RvLgTPhCbuMA0ds8I44kJdDTAfpAMDHIz4cgznHPC2FeIMjPk5UQ/x7L/87LB83JcPsAkl8D4uMAf/hnEQYPAAz4SvhL+EwDJjD4RvLgTPhCbuMA0ds82zx/+GcRCA8ANPhJ+EvHBfLgZPhJyM+FCM6Ab89AyYEAoPsABK4w+EJu4wD4RvJz+kGV1NHQ+kDf0fhBiMjPjits1szOyds8IG7y0GQgbvJ/0PpAMPhJxwXy4GRopv5gghAL68IAvvLgZIIQBfXhAHD7AvhrcPhs2zx/+GcNFgoPAhjQIIs4rbNYxwWKiuILDAEK103Q2zwMAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeIBru1E0NdJwgGKjkxw7UTQ9AVxIYBA9A6T1wv/kXDi+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a3D4bIBA9A7yvdcL//hicPhj4hEDNjD4RvLgTPhCbuMA0wchwgLy0EnR2zzbPH/4ZxEQDwA4+Ez4S/hK+EP4QsjL/8s/z4PL/1nIzssHzcntVAAW+En4S8cF8uBk+GwASO1E0NP/0z/TADHT/9TR0PpA0wchwgLy0EnR+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShFRQAFHNvbCAwLjQ5LjAAAAAMIPhh7R7Z",
    codeHash: "cf6996e73311720d65e37d2d6b088eccedf3b67333478ebaf7b484b5293fc050",
};
module.exports = { StatusVCContract };