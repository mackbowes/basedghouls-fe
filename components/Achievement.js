import { useState } from "react";
export default function Achievement(props) {
  const chieve = props.chieve;
  let imgSrc = null;
  let chieveIndex = null;

  switch (chieve) {
    case "60 Teraflops":
      imgSrc = "/images/achievements/60teraflop.jpg";
      chieveIndex = 1;
      break;
    case "A Guide To Recognizing Your Saints":
      imgSrc = "/images/achievements/guideToRecognizingYourSaints.jpg";
      chieveIndex = 2;
      break;
    case "Anywhere I Want":
      imgSrc = "/images/achievements/anywhereIWant.jpg";
      chieveIndex = 3;
      break;
    case "At Both Ends":
      imgSrc = "/images/achievements/atBothEnds.jpg";
      chieveIndex = 4;
      break;
    case "Based Development Cycle":
      imgSrc = "/images/achievements/basedDevelopmentCycle.jpg";
      chieveIndex = 5;
      break;
    case "Based the Rainbow":
      imgSrc = "/images/achievements/BasedTheRainbow.jpg";
      chieveIndex = 6;
      break;
    case "Based Van Helsing":
      imgSrc = "/images/achievements/basedVanHelsing.jpg";
      chieveIndex = 7;
      break;
    case "Blue Man Group":
      imgSrc = "/images/achievements/bluemangroup.jpg";
      chieveIndex = 8;
      break;
    case "By Any Other Name":
      imgSrc = "/images/achievements/byAnyOtherName.jpg";
      chieveIndex = 9;
      break;
    case "Can't See Any Dumping":
      imgSrc = "/images/achievements/cantSeeAnyDumping.jpg";
      chieveIndex = 10;
      break;
    case "Clean Machine":
      imgSrc = "/images/achievements/cleanMachine.jpg";
      chieveIndex = 11;
      break;
    case "Crypto for Pyros":
      imgSrc = "/images/achievements/cryptoForPyros.jpg";
      chieveIndex = 12;
      break;
    case "Do it for Doodle":
      imgSrc = "/images/achievements/doodle.jpg";
      chieveIndex = 13;
      break;
    case "Do Something Special For Them":
      imgSrc = "/images/achievements/doSomethingSpecialForThem.jpg";
      chieveIndex = 14;
      break;
    case "Dungeon Master":
      imgSrc = "/images/achievements/dungeonMaster.jpg";
      chieveIndex = 15;
      break;
    case "Dustin's Inferno":
      imgSrc = "/images/achievements/dustinsInferno.jpg";
      chieveIndex = 16;
      break;
    case "Everyone Looks Tall & Fit":
      imgSrc = "/images/achievements/everyoneLooksTallAndFit.jpg";
      chieveIndex = 17;
      break;
    case "Floral Shopping":
      imgSrc = "/images/achievements/floralShopping.jpg";
      chieveIndex = 18;
      break;
    case "Ghouls Have No Lungs":
      imgSrc = "/images/achievements/ghoulsHaveNoLungs.jpg";
      chieveIndex = 19;
      break;
    case "Halloween Jack is a Real Cool Cat":
      imgSrc = "/images/achievements/halloweenJack.jpg";
      chieveIndex = 20;
      break;
    case "Hood Crypto":
      imgSrc = "/images/achievements/hoodCrypto.jpg";
      chieveIndex = 21;
      break;
    case "Hopeless Romantic":
      imgSrc = "/images/achievements/hopelessRomantic.jpg";
      chieveIndex = 22;
      break;
    case "Is This Canto?":
      imgSrc = "/images/achievements/isThisCanto.jpg";
      chieveIndex = 23;
      break;
    case "It Ain't Easy Being":
      imgSrc = "/images/achievements/itAintEasyBeing.jpg";
      chieveIndex = 24;
      break;
    case "It's 4:20 Somewhere":
      imgSrc = "/images/achievements/its420Somewhere.jpg";
      chieveIndex = 25;
      break;
    case "It's Called DIRT-head":
      imgSrc = "/images/achievements/itsCalledDirtHead.jpg";
      chieveIndex = 26;
      break;
    case "It's Tired in Here":
      imgSrc = "/images/achievements/itsTiredInHere.jpg";
      chieveIndex = 27;
      break;
    case "Let Me Be Frank":
      imgSrc = "/images/achievements/letMeBeFrank.jpg";
      chieveIndex = 28;
      break;
    case "Look With Your Special Eyes":
      imgSrc = "/images/achievements/lookWithYourSpecialEyes.jpg";
      chieveIndex = 29;
      break;
    case "More Leverage":
      imgSrc = "/images/achievements/moreleverage.jpg";
      chieveIndex = 30;
      break;
    case "No One Man Should Have All That Power":
      imgSrc = "/images/achievements/nooneman.jpg";
      chieveIndex = 31;
      break;
    case "Paint it Black":
      imgSrc = "/images/achievements/paintItBlack.jpg";
      chieveIndex = 32;
      break;
    case "Play it on My Radio":
      imgSrc = "/images/achievements/playItOnMyRadio.jpg";
      chieveIndex = 33;
      break;
    case "Purp by the Pound":
      imgSrc = "/images/achievements/purpByThePound.jpg";
      chieveIndex = 34;
      break;
    case "Real Human Bean":
      imgSrc = "/images/achievements/realHumanBean.jpg";
      chieveIndex = 35;
      break;
    case "Rob Based":
      imgSrc = "/images/achievements/robbased.jpg";
      chieveIndex = 36;
      break;
    case "Rover Driving Club":
      imgSrc = "/images/achievements/roverDrivingClub.jpg";
      chieveIndex = 37;
      break;
    case "Secret Sarge":
      imgSrc = "/images/achievements/secretSarge.jpg";
      chieveIndex = 38;
      break;
    case "Sedoniac":
      imgSrc = "/images/achievements/sedoniac.jpg";
      chieveIndex = 39;
      break;
    case "Something Borrowed":
      imgSrc = "/images/achievements/somethingBorrowed.jpg";
      chieveIndex = 40;
      break;
    case "/Tap to Achieve":
      imgSrc = "/images/achievements/tapToAchieve.jpg";
      chieveIndex = 41;
      break;
    case "Tears for Fears":
      imgSrc = "/images/achievements/tearsForFears.jpg";
      chieveIndex = 42;
      break;
    case "The Key is to...":
      imgSrc = "/images/achievements/thekey.jpg";
      chieveIndex = 43;
      break;
    case "The Pale King":
      imgSrc = "/images/achievements/paleking.jpg";
      chieveIndex = 44;
      break;
    case "Toxic Avenger":
      imgSrc = "/images/achievements/toxicAvenger.jpg";
      chieveIndex = 45;
      break;
    case "Ugly and Leaning Into It":
      imgSrc = "/images/achievements/uglyAndLeaningIntoIt.jpg";
      chieveIndex = 46;
      break;
    case "Unhealthy Maximalism":
      imgSrc = "/images/achievements/unhealthyMaximalism.jpg";
      chieveIndex = 47;
      break;
    case "Unholy Ceremony":
      imgSrc = "/images/achievements/unholyCeremony.jpg";
      chieveIndex = 48;
      break;
    case "Wiz Khalifa Special":
      imgSrc = "/images/achievements/wizkhalifa.jpg";
      chieveIndex = 49;
      break;
    // case "That's Hoarding":
    //   imgSrc = "/images/achievements/thatsHoarding.jpg";
    //   break;
    // case "Destined for Greatness":
    //   imgSrc = "/images/achievements/destinedForGreatness.jpg";
    //   break;
    // case "Rug Your Masters":
    //   imgSrc = "/images/achievements/rugYourMasters.jpg";
    //   break;
    default:
      imgSrc = null;
      break;
  }
  let style = {
    margin: `1rem auto`,
    width: `400px`,
    backgroundColor: `white`,
    color: `black`,
  };
  let imgStyle = { opacity: `0.5` };
  if (props.state == "true") {
    imgStyle.opacity = `1`;
  }

  return (
    <>
      {props.state == "true" && (
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
    </>
  );
}
