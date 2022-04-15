pragma ton-solidity >= 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/StatusVCRootResolver.sol";

contract CreateStatusVCRoot is StatusVCRootResolver {

    uint256 _id = 0;

    TvmCell _codeStatusVC;

    constructor(TvmCell codeStatusVCRoot) public {
        tvm.accept();
        _codeStatusVCRoot = codeStatusVCRoot;
    }

    function createStatusVCRoot() public returns(address addrStatusVCRoot) {
        require(msg.value >= 0.4 ton);

        TvmCell code = _buildStatusVCRootCode(msg.sender);
        TvmCell state = _buildStatusVCRootState(code, _id);

        new StatusVCRoot {
            stateInit: state,
            value: 0.3 ton
        } (_codeStatusVC);

        uint256 hashState = tvm.hash(state);
        addrVC = address.makeAddrStd(0, hashState);
    }

}