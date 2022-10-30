import { ethers } from "ethers";
import { BasedChievesABI } from "../../utils/abis/BasedChievesABI";

export default async function handler(req, res) {
  try {
    const recipient = req.body.recipient;
    const index = req.body.index;
    const provider = new ethers.providers.AlchemyProvider(
      "homestead",
      process.env.ALCHEMY_KEY
    );
    const feeData = await provider.getFeeData();
    const gasPrice = feeData.maxFeePerGas;
    const wallet = new ethers.Wallet(`${process.env.MINTING_WALLET}`, provider);
    const read = new ethers.Contract(
      "0x04d193345A8BA01D3B77D056743E3827e4acCfDD",
      BasedChievesABI,
      provider
    );
    const write = new ethers.Contract(
        "0x04d193345A8BA01D3B77D056743E3827e4acCfDD",
        BasedChievesABI,
        wallet
      );
    const gasAmount = await write.estimateGas.mint(recipient, index);
    let gasEstimate = gasAmount.mul(gasPrice);
    res.status(200).json({ gasEstimate });
  } catch (error) {
    res.status(500).json({ error });
  }
}
