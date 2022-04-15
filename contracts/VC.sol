pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

contract VC {

    address _owner;

    string _type;
    string _value;

    constructor(address owner, string Type, string value) public {
        tvm.accept();

        _owner = owner;
        _type = Type;
        _value = value;
    }

    function setValue(string Type, string value) public onlyOwner() {
        require(msg.value >= 0.2 ton);

        _type = Type;
        _value = value;

        msg.sender.transfer({value: 0, flag: 64});
    }

    function destruct() public onlyOwner() {
        require(msg.value >= 0.1 ton);
        selfdestruct(msg.sender);
    }

    function getInfo() public view returns(
        string Type,
        string value) 
    {
        Type = _type;
        value = _value;
    }


    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }



}