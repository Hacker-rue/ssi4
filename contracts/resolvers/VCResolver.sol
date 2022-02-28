pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire; 

import "../VC.sol";

contract VCResolver {
    TvmCell _codeVC;

    function resolveCodeHashVC(address owner) public view returns(uint256) {
        return tvm.hash(_buildVCCode(owner));
    }

    function resolveVC(address owner, uint256 id) public view returns(address addrVC) {
        TvmCell code = _buildVCCode(owner);
        TvmCell state = _buildVCState(code, id);
        uint256 hashState = tvm.hash(state);
        addrVC = address.makeAddrStd(0, hashState);
    }

    function _buildVCCode(address owner) internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(owner);
        return tvm.setCodeSalt(_codeVC, salt.toCell());
    }

    function _buildVCState(TvmCell code, uint256 id) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: VC,
            varInit: {_id: id},
            code: code
        });
    }


}