const hre = require("hardhat");

const CALL_CONTRACT_ADDR = "0x3EA583754794d74da3923901d5a855661f64D907";
const WIN_CONTRACT_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  // hardhat-ethers
  const callerContract = await hre.ethers.getContractAt("CallerContract", CALL_CONTRACT_ADDR);

  const tx = await callerContract.callAtempt(WIN_CONTRACT_ADDR);
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});