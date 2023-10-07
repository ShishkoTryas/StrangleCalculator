const hre = require("hardhat")

async function main() {
  const StrangleCalculator = await hre.ethers.deployContract("StrangleCalculator");
  await StrangleCalculator.waitForDeployment();
  console.log("Contract address: ", await StrangleCalculator.getAddress());

  let point = {
    x: 5,
    y: 5
  }

  const setNerValues = await StrangleCalculator.setNewValues(5, point);
  await setNerValues.wait();

  const contractAddress = "0x259356c03232B051b6aD3b383859AbE7B70E63fA";
  const signer = await hre.ethers.provider.getSigner();
  const ABI = [{"inputs":[{"internalType":"contract StrangeCalculator","name":"strangeCalculator_","type":"address"}],"name":"validate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
  const contract = new hre.ethers.Contract(contractAddress,ABI,signer);

  const isValid = await contract.validate(await StrangleCalculator.getAddress());
  await isValid.wait();
  if (isValid) {
    console.log("Validation successful.");
  } else {
    console.log("Validation failed.");
  }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
