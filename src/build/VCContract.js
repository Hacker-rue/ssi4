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
    tvc: "te6ccgECFgEAAsAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsTBQQVAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8EhIGBFAgghAWJh1QuuMCIIIQR8Yt2rrjAiCCEEsNk+W64wIgghBsASLTuuMCDgwKBwJeMPhCbuMA+Ebyc/pBldTR0PpA3yDXSsABk9TR0N7U1NH4AFj4agH4a/hs2zx/+GcIDwIW7UTQ10nCAYqOgOIRCQKAcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqI+GuI+GyAQPQO8r3XC//4YnD4YxUVA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4ZxELDwAI+Ev4TAMmMPhG8uBM+EJu4wDR2zzbPH/4ZxENDwBQ+En4SscF8uBkaKb+YIIQBfXhAL7y4GT4ScjPhQjOgG/PQMmBAKD7AAMqMPhG8uBM+EJu4wDU1NHbPNs8f/hnERAPAC74TPhL+Er4Q/hCyMv/yz/Pg87MzMntVABY+En4SscF8uBkaKb+YIIQC+vCAL7y4GQB+Gv4bPhJyM+FiM6Ab89AyYBA+wAAMu1E0NP/0z/TADH6QNTU0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRUUABRzb2wgMC40OS4wAAA=",
    code: "te6ccgECEwEAApMABCSK7VMg4wMgwP/jAiDA/uMC8gsQAgESAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8BQMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8DBFAgghAWJh1QuuMCIIIQR8Yt2rrjAiCCEEsNk+W64wIgghBsASLTuuMCCwkHBAJeMPhCbuMA+Ebyc/pBldTR0PpA3yDXSsABk9TR0N7U1NH4AFj4agH4a/hs2zx/+GcFDAIW7UTQ10nCAYqOgOIOBgKAcO1E0PQFjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GqI+GuI+GyAQPQO8r3XC//4YnD4YxISA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4Zw4IDAAI+Ev4TAMmMPhG8uBM+EJu4wDR2zzbPH/4Zw4KDABQ+En4SscF8uBkaKb+YIIQBfXhAL7y4GT4ScjPhQjOgG/PQMmBAKD7AAMqMPhG8uBM+EJu4wDU1NHbPNs8f/hnDg0MAC74TPhL+Er4Q/hCyMv/yz/Pg87MzMntVABY+En4SscF8uBkaKb+YIIQC+vCAL7y4GQB+Gv4bPhJyM+FiM6Ab89AyYBA+wAAMu1E0NP/0z/TADH6QNTU0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRIRABRzb2wgMC40OS4wAAA=",
    codeHash: "2f892fa9bc5c5f6c838fff4ee531aece70030a7ce42628f429b66e4291b3b184",
};
module.exports = { VCContract };