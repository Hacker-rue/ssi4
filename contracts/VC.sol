pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

contract VC {

    uint256 static _id;

    address _owner;

    string _type;
    uint8 _size;
    mapping(uint8 => bytes) _value;

    constructor() public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue());
        (address owner) = optSalt.get().toSlice().decode(address);
        require(owner != address(0));
        require(msg.value >= 0.2 ton);
        tvm.rawReserve(0.1 ton, 0);

        _owner = owner;

        _owner.transfer({value: 0, flag: 128});
    }

    function setType(string Type) public onlyOwner() {
        _type = Type;

        msg.sender.transfer({value: 0, flag: 64});
    }

    function setSize(uint8 size) public onlyOwner() {
        _size = size;

        msg.sender.transfer({value: 0, flag: 64});
    }

    function setValue(uint8 number, bytes value) public onlyOwner() {
        _value[number] = value;

        msg.sender.transfer({value: 0, flag: 64});
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