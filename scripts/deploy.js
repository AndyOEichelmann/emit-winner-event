const hre = require("hardhat");

async function main() {
  // hardhat-ethers
  const CallerContract = await hre.ethers.getContractFactory("CallerContract");
  const callerContract = await CallerContract.deploy();

  await callerContract.deployed();

  console.log(
    `Contract was deployed to ${callerContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
