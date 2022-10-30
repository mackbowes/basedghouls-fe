import { ethers } from "ethers";
import { hashMessage } from "@ethersproject/hash";
import { BGContract } from "../../utils/contract";
import checkRobBased from "../../utils/achievements/specificAchievements/robBased";
import checkWizKhalifa from "../../utils/achievements/specificAchievements/wizKhalifa";
import checkKeyMouth from "../../utils/achievements/specificAchievements/keyMouth";
import checkBleachedGhouls from "../../utils/achievements/specificAchievements/paleKing";
import checkPower from "../../utils/achievements/specificAchievements/powerfulGhouls";
import checkPoolside from "../../utils/achievements/specificAchievements/checkPoolside";
import checkPositronic from "../../utils/achievements/specificAchievements/60Teraflops";
import checkDoodles from "../../utils/achievements/specificAchievements/doodle";
import checkLeverage from "../../utils/achievements/specificAchievements/moreLeverage";
import checkPurp from "../../utils/achievements/specificAchievements/purpByThePound";
import checkDustinsInferno from "../../utils/achievements/specificAchievements/dustinsInferno";
import checkMaximalism from "../../utils/achievements/specificAchievements/unhealthyMaximalism";
import checkHoodCrypto from "../../utils/achievements/specificAchievements/hoodCrypto";
import checkBasedTheRainbow from "../../utils/achievements/specificAchievements/basedTheRainbow";
import checkSomethingBorrowed from "../../utils/achievements/specificAchievements/checkSomethingBorrowed";
import checkSaints from "../../utils/achievements/specificAchievements/checkSaints";
import checkFloralShopping from "../../utils/achievements/specificAchievements/floralShopping";
import checkBasedVanHelsing from "../../utils/achievements/specificAchievements/basedVanHelsing";
import checkBasedDevelopmentCycle from "../../utils/achievements/specificAchievements/basedDevelopmentCycle";
import checkRoverDrivingClub from "../../utils/achievements/specificAchievements/roverDrivingClub";
import checkSomethingSpecialForThem from "../../utils/achievements/specificAchievements/somethingSpecialForThem";
import checkAtBothEnds from "../../utils/achievements/specificAchievements/atBothEnds";
import checkDungeonMaster from "../../utils/achievements/specificAchievements/dungeonMaster";
import checkSedoniacs from "../../utils/achievements/specificAchievements/sedoniac";
import checkTearsForFears from "../../utils/achievements/specificAchievements/tearsForFears";
import checkItAintEasyBeing from "../../utils/achievements/specificAchievements/itAintEasyBeing";
import checkHalloweenJack from "../../utils/achievements/specificAchievements/halloweenJack";
import checkStogie from "../../utils/achievements/specificAchievements/stogie";
import checkFrank from "../../utils/achievements/specificAchievements/letMeBeFrank";
import checkHopelessRomantic from "../../utils/achievements/specificAchievements/hopelessRomantic";
import checkTallAndFit from "../../utils/achievements/specificAchievements/everyoneLooksTallnFit";
import checkGreatness from "../../utils/achievements/specificAchievements/destinedForGreatness";
import checkUgly from "../../utils/achievements/specificAchievements/uglyAndLeaning";
import checkSecretSarge from "../../utils/achievements/specificAchievements/secretSarge";
import check420 from "../../utils/achievements/specificAchievements/420Somewhere";
import checkRosy from "../../utils/achievements/specificAchievements/checkRosyGhoul";
import checkCanto from "../../utils/achievements/specificAchievements/isThisCanto";
import checkBandages from "../../utils/achievements/specificAchievements/cantSeeDumping";
import checkSpecialEyes from "../../utils/achievements/specificAchievements/specialEyes";
import checkSleepyGhouls from "../../utils/achievements/specificAchievements/tiredInHere";
import checkRebaseRadio from "../../utils/achievements/specificAchievements/rebaseRadio";
import checkBlackness from "../../utils/achievements/specificAchievements/paintItBlack";
import checkCleanness from "../../utils/achievements/specificAchievements/cleanMachine";
import checkToxicity from "../../utils/achievements/specificAchievements/toxicAvenger";
import checkLungs from "../../utils/achievements/specificAchievements/noLungs";
import checkDirtiness from "../../utils/achievements/specificAchievements/dirtHead";
import checkUnholiness from "../../utils/achievements/specificAchievements/unholyCeremony";
import checkPyrophilia from "../../utils/achievements/specificAchievements/cryptoForPyros";
import checkHumanity from "../../utils/achievements/specificAchievements/realHumanBean";
import { BasedChievesABI } from "../../utils/abis/BasedChievesABI";

const collectTransferEvents = async (provider, contract, address) => {
  const latestBlock = await provider?.getBlockNumber();
  const toEventsFilter = await contract?.read?.filters?.Transfer(null, address);
  const toEvents = await contract?.read?.queryFilter(
    toEventsFilter,
    14831183,
    latestBlock
  );
  const fromEventsFilter = await contract?.read?.filters?.Transfer(
    address,
    null
  );
  const fromEvents = await contract?.read?.queryFilter(
    fromEventsFilter,
    14831183,
    latestBlock
  );
  return { to: toEvents, from: fromEvents };
};

const findHeldGhouls = async (transferToEvents, transferFromEvents) => {
  if (transferToEvents?.length > 0 && transferFromEvents != null) {
    const receivedEvents = await Promise.all(
      transferToEvents.map(async (event) => {
        return { id: event.args.tokenId._hex, timestamp: event.blockNumber };
      })
    );
    const receivedIds = receivedEvents.map((event) => event.id);
    const sentEvents = await Promise.all(
      transferFromEvents?.map(async (event) => {
        return { id: event.args.tokenId._hex, timestamp: event.blockNumber };
      })
    );
    const sentIds = sentEvents.map((event) => event.id);
    const heldGhoulsArray = receivedEvents.filter((ghoul) => {
      if (!sentIds.includes(ghoul.id)) {
        return true;
      } else if (sentIds.includes(ghoul.id)) {
        const ghoulSendingEvents = sentEvents.filter((event) => {
          return event.id == ghoul.id;
        });
        const ghoulReceivingEvents = receivedEvents.filter(
          (event) => event.id == ghoul.id
        );
        let newBool =
          ghoulSendingEvents[ghoulSendingEvents.length - 1].timestamp >
          ghoulReceivingEvents[ghoulReceivingEvents.length - 1].timestamp
            ? false
            : true;
        return newBool;
      }
    });
    let heldGhouls = new Set();
    heldGhoulsArray.forEach((ghoul) => {
      heldGhouls.add(parseInt(ghoul.id, 16));
    });
    return heldGhouls;
  }
};

export default async function handler(req, res) {
  console.log(req.body);
  const address = req.body.address;
  const requestedChieve = req.body.achievement;
  const messageToVerify = req.body.signedMessage;
  const provider = new ethers.providers.AlchemyProvider(
    "homestead",
    process.env.ALCHEMY_KEY
  );
  const signerAddr = ethers.utils.recoverAddress(
    hashMessage(requestedChieve),
    messageToVerify
  );
  if (signerAddr !== address) {
    res.status(400).json({ error: "Invalid Address submitted" });
  }
  let tempContract = BGContract("0x1", signerAddr, provider, null);
  let transferEvents = await collectTransferEvents(
    provider,
    tempContract,
    signerAddr
  );
  let heldGhouls = await findHeldGhouls(transferEvents.to, transferEvents.from);
  let isValidRequest = false;
  let requestedNFTIndex = null;
  switch (requestedChieve) {
    case "60 Teraflops":
      isValidRequest = checkPositronic(heldGhouls);
      requestedNFTIndex = 1;
      break;
    case "A Guide To Recognizing Your Saints":
      isValidRequest = checkSaints(heldGhouls);
      requestedNFTIndex = 2;
      break;
    case "Anywhere I Want":
      isValidRequest = checkStogie(heldGhouls);
      requestedNFTIndex = 3;
      break;
    case "At Both Ends":
      isValidRequest = checkAtBothEnds(heldGhouls);
      requestedNFTIndex = 4;
      break;
    case "Based Development Cycle":
      isValidRequest = checkBasedDevelopmentCycle(heldGhouls);
      requestedNFTIndex = 5;
      break;
    case "Based the Rainbow":
      isValidRequest = checkBasedTheRainbow(heldGhouls);
      requestedNFTIndex = 6;
      break;
    case "Based Van Helsing":
      isValidRequest = checkBasedVanHelsing(heldGhouls);
      requestedNFTIndex = 7;
      break;
    case "Blue Man Group":
      isValidRequest = checkPoolside(heldGhouls);
      requestedNFTIndex = 8;
      break;
    case "By Any Other Name":
      isValidRequest = checkRosy(heldGhouls);
      requestedNFTIndex = 9;
      break;
    case "Can't See Any Dumping":
      isValidRequest = checkBandages(heldGhouls);
      requestedNFTIndex = 10;
      break;
    case "Clean Machine":
      isValidRequest = checkCleanness(heldGhouls);
      requestedNFTIndex = 11;
      break;
    case "Crypto for Pyros":
      isValidRequest = checkPyrophilia(heldGhouls);
      requestedNFTIndex = 12;
      break;
    case "Destined for Greatness":
      isValidRequest = checkGreatness(heldGhouls);
      requestedNFTIndex = 12;
      break;
    case "Do it for Doodle":
      isValidRequest = checkDoodles(heldGhouls);
      requestedNFTIndex = 13;
      break;
    case "Do Something Special For Them":
      isValidRequest = checkSomethingSpecialForThem(heldGhouls);
      requestedNFTIndex = 14;
      break;
    case "Dungeon Master":
      isValidRequest = checkDungeonMaster(heldGhouls);
      requestedNFTIndex = 15;
      break;
    case "Dustin's Inferno":
      isValidRequest = checkDustinsInferno(heldGhouls);
      requestedNFTIndex = 16;
      break;
    case "Everyone Looks Tall & Fit":
      isValidRequest = checkTallAndFit(heldGhouls);
      requestedNFTIndex = 17;
      break;
    case "Floral Shopping":
      isValidRequest = checkFloralShopping(heldGhouls);
      requestedNFTIndex = 18;
      break;
    case "Ghouls Have No Lungs":
      isValidRequest = checkLungs(heldGhouls);
      requestedNFTIndex = 19;
      break;
    case "Halloween Jack is a Real Cool Cat":
      isValidRequest = checkHalloweenJack(heldGhouls);
      requestedNFTIndex = 20;
      break;
    case "Hood Crypto":
      isValidRequest = checkHoodCrypto(heldGhouls);
      requestedNFTIndex = 21;
      break;
    case "Hopeless Romantic":
      isValidRequest = checkHopelessRomantic(heldGhouls);
      requestedNFTIndex = 22;
      break;
    case "Is This Canto?":
      isValidRequest = checkCanto(heldGhouls);
      requestedNFTIndex = 23;
      break;
    case "It Ain't Easy Being":
      isValidRequest = checkItAintEasyBeing(heldGhouls);
      requestedNFTIndex = 24;
      break;
    case "It's 4:20 Somewhere":
      isValidRequest = check420(heldGhouls);
      requestedNFTIndex = 25;
      break;
    case "It's Called DIRT-head":
      isValidRequest = checkDirtiness(heldGhouls);
      requestedNFTIndex = 26;
      break;
    case "It's Tired in Here":
      isValidRequest = checkSleepyGhouls(heldGhouls);
      requestedNFTIndex = 27;
      break;
    case "Let Me Be Frank":
      isValidRequest = checkFrank(heldGhouls);
      requestedNFTIndex = 28;
      break;
    case "Look With Your Special Eyes":
      isValidRequest = checkSpecialEyes(heldGhouls);
      requestedNFTIndex = 29;
      break;
    case "More Leverage":
      isValidRequest = checkLeverage(heldGhouls);
      requestedNFTIndex = 30;
      break;
    case "No One Man Should Have All That Power":
      isValidRequest = checkPower(heldGhouls);
      requestedNFTIndex = 31;
      break;
    case "Paint it Black":
      isValidRequest = checkBlackness(heldGhouls);
      requestedNFTIndex = 32;
      break;
    case "Play it on My Radio":
      isValidRequest = checkRebaseRadio(heldGhouls);
      requestedNFTIndex = 33;
      break;
    case "Purp by the Pound":
      isValidRequest = checkPurp(heldGhouls);
      requestedNFTIndex = 34;
      break;
    case "Real Human Bean":
      isValidRequest = checkHumanity(heldGhouls);
      requestedNFTIndex = 35;
      break;
    case "Rob Based":
      isValidRequest = checkRobBased(heldGhouls);
      requestedNFTIndex = 36;
      break;
    case "Rover Driving Club":
      isValidRequest = checkRoverDrivingClub(heldGhouls);
      requestedNFTIndex = 37;
      break;
    case "Secret Sarge":
      isValidRequest = checkSecretSarge(heldGhouls);
      requestedNFTIndex = 38;
      break;
    case "Sedoniac":
      isValidRequest = checkSedoniacs(heldGhouls);
      requestedNFTIndex = 39;
      break;
    case "Something Borrowed":
      isValidRequest = checkSomethingBorrowed(heldGhouls);
      requestedNFTIndex = 40;
      break;
    case "/Tap to Achieve":
      isValidRequest = heldGhouls.size > 0 ? true : false;
      requestedNFTIndex = 41;
      break;
    case "Tears for Fears":
      isValidRequest = checkTearsForFears(heldGhouls);
      requestedNFTIndex = 42;
      break;
    case "The Key is to...":
      isValidRequest = checkKeyMouth(heldGhouls);
      requestedNFTIndex = 43;
      break;
    case "The Pale King":
      isValidRequest = checkBleachedGhouls(heldGhouls);
      requestedNFTIndex = 44;
      break;
    case "Toxic Avenger":
      isValidRequest = checkToxicity(heldGhouls);
      requestedNFTIndex = 45;
      break;
    case "Ugly and Leaning Into It":
      isValidRequest = checkUgly(heldGhouls);
      requestedNFTIndex = 46;
      break;
    case "Unhealthy Maximalism":
      isValidRequest = checkMaximalism(heldGhouls);
      requestedNFTIndex = 47;
      break;
    case "Unholy Ceremony":
      isValidRequest = checkUnholiness(heldGhouls);
      requestedNFTIndex = 48;
      break;
    case "Wiz Khalifa Special":
      isValidRequest = checkWizKhalifa(heldGhouls);
      requestedNFTIndex = 49;
      break;
    default:
      break;
  }
  if (!isValidRequest) {
    res.status(400).json({ error: "Invalid held ghouls" });
  }
  try {
    const wallet = new ethers.Wallet(`${process.env.MINTING_WALLET}`, provider);
    const write = new ethers.Contract(
      "0x04d193345A8BA01D3B77D056743E3827e4acCfDD",
      BasedChievesABI,
      wallet
    );
    const mintingTx = await write.mint(address, requestedNFTIndex);
    const receipt = await mintingTx.wait();
    if (receipt.status == 1) {
      res.status(200).json({ message: "Token Minted" });
    } else {
      throw "Token failed to mint";
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
