pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/StatusVCResolver.sol";

contract StatusVCRoot is StatusVCResolver {
    uint256 _id;

    address _issuer;

    constructor(address issuer, TvmCell codeStatusVC) public {
        tvm.accept();

        _issuer = issuer;
        _codeStatusVC = codeStatusVC;
    }

    function createStatusVC() public returns(
        address statusVC
    ) {
        TvmCell code = _buildStatusVCCode();
        TvmCell state = _buildStatusVCState(code, _id);
        new StatusVC {
            stateInit: state,
            value: 0.3 ton
        } (_issuer);

        _id++;

        statusVC = address.makeAddrStd(0, tvm.hash(state));
    }

    function getInfo() public view returns(
        address issuer,
        uint256 id
    ) {
        issuer = _issuer;
        id = _id;
    }

}