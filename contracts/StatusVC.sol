pragma ton-solidity >= 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

contract StatusVC {

    enum status {
        active,
        deactivated,
        suspended
    }

    uint256 static _id;

    address _issuer;
    status _status;

    constructor (address issuer) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue());
        (address StatusVCRoot) = optSalt.get().toSlice().decode(address);
        require(msg.sender == StatusVCRoot);
        require(msg.value >= 0.2 ton);
        tvm.rawReserve(0.1 ton, 0);

        _issuer = issuer;
        _status = status.active;
    }

    function setStatus(status Status) public onlyOwner() {
        _status = Status;
    }

    function destruct() public onlyOwner() {
        selfdestruct(msg.sender);
    }

    function getInfo() public view returns(
        uint256 id,
        address issuer,
        status Status
    ) {
        id = _id;
        issuer = _issuer;
        Status = _status;
    }

    modifier onlyOwner() {
        require(msg.sender == _issuer);
        _;
    }

}