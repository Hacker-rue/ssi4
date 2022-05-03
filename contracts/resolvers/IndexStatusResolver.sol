pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../IndexStatus.sol";

contract IndexStatusResolver {
    TvmCell _codeIndexStatus;

    function resolveCodeHashIndexVC(address addrOwner) public view returns(uint256) {
        return tvm.hash(_buildIndexStatusCode(addrOwner));
    }

    function resolveIndexVC(address addrOwner, address addrStatus) public view returns(address addrIndexStatus) {
        TvmCell code = _buildIndexStatusCode(addrOwner);
        TvmCell state = _buildIndexStatusState(code, addrStatus);
        uint256 hashState = tvm.hash(state);
        addrIndexStatus = address.makeAddrStd(0, hashState);
    }

    function _buildIndexStatusCode(address addrOwner) internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(addrOwner);
        return tvm.setCodeSalt(_codeIndexStatus, salt.toCell());
    }

    function _buildIndexStatusState(TvmCell code, address addrStatus) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: IndexStatus,
            varInit: {_addrStatus: addrStatus},
            code: code
        });
    }


}