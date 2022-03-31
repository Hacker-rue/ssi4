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
                "inputs": [],
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
    tvc: "te6ccgECIAEABC4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsdBQQfAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8GQYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HBwGAiggghBhwdChu+MCIIIQazbRBrrjAgkHA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGwgYAAj4TPhLBFAgghAMf83quuMCIIIQXC339brjAiCCEGCDv/G64wIgghBhwdChuuMCFw4MCgOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcbCxgBCNs8+QARA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGw0YAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxERADJjD4RvLgTPhCbuMA0ds82zx/+GcbDxgCyGim/mCCEBTck4C+8uBk2zz4S9s8+EwBIPkAyM+KAEDL/8jPhYjPE40EkEeGjAAAAAAAAAAAAAAAAAABwM8WzM+DAcjPkR1ZU3LOzclw+wD4S6T4a/hJyM+FiM6Ab89AyYBA+wAREABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwSAhYhizits1jHBYqK4hQTAQgB2zzJFQEmAdTUMBLQ2zzIz44rbNYSzM8RyRUBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhYBBIgBHwJAMPhCbuMA+Ebyc9T6QZXU0dD6QN/R+AD4bPhq2zx/+GcZGAA2+Ez4S/hK+EP4QsjL/8s/z4PMy/8ByM7Nye1UAhbtRNDXScIBio6A4hsaAYZw7UTQ9AWI+Gpw+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bIBA9A7yvdcL//hicPhjcPhrHwA67UTQ0//TP9MAMdTT/9TR0PpA0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oR8eABRzb2wgMC40OS4wAAA=",
    code: "te6ccgECHQEABAEABCSK7VMg4wMgwP/jAiDA/uMC8gsaAgEcAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FgMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GRkDAiggghBhwdChu+MCIIIQazbRBrrjAgYEA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGAUVAAj4TPhLBFAgghAMf83quuMCIIIQXC339brjAiCCEGCDv/G64wIgghBhwdChuuMCFAsJBwOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcYCBUBCNs8+QAOA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGAoVAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxDg0DJjD4RvLgTPhCbuMA0ds82zx/+GcYDBUCyGim/mCCEBTck4C+8uBk2zz4S9s8+EwBIPkAyM+KAEDL/8jPhYjPE40EkEeGjAAAAAAAAAAAAAAAAAABwM8WzM+DAcjPkR1ZU3LOzclw+wD4S6T4a/hJyM+FiM6Ab89AyYBA+wAODQBKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwPAhYhizits1jHBYqK4hEQAQgB2zzJEgEmAdTUMBLQ2zzIz44rbNYSzM8RyRIBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhMBBIgBHAJAMPhCbuMA+Ebyc9T6QZXU0dD6QN/R+AD4bPhq2zx/+GcWFQA2+Ez4S/hK+EP4QsjL/8s/z4PMy/8ByM7Nye1UAhbtRNDXScIBio6A4hgXAYZw7UTQ9AWI+Gpw+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bIBA9A7yvdcL//hicPhjcPhrHAA67UTQ0//TP9MAMdTT/9TR0PpA0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRwbABRzb2wgMC40OS4wAAA=",
    codeHash: "1235664e23abd46e83914d3e5900c039e709de8b4e728c79787dc6b0e395c9cf",
};
module.exports = { StatusVCRootContract };