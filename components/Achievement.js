import { useState } from "react";
import { ethers } from "ethers";
import { useEthers } from "../contexts/EthersProviderContext";
import { BasedChievesABI } from "../utils/abis/BasedChievesABI";

export default function Achievement(props) {
  const { address, provider } = useEthers();
  const chieve = props.chieve;
  const [tokenHeld, setTokenHeld] = useState(false);
  let imgSrc = null;
  let chieveIndex = null;
  let read = new ethers.Contract(
    "0x04d193345A8BA01D3B77D056743E3827e4acCfDD",
    BasedChievesABI,
    provider
  );
  let holdsToken = false;
  switch (chieve) {
    case "60 Teraflops":
      imgSrc = "/images/achievements/60teraflop.png";
      chieveIndex = 1;
      break;
    case "A Guide To Recognizing Your Saints":
      imgSrc = "/images/achievements/guideToRecognizingYourSaints.png";
      chieveIndex = 2;
      break;
    case "Anywhere I Want":
      imgSrc = "/images/achievements/anywhereIWant.png";
      chieveIndex = 3;
      break;
    case "At Both Ends":
      imgSrc = "/images/achievements/atBothEnds.png";
      chieveIndex = 4;
      break;
    case "Based Development Cycle":
      imgSrc = "/images/achievements/basedDevelopmentCycle.png";
      chieveIndex = 5;
      break;
    case "Based the Rainbow":
      imgSrc = "/images/achievements/basedTheRainbow.png";
      chieveIndex = 6;
      break;
    case "Based Van Helsing":
      imgSrc = "/images/achievements/basedVanHelsing.png";
      chieveIndex = 7;
      break;
    case "Blue Man Group":
      imgSrc = "/images/achievements/blueManGroup.png";
      chieveIndex = 8;
      break;
    case "By Any Other Name":
      imgSrc = "/images/achievements/byAnyOtherName.png";
      chieveIndex = 9;
      break;
    case "Can't See Any Dumping":
      imgSrc = "/images/achievements/cantSeeAnyDumping.png";
      chieveIndex = 10;
      break;
    case "Clean Machine":
      imgSrc = "/images/achievements/cleanMachine.png";
      chieveIndex = 11;
      break;
    case "Crypto for Pyros":
      imgSrc = "/images/achievements/cryptoForPyros.png";
      chieveIndex = 12;
      break;
    case "Do it for Doodle":
      imgSrc = "/images/achievements/doodle.png";
      chieveIndex = 13;
      break;
    case "Do Something Special For Them":
      imgSrc = "/images/achievements/doSomethingSpecialForThem.png";
      chieveIndex = 14;
      break;
    case "Dungeon Master":
      imgSrc = "/images/achievements/dungeonMaster.png";
      chieveIndex = 15;
      break;
    case "Dustin's Inferno":
      imgSrc = "/images/achievements/dustinsInferno.png";
      chieveIndex = 16;
      break;
    case "Everyone Looks Tall & Fit":
      imgSrc = "/images/achievements/everyoneLooksTallAndFit.png";
      chieveIndex = 17;
      break;
    case "Floral Shopping":
      imgSrc = "/images/achievements/floralShopping.png";
      chieveIndex = 18;
      break;
    case "Ghouls Have No Lungs":
      imgSrc = "/images/achievements/ghoulsHaveNoLungs.png";
      chieveIndex = 19;
      break;
    case "Halloween Jack is a Real Cool Cat":
      imgSrc = "/images/achievements/halloweenJack.png";
      chieveIndex = 20;
      break;
    case "Hood Crypto":
      imgSrc = "/images/achievements/hoodCrypto.png";
      chieveIndex = 21;
      break;
    case "Hopeless Romantic":
      imgSrc = "/images/achievements/hopelessRomantic.png";
      chieveIndex = 22;
      break;
    case "Is This Canto?":
      imgSrc = "/images/achievements/isThisCanto.jpg";
      chieveIndex = 23;
      break;
    case "It Ain't Easy Being":
      imgSrc = "/images/achievements/itAintEasyBeing.png";
      chieveIndex = 24;
      break;
    case "It's 4:20 Somewhere":
      imgSrc = "/images/achievements/its420Somewhere.png";
      chieveIndex = 25;
      break;
    case "It's Called DIRT-head":
      imgSrc = "/images/achievements/itsCalledDirtHead.png";
      chieveIndex = 26;
      break;
    case "It's Tired in Here":
      imgSrc = "/images/achievements/itsTiredInHere.png";
      chieveIndex = 27;
      break;
    case "Let Me Be Frank":
      imgSrc = "/images/achievements/letMeBeFrank.png";
      chieveIndex = 28;
      break;
    case "Look With Your Special Eyes":
      imgSrc = "/images/achievements/lookWithYourSpecialEyes.png";
      chieveIndex = 29;
      break;
    case "More Leverage":
      imgSrc = "/images/achievements/moreleverage.png";
      chieveIndex = 30;
      break;
    case "No One Man Should Have All That Power":
      imgSrc = "/images/achievements/nooneman.png";
      chieveIndex = 31;
      break;
    case "Paint it Black":
      imgSrc = "/images/achievements/paintItBlack.png";
      chieveIndex = 32;
      break;
    case "Play it on My Radio":
      imgSrc = "/images/achievements/playItOnMyRadio.png";
      chieveIndex = 33;
      break;
    case "Purp by the Pound":
      imgSrc = "/images/achievements/purpByThePound.png";
      chieveIndex = 34;
      break;
    case "Real Human Bean":
      imgSrc = "/images/achievements/realHumanBean.png";
      chieveIndex = 35;
      break;
    case "Rob Based":
      imgSrc = "/images/achievements/robbased.png";
      chieveIndex = 36;
      break;
    case "Rover Driving Club":
      imgSrc = "/images/achievements/roverDrivingClub.png";
      chieveIndex = 37;
      break;
    case "Secret Sarge":
      imgSrc = "/images/achievements/secretSarge.png";
      chieveIndex = 38;
      break;
    case "Sedoniac":
      imgSrc = "/images/achievements/sedoniac.png";
      chieveIndex = 39;
      break;
    case "Something Borrowed":
      imgSrc = "/images/achievements/somethingBorrowed.png";
      chieveIndex = 40;
      break;
    case "/Tap to Achieve":
      imgSrc = "/images/achievements/tapToAchieve.png";
      chieveIndex = 41;
      break;
    case "Tears for Fears":
      imgSrc = "/images/achievements/tearsForFears.png";
      chieveIndex = 42;
      break;
    case "The Key is to...":
      imgSrc = "/images/achievements/thekey.png";
      chieveIndex = 43;
      break;
    case "The Pale King":
      imgSrc = "/images/achievements/paleKing.png";
      chieveIndex = 44;
      break;
    case "Toxic Avenger":
      imgSrc = "/images/achievements/toxicAvenger.png";
      chieveIndex = 45;
      break;
    case "Ugly and Leaning Into It":
      imgSrc = "/images/achievements/uglyAndLeaningIntoIt.png";
      chieveIndex = 46;
      break;
    case "Unhealthy Maximalism":
      imgSrc = "/images/achievements/unhealthyMaximalism.png";
      chieveIndex = 47;
      break;
    case "Unholy Ceremony":
      imgSrc = "/images/achievements/unholyCeremony.png";
      chieveIndex = 48;
      break;
    case "Wiz Khalifa Special":
      imgSrc = "/images/achievements/wizkhalifa.png";
      chieveIndex = 49;
      break;
    // case "That's Hoarding":
    //   imgSrc = "/images/achievements/thatsHoarding.png";
    //   break;
    // case "Destined for Greatness":
    //   imgSrc = "/images/achievements/destinedForGreatness.png";
    //   break;
    // case "Rug Your Masters":
    //   imgSrc = "/images/achievements/rugYourMasters.png";
    //   break;
    default:
      imgSrc = null;
      break;
  }
  async function getBalances() {
    const balance = await read.balanceOf(address, chieveIndex);
    if (balance > 0) {
      setTokenHeld(true);
    }
  }
  getBalances();

  let style = {
    margin: `1rem auto`,
    width: `400px`,
    color: `black`,
  };
  let imgStyle = { opacity: `0.5` };
  if (props.state == "true") {
    imgStyle.opacity = `1`;
  }
  if (props.state == "true" && tokenHeld !== true) {
    imgStyle.cursor = `url(/images/png/cursorhover.png), auto`;
  }
  if (tokenHeld == true) {
    style.border = "2px solid purple";
    style.backgroundColor = "purple";
    imgStyle.opacity = "0.1";
  }

  return (
    <>
      {props.state == "true" && !tokenHeld && (
        <>
          <div
            style={style}
            onClick={() => props.requestFunction(chieve, chieveIndex)}
          >
            {imgSrc !== null && (
              <img src={imgSrc} style={imgStyle} alt={chieve} />
            )}
          </div>
        </>
      )}
      {props.state == "false" && (
        <>
          <div style={style}>
            {imgSrc !== null && (
              <img src={imgSrc} style={imgStyle} alt={chieve} />
            )}
          </div>
        </>
      )}
      {props.state == "true" && tokenHeld && (
        <>
          <div style={style}>
            {imgSrc !== null && (
              <img src={imgSrc} style={imgStyle} alt={chieve} />
            )}
          </div>
        </>
      )}
    </>
  );
}
