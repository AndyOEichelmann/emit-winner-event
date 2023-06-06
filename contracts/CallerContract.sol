// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface WinnerContract {
    function attempt() external;
}

contract CallerContract {
    function callAtempt(address winContractAddress) external {
        WinnerContract(winContractAddress).attempt();
    }
}
