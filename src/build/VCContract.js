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
    tvc: "te6ccgECFgEAAsQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBQQVAu7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAgGA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBISBgRQIIIQFiYdULrjAiCCEEfGLdq64wIgghBLDZPluuMCIIIQbAEi07rjAg4MCgcCejD4Qm7jAPhG8nP6QZXU0dD6QN8g10rAAZPU0dDe1NTR+EUgbpIwcN74Qrry4GT4AFj4agH4a/hs2zx/+GcIDwIW7UTQ10nCAYqOgOIRCQKAcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqI+GuI+GyAQPQO8r3XC//4YnD4YxUVA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4ZxELDwAI+Ev4TAMmMPhG8uBM+EJu4wDR2zzbPH/4ZxENDwA0+En4SscF8uBk+EnIz4UIzoBvz0DJgQCg+wADKjD4RvLgTPhCbuMA1NTR2zzbPH/4ZxEQDwAu+Ez4S/hK+EP4QsjL/8s/z4POzMzJ7VQAWPhJ+ErHBfLgZGim/mCCEA7msoC+8uBkAfhr+Gz4ScjPhYjOgG/PQMmAQPsAADLtRNDT/9M/0wAx+kDU1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEVFAAUc29sIDAuNDkuMAAA",
    code: "te6ccgECEwEAApcABCSK7VMg4wMgwP/jAiDA/uMC8gsQAgESAu7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAUDA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfA8PAwRQIIIQFiYdULrjAiCCEEfGLdq64wIgghBLDZPluuMCIIIQbAEi07rjAgsJBwQCejD4Qm7jAPhG8nP6QZXU0dD6QN8g10rAAZPU0dDe1NTR+EUgbpIwcN74Qrry4GT4AFj4agH4a/hs2zx/+GcFDAIW7UTQ10nCAYqOgOIOBgKAcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqI+GuI+GyAQPQO8r3XC//4YnD4YxISA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4Zw4IDAAI+Ev4TAMmMPhG8uBM+EJu4wDR2zzbPH/4Zw4KDAA0+En4SscF8uBk+EnIz4UIzoBvz0DJgQCg+wADKjD4RvLgTPhCbuMA1NTR2zzbPH/4Zw4NDAAu+Ez4S/hK+EP4QsjL/8s/z4POzMzJ7VQAWPhJ+ErHBfLgZGim/mCCEA7msoC+8uBkAfhr+Gz4ScjPhYjOgG/PQMmAQPsAADLtRNDT/9M/0wAx+kDU1NH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNDkuMAAA",
    codeHash: "25f62177008f3d717b0afcb051c6d9324abed88492e19255d27fbd30c24521a3",
};
module.exports = { VCContract };