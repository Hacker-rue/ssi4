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
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "codeStatusVC",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createStatusVC",
                "inputs": [],
                "outputs": [
                    {
                        "name": "statusVC",
                        "type": "address"
                    }
                ]
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
    tvc: "te6ccgECIAEABBYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsdBQQfAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfA8GA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HBwGAiggghBhwdChu+MCIIIQazbRBrrjAgkHA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGwgSAAj4TPhLBFAgghAjSY+CuuMCIIIQJ7LNHbrjAiCCEGCDv/G64wIgghBhwdChuuMCEQ4MCgOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcbCxIBCNs8+QAVA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGw0SAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxFRQCQjD4Qm7jAPhG8nP6QZXU0dD6QN/U0fgAAfhs+GrbPH/4Zw8SAhbtRNDXScIBio6A4hsQAYBw7UTQ9AWI+Gpw+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bIBA9A7yvdcL//hicPhjHwNwMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5KNJj4Kzs3JcPsAkTDi2zx/+GcbExIANvhM+Ev4SvhD+ELIy//LP8+DzMv/AcjOzcntVAKm2zz4S9s8+ExTEfkAyM+KAEDL/8jPhYjPE40EkEeGjAAAAAAAAAAAAAAAAAABwM8WzM+DAcjPkR1ZU3LOzclw+wD4S6T4a/kAcMjPhkDKB8v/ydAVFABKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwWAhYhizits1jHBYqK4hgXAQgB2zzJGQEmAdTUMBLQ2zzIz44rbNYSzM8RyRkBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhoBBIgBHwA67UTQ0//TP9MAMdTT/9TR0PpA0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oR8eABRzb2wgMC40OS4wAAA=",
    code: "te6ccgECHQEAA+kABCSK7VMg4wMgwP/jAiDA/uMC8gsaAgEcAprtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAwDA1DtRNDXScMB+GYi0NcLA6k4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GRkDAiggghBhwdChu+MCIIIQazbRBrrjAgYEA3Qw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM5xzwthAsjPk6zbRBrOy//NyXD7AJFb4uMAf/hnGAUPAAj4TPhLBFAgghAjSY+CuuMCIIIQJ7LNHbrjAiCCEGCDv/G64wIgghBhwdChuuMCDgsJBwOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOHB0KGM8Wy//JcPsAkTDi4wB/+GcYCA8BCNs8+QASA3Qw+Eby4Ez4Qm7jANP/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tgg7/xs7NyXD7AJEw4uMAf/hnGAoPAm6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATbPFjbPPkAcMjPhkDKB8v/ydAxEhECQjD4Qm7jAPhG8nP6QZXU0dD6QN/U0fgAAfhs+GrbPH/4ZwwPAhbtRNDXScIBio6A4hgNAYBw7UTQ9AWI+Gpw+GuNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bIBA9A7yvdcL//hicPhjHANwMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5KNJj4Kzs3JcPsAkTDi2zx/+GcYEA8ANvhM+Ev4SvhD+ELIy//LP8+DzMv/AcjOzcntVAKm2zz4S9s8+ExTEfkAyM+KAEDL/8jPhYjPE40EkEeGjAAAAAAAAAAAAAAAAAABwM8WzM+DAcjPkR1ZU3LOzclw+wD4S6T4a/kAcMjPhkDKB8v/ydASEQBKbXDIy/9wWIBA9EMByMv/cViAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwTAhYhizits1jHBYqK4hUUAQgB2zzJFgEmAdTUMBLQ2zzIz44rbNYSzM8RyRYBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhcBBIgBHAA67UTQ0//TP9MAMdTT/9TR0PpA0fhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRwbABRzb2wgMC40OS4wAAA=",
    codeHash: "a6e2c265224a1d114eb9f18f935a02fe403a1707936e264c4d2f41ea94060477",
};
module.exports = { StatusVCRootContract };