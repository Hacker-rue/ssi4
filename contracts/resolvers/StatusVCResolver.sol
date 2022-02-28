pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "../StatusVC.sol";

contract StatusVCResolver {
    TvmCell _codeStatusVC;

    function resolveCodeHashStatusVC() public view returns(uint256) {
        return tvm.hash(_buildStatusVCCode());
    }

    function resolveStatusVC(uint256 id) public view returns(address addrStatusVC) {
        TvmCell code = _buildStatusVCCode();
        TvmCell state = _buildStatusVCState(code, id);
        uint256 hashState = tvm.hash(state);
        addrStatusVC = address.makeAddrStd(0, hashState);
    }

    function _buildStatusVCCode() internal view returns(TvmCell) {
        TvmBuilder salt;
        salt.store(address(this));
        return tvm.setCodeSalt(_codeStatusVC, salt.toCell());
    }

    function _buildStatusVCState(TvmCell code, uint256 id) internal view returns(TvmCell) {
        return tvm.buildStateInit({
            contr: StatusVC,
            varInit: {_id: id},
            code: code
        });
    }


}