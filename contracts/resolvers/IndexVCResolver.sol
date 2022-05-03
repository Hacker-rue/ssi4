pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../IndexVC.sol";

contract IndexVCResolver {
    TvmCell _codeIndexVC;

    function resolveCodeHashIndexVC(address addrOwner) public view returns(uint256) {
        return tvm.hash(_buildIndexVCCode(addrOwner));
    }

    function resolveIndexVC(address addrOwner, address addrVC) public view returns(address addrIndexVC) {
        TvmCell code = _buildIndexVCCode(addrOwner);
        TvmCell state = _buildIndexVCState(code, addrVC);
        uint256 hashState = tvm.hash(state);
        addrIndexVC = address.makeAddrStd(0, hashState);
    }

    function _buildIndexVCCode(address addrOwner) internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(addrOwner);
        return tvm.setCodeSalt(_codeIndexVC, salt.toCell());
    }

    function _buildIndexVCState(TvmCell code, address addrVC) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: IndexVC,
            varInit: {_addrVC: addrVC},
            code: code
        });
    }


}