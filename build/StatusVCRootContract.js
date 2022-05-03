const StatusVCRootContract = {
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
                        "name": "codeStatusVC",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndexStatus",
                        "type": "cell"
                    },
                    {
                        "name": "issuer",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createStatusVC",
                "inputs": [
                    {
                        "name": "holder",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveCodeHashStatusVC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveStatusVC",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrStatusVC",
                        "type": "address"
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
                "name": "_codeStatusVC",
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
                "name": "_codeIndexStatus",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECIAEABFcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsdBQQfAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8GQYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HBwGAiggghBhwdChu+MCIIIQazbRBrrjAgkHA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGwgYAAj4TPhLBFAgghA/YUWcuuMCIIIQQLV2VrrjAiCCEGCDv/G64wIgghBhwdChuuMCFw4MCgOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcbCxgBCNs8+QARA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGw0YAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxERADODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcbDxgC7Gim/mCCEBTck4C+8uBk2zz4S9s8+En4TVUC+ExVAyD5AMjPigBAy//Iz4WIzxONBJA7msoAAAAAAAAAAAAAAAAAAcDPFszPg1UwyM+RApt8ss5VIMjOzAHIzs3Nzclw+wD4S6T4a/hJyM+FiM6Ab89AyYBA+wAREABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwSAhYhizits1jHBYqK4hQTAQgB2zzJFQEmAdTUMBLQ2zzIz44rbNYSzM8RyRUBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhYBBIgBHwJIMPhCbuMA+Ebyc9TU+kGV1NHQ+kDf0fgA+GwB+Gr4bds8f/hnGRgAPPhN+Ez4S/hK+EP4QsjL/8s/z4PMy/9ZyM7MzcntVAIW7UTQ10nCAYqOgOIbGgKMcO1E0PQFiPhqcPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQO8r3XC//4YnD4Y3D4ax8fAEDtRNDT/9M/0wAx1NP/1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShHx4AFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECHQEABCoABCSK7VMg4wMgwP/jAiDA/uMC8gsaAgEcAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FgMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GRkDAiggghBhwdChu+MCIIIQazbRBrrjAgYEA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGAUVAAj4TPhLBFAgghA/YUWcuuMCIIIQQLV2VrrjAiCCEGCDv/G64wIgghBhwdChuuMCFAsJBwOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcYCBUBCNs8+QAOA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGAoVAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxDg0DODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcYDBUC7Gim/mCCEBTck4C+8uBk2zz4S9s8+En4TVUC+ExVAyD5AMjPigBAy//Iz4WIzxONBJA7msoAAAAAAAAAAAAAAAAAAcDPFszPg1UwyM+RApt8ss5VIMjOzAHIzs3Nzclw+wD4S6T4a/hJyM+FiM6Ab89AyYBA+wAODQBKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwPAhYhizits1jHBYqK4hEQAQgB2zzJEgEmAdTUMBLQ2zzIz44rbNYSzM8RyRIBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhMBBIgBHAJIMPhCbuMA+Ebyc9TU+kGV1NHQ+kDf0fgA+GwB+Gr4bds8f/hnFhUAPPhN+Ez4S/hK+EP4QsjL/8s/z4PMy/9ZyM7MzcntVAIW7UTQ10nCAYqOgOIYFwKMcO1E0PQFiPhqcPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyI+G2AQPQO8r3XC//4YnD4Y3D4axwcAEDtRNDT/9M/0wAx1NP/1NHQ+kDU0fht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShHBsAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "97c6a7275e18a468b894ff1d45703b00b6915171bd6e6dd28a609135a1e3761d",
};
module.exports = { StatusVCRootContract };