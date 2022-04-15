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
                "name": "_holder",
                "type": "address"
            },
            {
                "name": "_status",
                "type": "uint8"
            }
        ]
    },
    tvc: "te6ccgECHQEABBUAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUcBAQkiu1TIOMDIMD/4wIgwP7jAvILGQYFGwLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAwHA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBgYBwIoIIIQZUQ/x7vjAiCCEGzAojm64wINCAT4MPhCbuMA+Ebyc/pBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39H4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDD4SccF8uBkaKb+YIIQC+vCAL7y4GSCEAX14QBw+wJY+GsB+Gxw+G3Iz4WIzoBvz0DJgQCA+wDbPH/4ZwwcCRUCGNAgizits1jHBYqK4goLAQrXTdDbPAsAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gH67UTQ10nCAYqOcnDtRND0BXEhgED0DpPXC/+RcOL4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gxw+G2AQPQO8r3XC//4YnD4Y+IXBFAgghAostEAuuMCIIIQNVt26brjAiCCEEfGLdq64wIgghBlRD/HuuMCFBIQDgN8MPhG8uBM+EJu4wDR2zwjjiQl0NMB+kAwMcjPhyDOcc8LYV4gyM+TlRD/Hsv/zssHzclw+wCSXwPi4wB/+GcXDxUADPhK+Ev4TQMmMPhG8uBM+EJu4wDR2zzbPH/4ZxcRFQA0+En4S8cF8uBk+EnIz4UIzoBvz0DJgQCg+wADNjD4RvLgTPhCbuMA0wchwgLy0EnR2zzbPH/4ZxcTFQBg+En4S8cF8uBk+E3DAfLgZGim/mCCEAjw0YC+8uBk+G34ScjPhYjOgG/PQMmAQPsAAyYw+Eby4Ez4Qm7jANHbPNs8f/hnFxYVAEb4TfhM+Ev4SvhD+ELIy//LP8+Dy/9VIMjOWcjOywfNzcntVAB2+E3DAfLgZGim/mCCEAjw0YC+8uBk+En4S8cFIJcw+En4TMcF3/LgZHH4bfhJyM+FiM6Ab89AyYBA+wAAVu1E0NP/0z/TADHT/9TR0PpA1NHQ+kDTByHCAvLQSdH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRsaABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    code: "te6ccgECGgEAA+gAAgaK2zUZAQQkiu1TIOMDIMD/4wIgwP7jAvILFgMCGALm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAkEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBUVBAIoIIIQZUQ/x7vjAiCCEGzAojm64wIKBQT4MPhCbuMA+Ebyc/pBldTR0PpA3/pBldTR0PpA3/pBldTR0PpA39H4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDD4SccF8uBkaKb+YIIQC+vCAL7y4GSCEAX14QBw+wJY+GsB+Gxw+G3Iz4WIzoBvz0DJgQCA+wDbPH/4ZwkZBhICGNAgizits1jHBYqK4gcIAQrXTdDbPAgAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gH67UTQ10nCAYqOcnDtRND0BXEhgED0DpPXC/+RcOL4ao0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gxw+G2AQPQO8r3XC//4YnD4Y+IUBFAgghAostEAuuMCIIIQNVt26brjAiCCEEfGLdq64wIgghBlRD/HuuMCEQ8NCwN8MPhG8uBM+EJu4wDR2zwjjiQl0NMB+kAwMcjPhyDOcc8LYV4gyM+TlRD/Hsv/zssHzclw+wCSXwPi4wB/+GcUDBIADPhK+Ev4TQMmMPhG8uBM+EJu4wDR2zzbPH/4ZxQOEgA0+En4S8cF8uBk+EnIz4UIzoBvz0DJgQCg+wADNjD4RvLgTPhCbuMA0wchwgLy0EnR2zzbPH/4ZxQQEgBg+En4S8cF8uBk+E3DAfLgZGim/mCCEAjw0YC+8uBk+G34ScjPhYjOgG/PQMmAQPsAAyYw+Eby4Ez4Qm7jANHbPNs8f/hnFBMSAEb4TfhM+Ev4SvhD+ELIy//LP8+Dy/9VIMjOWcjOywfNzcntVAB2+E3DAfLgZGim/mCCEAjw0YC+8uBk+En4S8cFIJcw+En4TMcF3/LgZHH4bfhJyM+FiM6Ab89AyYBA+wAAVu1E0NP/0z/TADHT/9TR0PpA1NHQ+kDTByHCAvLQSdH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRgXABRzb2wgMC40OS4wAAAADCD4Ye0e2Q==",
    codeHash: "9c25ac09ebf0e78cdeb5f884becbb21c6075c6d97405f94062454c9cbe7cbc85",
};
module.exports = { StatusVCContract };