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
        "data": [
            {
                "key": 1,
                "name": "_number",
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
                "name": "_codeStatusVC",
                "type": "cell"
            },
            {
                "name": "_number",
                "type": "uint256"
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
    tvc: "te6ccgECJgEABOgAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUlBAQkiu1TIOMDIMD/4wIgwP7jAvILIgYFJALm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfB4HA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfCEhBwIoIIIQYcHQobvjAiCCEGs20Qa64wIKCAN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5Os20Qazsv/zclw+wCRW+LjAH/4ZyAJGgAI+E34TARQIIIQHIrpG7rjAiCCEFwt9/W64wIgghBgg7/xuuMCIIIQYcHQobrjAhgPDQsDgjD4RvLgTPhCbuMA0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADhwdChjPFsv/yXD7AJEw4uMAf/hnIAwaAQjbPPkAEgN0MPhG8uBM+EJu4wDT/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk4IO/8bOzclw+wCRMOLjAH/4ZyAOGgJujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE2zxY2zz5AHDIz4ZAygfL/8nQMRIRAyYw+Eby4Ez4Qm7jANHbPNs8f/hnIBAaAqzbPPhM2zz4TQEg+QDIz4oAQMv/yM+FiM8TjQSQR4aMAAAAAAAAAAAAAAAAAAHAzxbMz4MByM+RHVlTcs7NyXD7APhMpPhs+EnIz4WIzoBvz0DJgED7ABIRAEptcMjL/3BYgED0QwHIy/9xWIBA9EPI9ADJAcjPhID0APQAz4HJARb4KMjO+ErQAcnbPBMCFiGLOK2zWMcFioriFRQBCAHbPMkWASYB1NQwEtDbPMjPjits1hLMzxHJFgFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOFwEEiAEkBPow+EJu4wD4RvJz1NH4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0GRopv5gghAL68IAvvLgZIIQBfXhAHD7AiD4bQH4asjPhYjOgG/PQMmBAID7AB4lGxkBCts8f/hnGgA++E34TPhL+Er4Q/hCyMv/yz/Pg8zL/8v/AcjOzcntVAIY0CCLOK2zWMcFioriHB0BCtdN0Ns8HQBC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBio6A4iAfAaRw7UTQ9AWI+GpxIYBA9A6T1wv/kXDi+Gtw+GyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bYBA9A7yvdcL//hicPhjcPhsJABC7UTQ0//TP9MAMdTT/9P/1NHQ+kDR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEkIwAUc29sIDAuNDkuMAAAAAwg+GHtHtk=",
    code: "te6ccgECIwEABLsAAgaK2zUiAQQkiu1TIOMDIMD/4wIgwP7jAvILHwMCIQLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfBsEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfB4eBAIoIIIQYcHQobvjAiCCEGs20Qa64wIHBQN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5Os20Qazsv/zclw+wCRW+LjAH/4Zx0GFwAI+E34TARQIIIQHIrpG7rjAiCCEFwt9/W64wIgghBgg7/xuuMCIIIQYcHQobrjAhUMCggDgjD4RvLgTPhCbuMA0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADhwdChjPFsv/yXD7AJEw4uMAf/hnHQkXAQjbPPkADwN0MPhG8uBM+EJu4wDT/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk4IO/8bOzclw+wCRMOLjAH/4Zx0LFwJujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE2zxY2zz5AHDIz4ZAygfL/8nQMQ8OAyYw+Eby4Ez4Qm7jANHbPNs8f/hnHQ0XAqzbPPhM2zz4TQEg+QDIz4oAQMv/yM+FiM8TjQSQR4aMAAAAAAAAAAAAAAAAAAHAzxbMz4MByM+RHVlTcs7NyXD7APhMpPhs+EnIz4WIzoBvz0DJgED7AA8OAEptcMjL/3BYgED0QwHIy/9xWIBA9EPI9ADJAcjPhID0APQAz4HJARb4KMjO+ErQAcnbPBACFiGLOK2zWMcFioriEhEBCAHbPMkTASYB1NQwEtDbPMjPjits1hLMzxHJEwFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOFAEEiAEhBPow+EJu4wD4RvJz1NH4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDAgjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExwXy0GRopv5gghAL68IAvvLgZIIQBfXhAHD7AiD4bQH4asjPhYjOgG/PQMmBAID7ABsiGBYBCts8f/hnFwA++E34TPhL+Er4Q/hCyMv/yz/Pg8zL/8v/AcjOzcntVAIY0CCLOK2zWMcFioriGRoBCtdN0Ns8GgBC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBio6A4h0cAaRw7UTQ9AWI+GpxIYBA9A6T1wv/kXDi+Gtw+GyNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4bYBA9A7yvdcL//hicPhjcPhsIQBC7UTQ0//TP9MAMdTT/9P/1NHQ+kDR+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEhIAAUc29sIDAuNDkuMAAAAAwg+GHtHtk=",
    codeHash: "7f4aa50671ea2ec25baed42faa98e60464f9041a0f37ec8f3842f16e29c88cf4",
};
module.exports = { StatusVCRootContract };