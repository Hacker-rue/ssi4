const statusVCAPI = require('./src/modules/Everscale/statusVCAPI')
const statusVCRootAPI = require('./src/modules/Everscale/statusVCRootAPI')
const VCAPI = require('./src/modules/Everscale/statusVCRootAPI')

const moduleEver = require('./src/modules/moduleEver')
const moduleVC = require('./src/modules/moduleVC')
const moduleVP = require('./src/modules/moduleVP')

module.exports = {
    statusVCAPI,
    statusVCRootAPI,
    VCAPI,
    moduleEver,
    moduleVC,
    moduleVP
}