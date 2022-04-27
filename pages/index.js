import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Container,
  chakra,
  Box,
  Input,
  Text,
  Heading,
  keyframes,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useInjectedProvider } from "../contexts/InjectedProviderContext";
import { BGContract } from "../utils/contract";

const AnimBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

export default function Home() {
  const [stateIndex, setStateIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransacting, setIsTransacting] = useState(false);
  const [isSummoned, setIsSummoned] = useState(false);
  const [summonedNFT, setSummonedNFT] = useState({});
  const [isFailed, setIsFailed] = useState(false);
  const [shortAddress, setShortAddress] = useState("");
  const [isBased, setIsBased] = useState(false);
  const [isSummoner, setIsSummoner] = useState(false);
  const [hasRebased, setHasRebased] = useState(false);
  const [basedStatusProof, setBasedStatusProof] = useState("");
  const [summonerStatusProof, setSummonerStatusProof] = useState("");
  const [contract, setContract] = useState();
  const [totalSupply, setTotalSupply] = useState(0);
  const [viewportWidth, setViewportWidth] = useState();
  const {
    address,
    isUpdating,
    connectProvider,
    disconnectDapp,
    injectedChain,
    injectedProvider,
  } = useInjectedProvider();

  const mint = async () => {
    const transaction = contract?.methods?.summon(
      basedStatusProof,
      false
    );
    const txResponse = await transaction
      .send("eth_requestAccounts")
      .once("transactionHash", (hash) => {
        console.log({ hash });
        setIsModalOpen(false);
        setIsTransacting(true);
      })
      .once("confirmation", async () => {
        setIsTransacting(false);
        setIsSummoned(true);
      })
      .once("error", (error) => {
        setIsTransacting(false);
        console.log(error);
        setIsFailed(true);
      })
      .then(async (receipt) => {
        const tokenID = receipt?.events?.Transfer?.returnValues?.tokenId;
        setSummonedNFT({
          source: `https://ghlsprereveal.s3.amazonaws.com/images/Shallow_Grave.png`,
          index: tokenID,
        });
      });
    console.log({ txResponse });
  };

  const summon = async () => {
    const transaction = contract?.methods?.summon(
      summonerStatusProof,
      true
    );
    const txResponse = await transaction
      .send("eth_requestAccounts")
      .once("transactionHash", (hash) => {
        console.log({ hash });
        setIsModalOpen(false);
        setIsTransacting(true);
      })
      .once("confirmation", async () => {
        setIsTransacting(false);
        setIsSummoned(true);
        setHasRebased(true);
      })
      .once("error", (error) => {
        setIsTransacting(false);
        console.log(error);
        setIsFailed(true);
      })
      .then(async (receipt) => {
        const tokenID = receipt?.events?.Transfer?.returnValues?.tokenId;
        setSummonedNFT({
          source: `https://ghlsprereveal.s3.amazonaws.com/images/Shallow_Grave.png`,
          index: tokenID,
        });
      });
    console.log({ txResponse });
  }

  const enableMint = async () => {
    const transaction = contract?.methods?.setMintability(
      true
    );
    const txResponse = await transaction
      .send("eth_requestAccounts")
      .once("transactionHash", (hash) => {
        console.log({ hash });
        setIsModalOpen(false);
        setIsTransacting(true);
      })
      .once("confirmation", async () => {
        setIsTransacting(false);
        setIsSummoned(true);
      })
      .once("error", (error) => {
        setIsTransacting(false);
        console.log(error);
        setIsFailed(true);
      })
    console.log({ txResponse });
  }

  async function getBasedStatus(addressToCheck) {
    const stringedAddress = JSON.stringify({ address: addressToCheck });
    const req = {
      method: "POST",
      body: stringedAddress,
    };
    const res = await fetch("/api/merkle", req);
    const jsonres = await res.json();
    setIsBased(jsonres?.expansionPak?.epBoolean);
    setBasedStatusProof(jsonres?.expansionPak?.epHexProof);
    setIsSummoner(jsonres?.summonerList?.slBoolean);
    setSummonerStatusProof(jsonres?.summonerList?.slHexProof);
  }

  useEffect(() => {
    async function checkRebaseRedemption() {
      if (address !== null && contract !== null) {
        setHasRebased(
          await contract?.methods?.REBASERedemption(address).call()
        );
      }
    }
    checkRebaseRedemption();
    if (contract !== null) {
      console.log({ contract });
    }
  }, [address, contract]);

  useEffect(() => {
    console.log({ address });
    if (address !== null) {
      setStateIndex(1);
      let addyString = address.toString();
      let first4 = addyString.slice(0, 4);
      let last4 = addyString.slice(addyString.length - 4, addyString.length);
      setShortAddress(`${first4}...${last4}`);
      getBasedStatus(address);
    } else {
      setStateIndex(0);
    }
  }, [address]);

  useEffect(() => {
    if (!!injectedChain && !!address) {
      let tempContract = BGContract(
        injectedChain.chainId,
        address,
        injectedProvider
      );
      setContract(tempContract);
    }
  }, [injectedChain, address]);

  useEffect(() => {
    if (typeof contract !== "undefined") {
      async function getSupply() {
        const tempSupply = await contract.methods.totalSupply().call();
        setTotalSupply(tempSupply);
      }
      getSupply();
    }
  }, [contract]);

  useEffect(() => {
    if (typeof contract !== "undefined" && typeof address !== "undefined") {
      const getNFTArray = async () => {
        const NFTArray = await contract.methods.balanceOf(address).call();
        console.log({ NFTArray });
      };
      getNFTArray();
    }
  }, [contract, address]);

  useEffect(() => {
    if (address !== null) {
      setStateIndex(1);
    } else {
      setStateIndex(0);
    }
    setViewportWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log(isUpdating);
  }, [isUpdating]);

  const incrementStateIndex = () => {
    setStateIndex((v) => v + 1);
  };

  const decrementStateIndex = () => {
    setStateIndex((v) => (v - 1 <= 0 ? 0 : v - 1));
  };

  const glowKeyframes = keyframes`
  0% { opacity: 0.125; }
  50% { opacity: 1; }
  100% { opacity: 0.125; }
`;

  const bobKeyframes = keyframes`
 0% { transform: translateX(-50%) translateY(-15px);}
 50% { transform: translateX(-50%) translateY(0);}
 100% { transform: translateX(-50%) translateY(-15px);}
 `;

  const glowAnimation = `${glowKeyframes} 2s ease-in-out infinite`;
  const bobAnimation = `${bobKeyframes} 2s ease-in-out infinite`;

  return (
    <Box sx={{ backgroundColor: `black`, height: `100vh`, overflow: `hidden` }}>
      {viewportWidth > 1100 && (
        <>
          {stateIndex === 0 && (
            <>
              <Box
                as={motion.div}
                animation={bobAnimation}
                sx={{
                  position: `absolute`,
                  top: `50%`,
                  left: `50%`,
                  transform: `translateX(-50%) translateY(-50%)`,
                }}
                _hover={{ cursor: `url(images/png/cursorhover.png), auto` }}
                onClick={() => connectProvider()}
              >
                <img
                  src="/images/svg/tome.svg"
                  alt=""
                  style={{
                    backgroundColor: `transparent`,
                    width: `5vw`,
                    zIndex: `5`,
                  }}
                  draggable="false"
                />
              </Box>
            </>
          )}
          {stateIndex === 1 && (
            <>
              <Box
                sx={{
                  position: `absolute`,
                  left: `50%`,
                  top: `50%`,
                  width: `100%`,
                  height: `100%`,
                  maxWidth: `1920px`,
                  maxHeight: `1080px`,
                  transform: `translateX(-50%) translateY(-50%)`,
                }}
              >
                <img
                  src="/images/svg/vignettebg.svg"
                  alt=""
                  style={{ width: `100%`, position: `absolute` }}
                  draggable="false"
                />
                <img
                  src="/images/svg/UPDATEDTitle.svg"
                  alt=""
                  style={{
                    position: `absolute`,
                    left: `50%`,
                    transform: `translateX(-50%)`,
                    top: `2rem`,
                    backgroundColor: `transparent`,
                    width: `30vw`,
                  }}
                  draggable="false"
                />
                <Box
                  sx={{
                    position: `absolute`,
                    display: `flex`,
                    alignItems: `center`,
                    gap: `2rem`,
                    left: `2rem`,
                    top: `2rem`,
                  }}
                >
                  <Box
                    sx={{
                      opacity: `0.75`,
                      transition: `0.25s`,
                    }}
                    _hover={{
                      opacity: `1`,
                      cursor: `url(images/png/cursorhover.png), auto`,
                    }}
                  >
                    <a
                      href="https://t.me/basedghouls"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        cursor: `url(images/png/cursorhover.png), auto`,
                      }}
                    >
                      <img
                        src="/images/svg/UPDATEDtelegram.svg"
                        alt=""
                        style={{ backgroundColor: `transparent` }}
                        draggable="false"
                      />
                    </a>
                  </Box>
                  <Box
                    sx={{
                      opacity: `0.75`,
                      transition: `0.25s`,
                    }}
                    _hover={{
                      opacity: `1`,
                      cursor: `url(images/png/cursorhover.png), auto`,
                    }}
                  >
                    <a
                      href="https://twitter.com/BASEDghouls"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        cursor: `url(images/png/cursorhover.png), auto`,
                      }}
                    >
                      <img
                        src="/images/svg/UPDATEDtwitter.svg"
                        alt=""
                        style={{ backgroundColor: `transparent` }}
                        draggable="false"
                      />
                    </a>
                  </Box>
                  <Box
                    sx={{
                      opacity: `0.75`,
                      transition: `0.25s`,
                    }}
                    _hover={{
                      opacity: `1`,
                      cursor: `url(images/png/cursorhover.png), auto`,
                    }}
                  >
                    <a
                      href="https://opensea.io/collection/based-ghouls"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        cursor: `url(images/png/cursorhover.png), auto`,
                      }}
                    >
                      <img
                        src="/images/svg/UPDATEDopensea.svg"
                        alt=""
                        style={{ backgroundColor: `transparent` }}
                        draggable="false"
                      />
                    </a>
                  </Box>
                  <Box
                    sx={{
                      opacity: `0.75`,
                      transition: `0.25s`,
                    }}
                    _hover={{
                      opacity: `1`,
                      cursor: `url(images/png/cursorhover.png), auto`,
                    }}
                  >
                    <a
                      href="https://looksrare.org/collections/0x938e5ed128458139A9c3306aCE87C60BCBA9c067"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        cursor: `url(images/png/cursorhover.png), auto`,
                      }}
                    >
                      <img
                        src="/images/svg/UPDATEDlooks.svg"
                        alt=""
                        style={{ backgroundColor: `transparent` }}
                        draggable="false"
                      />
                    </a>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: `absolute`,
                    right: `2.5%`,
                    transform: `translateX(-2.5%)`,
                    top: `2rem`,
                    opacity: `0.75`,
                    transition: `0.25s`,
                    display: `flex`,
                    gap: `2rem`,
                  }}
                  _hover={{
                    opacity: `1`,
                    cursor: `url(images/png/cursorhover.png), auto`,
                  }}
                  onClick={() => disconnectDapp()}
                >
                  <Text sx={{ color: `white` }}>{shortAddress}</Text>
                  <img
                    src="/images/svg/tome.svg"
                    alt=""
                    style={{ backgroundColor: `transparent`, maxWidth: `4rem` }}
                    draggable="false"
                  />
                </Box>
                <Box
                  as={motion.div}
                  animation={glowAnimation}
                  className={"glowFlame"}
                  sx={{
                    position: `absolute`,
                    opacity: `0.75`,
                    transition: `0.5s`,
                    width: `400px`,
                  }}
                >
                  <img src="/images/svg/glow.svg" alt="" />
                </Box>
                <Box
                  as={motion.div}
                  animation={bobAnimation}
                  className={"glowRock"}
                  sx={{
                    position: `absolute`,
                    opacity: `0.75`,
                    transition: `0.25s`,
                    transform: `translateX(-50%)`,
                  }}
                  _hover={{
                    opacity: `1`,
                    cursor: `url(images/png/cursorhover.png), auto`,
                  }}
                >
                  <img
                    src="/images/svg/flame.svg"
                    alt=""
                    style={{ backgroundColor: `transparent`, width: `5rem` }}
                    draggable="false"
                    onClick={() => setIsModalOpen(true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {isModalOpen && (
            <>
              <Box>
                <Box
                  sx={{
                    position: `fixed`,
                    left: `0`,
                    top: `0`,
                    backgroundColor: `rgba(0,0,0,0.7)`,
                    width: `100%`,
                    height: `100vh`,
                  }}
                  _hover={{
                    cursor: `url(images/png/cursorhover.png), auto`,
                  }}
                  onClick={() => setIsModalOpen(false)}
                ></Box>
                <Box
                  className="altar"
                  sx={{
                    position: `absolute`,
                    left: `50%`,
                    top: `20vh`,
                    transform: `translateX(-50%)`,
                    transition: `0.25s`,
                    overflow: `hidden`,
                  }}
                >
                  <img
                    src="/images/svg/MINTaltar.svg"
                    alt=""
                    style={{ backgroundColor: `transparent` }}
                    draggable="false"
                  />
                  <Box
                    as={motion.div}
                    animation={glowAnimation}
                    sx={{
                      position: `absolute`,
                      top: `0`,
                      left: `0`,
                      zIndex: `1`,
                    }}
                  >
                    <img
                      src="/images/svg/mintingglow.svg"
                      alt=""
                      style={{ backgroundColor: `transparent`, width: `100%` }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: `absolute`,
                      top: `18.5%`,
                      left: `50%`,
                      transform: `translateX(-70%)`,
                      zIndex: `2`,
                    }}
                    _hover={{
                      cursor: `url(images/png/cursorhover.png), auto`,
                    }}
                    onClick={() => mint()}
                  >
                    <img
                      src="/images/svg/mintingflame.svg"
                      alt=""
                      style={{ backgroundColor: `transparent`, width: `100%` }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: `absolute`,
                      left: `50%`,
                      bottom: `25%`,
                      transform: `translateX(-50%)`,
                      transition: `0.25s`,
                      width: `100%`,
                      zIndex: `3`,
                    }}
                  >
                    <Box>
                      <img
                        src="/images/svg/textbox_top_left.svg"
                        alt=""
                        style={{ position: `fixed`, left: `2rem`, top: `2rem` }}
                        draggable="false"
                      />
                      <Text
                        sx={{
                          position: `fixed`,
                          top: `2.4ex`,
                          left: `4rem`,
                          backgroundColor: `transparent`,
                          outline: `none`,
                          border: `none`,
                          width: `10em`,
                          fontSize: `2em`,
                          fontFamily: `lores-12-narrow, monospace`,
                          color: `#a0958a`,
                        }}
                      >
                        are you based? {isBased ? "yes" : "no"}
                      </Text>
                    </Box>
                    <Box>
                      <img
                        src="/images/svg/textbox_top_right.svg"
                        alt=""
                        style={{
                          position: `fixed`,
                          right: `2rem`,
                          top: `2rem`,
                        }}
                        draggable="false"
                      />
                      <Text
                        sx={{
                          position: `fixed`,
                          top: `2.5ex`,
                          right: `0em`,
                          backgroundColor: `transparent`,
                          outline: `none`,
                          border: `none`,
                          width: `12em`,
                          fontSize: `2em`,
                          fontFamily: `lores-12-narrow, monospace`,
                          color: `#a0958a`,
                        }}
                      >
                        ghouls raised: {totalSupply} / 6666
                      </Text>
                    </Box>
                    {/* <Heading onClick={() => enableMint()}>ENABLE MINT</Heading> */}
                  </Box>
                  {!hasRebased && isSummoner && (
                    <>
                      <Box
                        sx={{
                          color: `white`,
                          position: `fixed`,
                          top: `50%`,
                          left: `50%`,
                          transform: `translateX(-50%) translateY(-50%)`,
                          zIndex: `525600`,
                        }}
                        _hover={{
                          cursor: `url(images/png/cursorhover.png), auto`,
                        }}
                        onClick={() => summon()}
                      >
                        <img
                          src="/images/svg/rebase.svg"
                          alt=""
                          style={{ width: `800px` }}
                          draggable="false"
                        />
                        <Heading
                          sx={{
                            fontFamily: `lores-12-narrow, monospace`,
                            color: `#157196`,
                            position: `fixed`,
                            top: `50%`,
                            left: `50%`,
                            transform: `translateX(-50%) translateY(-50%)`,
                          }}
                        >
                          FIRE THE REBASE
                        </Heading>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </>
          )}
          {isTransacting && (
            <>
              <Box
                sx={{
                  position: `absolute`,
                  left: `50%`,
                  top: `15rem`,
                  transform: `translateX(-50%)`,
                }}
              >
                <img src="/images/burntheykey.gif" alt="" draggable="false" />
              </Box>
            </>
          )}
          {isSummoned && (
            <>
              <Box>
                <Box
                  sx={{
                    position: `fixed`,
                    left: `0`,
                    top: `0`,
                    backgroundColor: `rgba(0,0,0,0.7)`,
                    width: `100%`,
                    height: `100vh`,
                  }}
                  _hover={{
                    cursor: `url(images/png/cursorhover.png), auto`,
                  }}
                  onClick={() => setIsSummoned(false)}
                >
                  <Box
                    sx={{
                      position: `absolute`,
                      left: `50%`,
                      top: `50%`,
                      transform: `translateX(-50%) translateY(-50%)`,
                      width: `750px`,
                      padding: `2ex 1em`,
                      backgroundColor: `#e0e0e0`,
                      display: `flex`,
                      flexDirection: `column`,
                      alignItems: `center`,
                    }}
                  >
                    <Heading
                      sx={{ lineHeight: `1`, margin: `1ex`, fontSize: `48px` }}
                    >
                      Summon Successful
                    </Heading>
                    {summonedNFT && (
                      <Box sx={{ padding: `2ex 2em` }}>
                        <img
                          src={summonedNFT?.source}
                          alt={`Based Ghoul #${summonedNFT?.index}`}
                        />
                      </Box>
                    )}
                    <Heading>Your Ghoul Is Rising...</Heading>
                    <Box
                      sx={{
                        display: `block`,
                        border: `2px solid #333`,
                        padding: `1ex 1em`,
                        width: `fit-content`,
                      }}
                      onClick={() => setIsFailed(false)}
                    >
                      Close
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
          {isFailed && (
            <>
              <Box
                sx={{
                  position: `absolute`,
                  left: `50%`,
                  top: `15rem`,
                  transform: `translateX(-50%)`,
                  width: `750px`,
                  padding: `2ex 1em`,
                  backgroundColor: `#e0e0e0`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                }}
              >
                <Heading>Summon Failed</Heading>
                <Box
                  sx={{
                    display: `block`,
                    border: `2px solid #333`,
                    padding: `1ex 1em`,
                    width: `fit-content`,
                  }}
                  onClick={() => setIsFailed(false)}
                >
                  Close
                </Box>
              </Box>
            </>
          )}
        </>
      )}
      {viewportWidth < 1100 && (
        <Heading
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
          }}
        >
          Get on your desktop, summoner.
        </Heading>
      )}
    </Box>
  );
}
