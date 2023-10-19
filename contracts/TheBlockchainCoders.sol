// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract TheBlockchainCoders{
    string public name = "The BlockChain Coders";
    string public symbol = "TBC";
    string public standard = "@theblockchaincoders";
    string public totalSupply;
    string public ownerOfContract;
    string public _userId;

    address[] public holderToken;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

}