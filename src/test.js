const { TonClient, signerNone, signerKeys } = require('@tonclient/core')
const { Account } = require('@tonclient/appkit')
const { libNode } = require('@tonclient/lib-node')

const moduleEver = require('./modules/moduleEver')
const moduleVC = require('./modules/moduleVC')
const moduleVP = require('./modules/moduleVP')

const statusVCAPI = require('./modules/Everscale/statusVCAPI')
const statusVCRootAPI = require('./modules/Everscale/statusVCRootAPI')
const VCAPI = require('./modules/Everscale/VCAPI')

const { ClientContract } = require('./build/ClientContract')

TonClient.useBinaryLibrary(libNode)


const client = new TonClient({
    network: {
        endpoints: ['net.ton.dev']
    }
})

const userAccount = new Account(ClientContract, {
    address: "0:e3e51a35c9ab1894a3c5e179fe4a0499874b9d1907cd60c577b63008ab3b7210",
    signer: signerKeys({
        public: '4e50f5c94c33a7bb6a2d55e1d9ecdd4a06b5d289417c880c48afc99ccfe72736',
        secret: '961502adae3a781c6604a3eebfdae6aef4024a233b37a6a36e3e856fdef43a3c'
      }),
    client: client
})

const statusVCRoot = new moduleEver.statusVC(client, "0:31e80c7c5ccfa5a6ed7ddfbcb3fb4cca624aa59be17680d6f122931510ed0044")

