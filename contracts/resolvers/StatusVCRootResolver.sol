pragma ton-solidity => 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../StatusVCRoot.sol";


contract StatusVCRootResolver {
    TvmCell _codeStatusVCRoot;


    function resolveCodeHashVC(address issuer) public view returns(uint256) {
        return tvm.hash(_buildStatusVCRootCode(issuer));
    }

    function resolveVC(address issuer, uint256 id) public view returns(address addrStatusVCRoot) {
        TvmCell code = _buildStatusVCRootCode(issuer);
        TvmCell state = _buildStatusVCRootState(code, id);
        uint256 hashState = tvm.hash(state);
        addrVC = address.makeAddrStd(0, hashState);
    }

    function _buildStatusVCRootCode(address issuer) internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(issuer, address(this));
        return tvm.setCodeSalt(_codeStatusVCRoot, salt.toCell());
    }

    function _buildStatusVCRootState(TvmCell code, uint256 id) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: StatusVCRoot,
            varInit: {_id: id},
            code: code
        });
    }


}