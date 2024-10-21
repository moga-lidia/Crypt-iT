const main = async () => {
  const branchOfTransactions  = await hre.ethers.getContractFactory("Transactions");
  const contractOfTransactions = await branchOfTransactions.deploy();
  await contractOfTransactions.deployed();

  console.log("Transactions address: ", contractOfTransactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();