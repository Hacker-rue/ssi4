const { Metadata } = require("./app")




async function testMetadataClass() {
    returnMetadata = {
        '@context': [],
        id: '',
        type: [],
        issuer: '',
        issuanceDate: '',
        credentialSubject: { id: '', name: '' },
        proof: {
          type: 'Ed25519Signature2020',
          created: '2021-11-13T18:19:39Z',
          verificationMethod: 'https://example.edu/issuers/14#key-1',
          proofPurpose: 'assertionMethod',
          proofValue: 'z58DAdFfa9SkqZMVPxAQpic7ndSayn1PzZs6ZjWp1CktyGesjuTSwRdoWhAfGFCF5bppETSTojQCrfFPP2oumHKtz'
        }
    }


    requiredParameters = [
        "id",
        "type",
        "issuer",
        "issuanceDate",
        "credentialSubject",
        "proof"
    ]

    credentialSubject = "\"credentialSubject\": {" +
    "\"id\": \"\"," +
    "\"name\": \"\" },"

    uri = "https://www.w3.org/2018/credentials/v1"

    var _Metadata = new Metadata(uri, requiredParameters, credentialSubject)

    JsonMetadata = await _Metadata.getMetadataVC()

    if(JSON.stringify(JsonMetadata) == JSON.stringify(returnMetadata)) {
        console.log("Функция работает правильно!")
    }
}

testMetadataClass()