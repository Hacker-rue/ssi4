pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/VCResolver.sol";

contract VCRoot is VCResolver {

    uint256 _id = 0;


    constructor(TvmCell codeVC) public {
        tvm.accept();
        _codeVC = codeVC;
    }

    function createStorageVC() public {
        require(msg.sender != address(0));
        require(msg.value >= 0.4 ton);

        TvmCell codeData = _buildVCCode(msg.sender);
        TvmCell stateData = _buildVCState(codeData ,_id);

        new VC {
            stateInit: stateData,
            value: 0.3 ton
        } ();

        _id++;

        msg.sender.transfer({value: 0, flag: 64});
    }

}