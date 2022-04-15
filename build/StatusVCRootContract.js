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
            }
        ]
    },
    tvc: "te6ccgECIAEABEQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsdBQQfAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8GQYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HBwGAiggghBhwdChu+MCIIIQazbRBrrjAgkHA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGwgYAAj4TPhLBFAgghAMf83quuMCIIIQQLV2VrrjAiCCEGCDv/G64wIgghBhwdChuuMCFw4MCgOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcbCxgBCNs8+QARA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGw0YAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxERADODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcbDxgC4mim/mCCEBTck4C+8uBk2zz4S9s8+ElY+ExVAiD5AMjPigBAy//Iz4WIzxONBJA7msoAAAAAAAAAAAAAAAAAAcDPFszPg1UgyM+RswKI5s5ZyM4ByM7Nzc3JcPsA+Euk+Gv4ScjPhYjOgG/PQMmAQPsAERAASm1wyMv/cFiAQPRDAcjL/3FYgED0Q8j0AMkByM+EgPQA9ADPgckBFvgoyM74StAByds8EgIWIYs4rbNYxwWKiuIUEwEIAds8yRUBJgHU1DAS0Ns8yM+OK2zWEszPEckVAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4WAQSIAR8CQDD4Qm7jAPhG8nPU+kGV1NHQ+kDf0fgA+Gz4ats8f/hnGRgANvhM+Ev4SvhD+ELIy//LP8+DzMv/AcjOzcntVAIW7UTQ10nCAYqOgOIbGgGGcO1E0PQFiPhqcPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyAQPQO8r3XC//4YnD4Y3D4ax8AOu1E0NP/0z/TADHU0//U0dD6QNH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEfHgAUc29sIDAuNDkuMAAA",
    code: "te6ccgECHQEABBcABCSK7VMg4wMgwP/jAiDA/uMC8gsaAgEcAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FgMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GRkDAiggghBhwdChu+MCIIIQazbRBrrjAgYEA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGAUVAAj4TPhLBFAgghAMf83quuMCIIIQQLV2VrrjAiCCEGCDv/G64wIgghBhwdChuuMCFAsJBwOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcYCBUBCNs8+QAOA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGAoVAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxDg0DODD4RvLgTPhCbuMA+kGV1NHQ+kDf0ds82zx/+GcYDBUC4mim/mCCEBTck4C+8uBk2zz4S9s8+ElY+ExVAiD5AMjPigBAy//Iz4WIzxONBJA7msoAAAAAAAAAAAAAAAAAAcDPFszPg1UgyM+RswKI5s5ZyM4ByM7Nzc3JcPsA+Euk+Gv4ScjPhYjOgG/PQMmAQPsADg0ASm1wyMv/cFiAQPRDAcjL/3FYgED0Q8j0AMkByM+EgPQA9ADPgckBFvgoyM74StAByds8DwIWIYs4rbNYxwWKiuIREAEIAds8yRIBJgHU1DAS0Ns8yM+OK2zWEszPEckSAWbViy9KQNcm9ATTCTEg10qR1I6A4osvShjXJjAByM+L0pD0AIAgzwsJz4vShswSzMjPEc4TAQSIARwCQDD4Qm7jAPhG8nPU+kGV1NHQ+kDf0fgA+Gz4ats8f/hnFhUANvhM+Ev4SvhD+ELIy//LP8+DzMv/AcjOzcntVAIW7UTQ10nCAYqOgOIYFwGGcO1E0PQFiPhqcPhrjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+GyAQPQO8r3XC//4YnD4Y3D4axwAOu1E0NP/0z/TADHU0//U0dD6QNH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEcGwAUc29sIDAuNDkuMAAA",
    codeHash: "81fa9f974d5da803e4d394bca16f49e2a84ed95d9af1dc5df1958a91b2dac91e",
};
module.exports = { StatusVCRootContract };