pragma ton-solidity >= 0.49.0;

pragma AbiHeader time;
pragma AbiHeader expire;

import "./resolvers/IndexStatusResolver.sol";

contract StatusVC is IndexStatusResolver {

    enum status {
        active,
        deactivated,
        suspended
    }

    uint256 static _id;

    address _issuer;
    address _holder;
    status _status;

    constructor (address issuer, address holder, TvmCell codeIndexStatus, address sendToGas) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue());
        (address StatusVCRoot) = optSalt.get().toSlice().decode(address);
        require(msg.sender == StatusVCRoot);
        require(msg.value >= 0.25 ton);
        tvm.rawReserve(0.05 ton, 0);

        _issuer = issuer;
        _holder = holder;
        _status = status.active;
        _codeIndexStatus = codeIndexStatus;

        deployIndex();

        sendToGas.transfer({value:0, flag:128});
    }

    function setStatus(status Status) public onlyOwner() checkStatus() {
        require(msg.value >= 0.15 ton);
        
        _status = Status;

        msg.sender.transfer({value: 0, flag:64});
    }

    function deactivate() public checkStatus() {
        require(msg.value >= 0.15 ton);
        require(msg.sender == _issuer || msg.sender == _holder);

        _status = status.deactivated;

        msg.sender.transfer({value:0, flag: 64});
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


    function deployIndex() private {
        TvmCell code = _buildIndexStatusCode(_holder);
        TvmCell state = _buildIndexStatusState(code, address(this));
        new IndexStatus {
            stateInit: state,
            value: 0.1 ton
        } ();
    }

    modifier onlyOwner() {
        require(msg.sender == _issuer);
        _;
    }

    modifier checkStatus() {
        require(_status != status.deactivated);
        _;
    }

}