pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/StatusVCResolver.sol";

contract StatusVCRoot is StatusVCResolver {
    uint256 _id = 0;

    address _issuer;

    TvmCell _codeIndexStatus;

    constructor(TvmCell codeStatusVC, TvmCell codeIndexStatus, address issuer) public {
        tvm.accept();
        _issuer = issuer;
        _codeStatusVC = codeStatusVC;
        _codeIndexStatus = codeIndexStatus;
    }

    function createStatusVC(address holder) public {
        require(msg.value >= 0.35 ton);
        TvmCell code = _buildStatusVCCode();
        TvmCell state = _buildStatusVCState(code, _id);
        new StatusVC {
            stateInit: state,
            value: 0.25 ton
        } (_issuer, holder, _codeIndexStatus, msg.sender);

        _id++;

        msg.sender.transfer({value:0, flag: 64});
    }

    function getInfo() public view returns(
        address issuer,
        uint256 id
    ) {
        issuer = _issuer;
        id = _id;
    }

}