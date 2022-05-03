pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

contract IndexStatus {

    address _addrOwner;
    address static _addrStatus;

    constructor() public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), 101);
        (address addrStatus) = optSalt.get().toSlice().decode(address);
        require(msg.sender == _addrStatus);
        tvm.accept();

        _addrStatus = addrStatus;
    }

    function getInfo() public returns(address addrOwner, address addrStatus) {
        addrOwner = _addrOwner;
        addrStatus = _addrStatus;
    }

}