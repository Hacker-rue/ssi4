pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/IndexVCResolver.sol";

contract VC is IndexVCResolver {

    address _addrOwner;

    string _type;
    string _value;

    constructor(address addrOwner, string Type, string value, TvmCell codeIndexVC) public {
        require(msg.pubkey() == tvm.pubkey());
        require(address(this).balance == 0.2 ton);
        tvm.accept();

        _addrOwner = addrOwner;
        _type = Type;
        _value = value;
        _codeIndexVC = codeIndexVC;

        deployIndex();
    }

    function setValue(string Type, string value) public onlyOwner() {
        require(msg.value >= 0.25 ton);

        _type = Type;
        _value = value;

        msg.sender.transfer({value: 0, flag: 64});
    }

    function destruct() public onlyOwner() {
        selfdestruct(msg.sender);
    }

    function getInfo() public view returns(
        string Type,
        string value) 
    {
        Type = _type;
        value = _value;
    }


    function deployIndex() private {
        TvmCell code = _buildIndexVCCode(_addrOwner);
        TvmCell state = _buildIndexVCState(code, address(this));
        new IndexVC {
            stateInit: state,
            value: 0.1 ton
        } ();
    }

    modifier onlyOwner() {
        require(msg.sender == _addrOwner);
        _;
    }



}