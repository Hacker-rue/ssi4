pragma ton-solidity 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

contract IndexVC {

    address _addrOwner;
    address static _addrVC;

    constructor() public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), 101);
        (address addrOwner) = optSalt.get().toSlice().decode(address);
        require(msg.sender == _addrVC);
        tvm.accept();

        _addrOwner = addrOwner;
    }

    function getInfo() public returns(address addrOwner, address addrVC) {
        addrOwner = _addrOwner;
        addrVC = _addrVC;
    }

}