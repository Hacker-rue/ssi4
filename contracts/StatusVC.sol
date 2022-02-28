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

    address issuer;
    status _status;

    constructor () public {
        
    }

}