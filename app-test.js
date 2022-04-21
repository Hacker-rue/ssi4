const {issueVC} = require('./src/modules/moduleVC.js');


const credential = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "id": "https://example.com/credentials/1872",
    "type": ["VerifiableCredential", "AlumniCredential"],
    "issuer": "did:everscale:a241425010b87661ed47f92dad706c1d3c9578f99f2004cb64b70f8ef0e5ea41",
    "issuanceDate": "2010-01-01T19:23:24Z",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "alumniOf": "Example University"
    }
};

const secretKey = '47325e80e3cef5922d3a3583ae5c405ded7bda781cb069f2bc932a6c3d6ec62e'

issueVC(credential, secretKey).then((res)=>{
    console.log(res);
})


