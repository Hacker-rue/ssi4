pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

contract VC {

    uint256 static id;

    address _owner;

    string _type;
    uint8 _size;
    mapping(uint8 => bytes) _value;

    constructor() public {

    }

    function setType(string Type) public onlyOwner() {
        _type = Type;
    }

    function setSize(uint8 size) public onlyOwner() {
        _size = size;
    }

    function setValue(uint8 number, bytes value) public onlyOwner() {
        _value[number] = value;
    }

    function destruct() public onlyOwner() {
        selfdestruct(msg.sender);
    }

    function getInfo() public view onlyOwner() returns(
        string Type,
        uint8 size,
        mapping(uint8 => bytes) value) 
    {
        Type = _type;
        size = _size;
        value = _value;
    }


    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }



}