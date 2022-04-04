const VCContract = {
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
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setValue",
                "inputs": [
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
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
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    }
                ]
            }
        ],
        "data": [],
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
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_type",
                "type": "string"
            },
            {
                "name": "_value",
                "type": "string"
            }
        ]
    },
    tvc: "te6ccgECFgEAAscAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBQQVAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EhIGBFAgghAWJh1QuuMCIIIQR8Yt2rrjAiCCEEsNk+W64wIgghBsASLTuuMCDgwKBwJaMPhCbuMA+Ebyc/pBldTR0PpA3yDXSsABk9TR0N7U1NH4AFj4ajD4a9s8f/hnCA8CFu1E0NdJwgGKjoDiEQkCgHDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqiPhriPhsgED0DvK91wv/+GJw+GMVFQNwMPhG8uBM+EJu4wDR2zwijh8k0NMB+kAwMcjPhyDOgGLPQF4Bz5MsNk+WzMzJcPsAkVvi4wB/+GcRCw8AGvhJ+ErHBfLgZPhL+EwDJjD4RvLgTPhCbuMA0ds82zx/+GcRDQ8AUPhJ+ErHBfLgZGim/mCCEAX14QC+8uBk+EnIz4UIzoBvz0DJgQCg+wADKjD4RvLgTPhCbuMA1NTR2zzbPH/4ZxEQDwAu+Ez4S/hK+EP4QsjL/8s/z4POzMzJ7VQAWPhJ+ErHBfLgZGim/mCCEAvrwgC+8uBkAfhr+Gz4ScjPhYjOgG/PQMmAQPsAADLtRNDT/9M/0wAx+kDU1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEVFAAUc29sIDAuNDkuMAAA",
    code: "te6ccgECEwEAApoABCSK7VMg4wMgwP/jAiDA/uMC8gsQAgESAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BQMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8DBFAgghAWJh1QuuMCIIIQR8Yt2rrjAiCCEEsNk+W64wIgghBsASLTuuMCCwkHBAJaMPhCbuMA+Ebyc/pBldTR0PpA3yDXSsABk9TR0N7U1NH4AFj4ajD4a9s8f/hnBQwCFu1E0NdJwgGKjoDiDgYCgHDtRND0BY0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhqiPhriPhsgED0DvK91wv/+GJw+GMSEgNwMPhG8uBM+EJu4wDR2zwijh8k0NMB+kAwMcjPhyDOgGLPQF4Bz5MsNk+WzMzJcPsAkVvi4wB/+GcOCAwAGvhJ+ErHBfLgZPhL+EwDJjD4RvLgTPhCbuMA0ds82zx/+GcOCgwAUPhJ+ErHBfLgZGim/mCCEAX14QC+8uBk+EnIz4UIzoBvz0DJgQCg+wADKjD4RvLgTPhCbuMA1NTR2zzbPH/4Zw4NDAAu+Ez4S/hK+EP4QsjL/8s/z4POzMzJ7VQAWPhJ+ErHBfLgZGim/mCCEAvrwgC+8uBkAfhr+Gz4ScjPhYjOgG/PQMmAQPsAADLtRNDT/9M/0wAx+kDU1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNDkuMAAA",
    codeHash: "bc48fc4652f399554017225ed9bb0bc2c90e62fcce0e5885dfb483988aaa0e1b",
};
module.exports = { VCContract };