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
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "Type",
                        "type": "string"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    },
                    {
                        "name": "codeIndexVC",
                        "type": "cell"
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
                        "name": "addrVC",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndexVC",
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
                "name": "_codeIndexVC",
                "type": "cell"
            },
            {
                "name": "_addrOwner",
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
    tvc: "te6ccgECJAEABNQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBQQjAu7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfB0GA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfCAgBgIoIIIQR8Yt2rvjAiCCEGHE0fW74wIMBwIoIIIQSw2T5brjAiCCEGHE0fW64wIKCAOUMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHE0fWM8Wy//JcPsAkTDi4wB/+GcfCRQBCNs8+QAXA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4Zx8LFAAI+Ez4TQRQIIIQCg2OyrrjAiCCEBYmHVC64wIgghBGfi3UuuMCIIIQR8Yt2rrjAhMRDw0DJjD4RvLgTPhCbuMA0ds82zx/+GcfDhQANPhJ+EvHBfLgZPhJyM+FCM6Ab89AyYEAoPsAA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkxn4t1LOzclw+wCRMOLjAH/4Zx8QFAJwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNs8WNs8+QBwyM+GQMoHy//J0DEXFgMqMPhG8uBM+EJu4wDU1NHbPNs8f/hnHxIUAFj4SfhLxwXy4GRopv5gghAO5rKAvvLgZAH4bPht+EnIz4WIzoBvz0DJgED7AAO4MPhCbuMA+Ebyc/pBldTR0PpA3yDXSsABk9TR0N7UINdKwAGT1NHQ3tTU0fhFIG6SMHDe+EK68uBk+CdvEIIQC+vCALry4GT4AFUC+GtY+GwB+G34ats82zx/+GcdFRQANPhN+Ez4S/hK+EP4QsjL/8s/z4PMzszMye1UAnT4S9s8+CjbPCD5AMjPigBAy//Iz4WIzxONBJAX14QAAAAAAAAAAAAAAAAAAcDPFszPkNFqvn/JcPsAFxYARG1wyMv/cFiAQPRDAXFYgED0Fsj0AMkByM+EgPQA9ADPgckBEsjO+ErQAcnbPBgCFiGLOK2zWMcFioriGhkBCAHbPMkbASYB1NQwEtDbPMjPjits1hLMzxHJGwFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOHAEEiAEjAhbtRNDXScIBio6A4h8eA4Zw7UTQ9AWI+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a4j4bIj4bYBA9A7yvdcL//hicPhjIyMjADjtRNDT/9M/0wAx1PpA1NTR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEjIgAUc29sIDAuNDkuMAAA",
    code: "te6ccgECIQEABKcABCSK7VMg4wMgwP/jAiDA/uMC8gseAgEgAu7tRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfBoDA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfB0dAwIoIIIQR8Yt2rvjAiCCEGHE0fW74wIJBAIoIIIQSw2T5brjAiCCEGHE0fW64wIHBQOUMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHE0fWM8Wy//JcPsAkTDi4wB/+GccBhEBCNs8+QAUA3Aw+Eby4Ez4Qm7jANHbPCKOHyTQ0wH6QDAxyM+HIM6AYs9AXgHPkyw2T5bMzMlw+wCRW+LjAH/4ZxwIEQAI+Ez4TQRQIIIQCg2OyrrjAiCCEBYmHVC64wIgghBGfi3UuuMCIIIQR8Yt2rrjAhAODAoDJjD4RvLgTPhCbuMA0ds82zx/+GccCxEANPhJ+EvHBfLgZPhJyM+FCM6Ab89AyYEAoPsAA5Qw+Eby4Ez4Qm7jAPpBldTR0PpA3/pBldTR0PpA39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkxn4t1LOzclw+wCRMOLjAH/4ZxwNEQJwjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNs8WNs8+QBwyM+GQMoHy//J0DEUEwMqMPhG8uBM+EJu4wDU1NHbPNs8f/hnHA8RAFj4SfhLxwXy4GRopv5gghAO5rKAvvLgZAH4bPht+EnIz4WIzoBvz0DJgED7AAO4MPhCbuMA+Ebyc/pBldTR0PpA3yDXSsABk9TR0N7UINdKwAGT1NHQ3tTU0fhFIG6SMHDe+EK68uBk+CdvEIIQC+vCALry4GT4AFUC+GtY+GwB+G34ats82zx/+GcaEhEANPhN+Ez4S/hK+EP4QsjL/8s/z4PMzszMye1UAnT4S9s8+CjbPCD5AMjPigBAy//Iz4WIzxONBJAX14QAAAAAAAAAAAAAAAAAAcDPFszPkNFqvn/JcPsAFBMARG1wyMv/cFiAQPRDAXFYgED0Fsj0AMkByM+EgPQA9ADPgckBEsjO+ErQAcnbPBUCFiGLOK2zWMcFioriFxYBCAHbPMkYASYB1NQwEtDbPMjPjits1hLMzxHJGAFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOGQEEiAEgAhbtRNDXScIBio6A4hwbA4Zw7UTQ9AWI+GqNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4a4j4bIj4bYBA9A7yvdcL//hicPhjICAgADjtRNDT/9M/0wAx1PpA1NTR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEgHwAUc29sIDAuNDkuMAAA",
    codeHash: "a1962e6943fd0cb0fe36d88a3cf20812508c3702127ba6565052553168972eab",
};
module.exports = { VCContract };