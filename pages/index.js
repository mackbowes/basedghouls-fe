import { useState, useEffect } from "react";
import { Container, chakra, Box, Input, Text, Heading } from "@chakra-ui/react";
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
  const [basedStatusProof, setBasedStatusProof] = useState("");
  const [contract, setContract] = useState();
  const [totalSupply, setTotalSupply] = useState(0);
  const {
    address,
    isUpdating,
    connectProvider,
    disconnectDapp,
    injectedChain,
    injectedProvider,
  } = useInjectedProvider();



  const mint = async () => {
    const transaction = contract?.methods?.mint(basedStatusProof);
    const txResponse = await transaction
      .send("eth_requestAccounts")
      .once("transactionHash", (hash) => {
        console.log({hash});
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
      }).then(async (receipt) => {
        const tokenID = receipt?.events?.Transfer?.returnValues?.tokenId;
        setSummonedNFT({source:`https://ghlstest.s3.us-east-1.amazonaws.com/images/${tokenID}.png`, index: tokenID});
      });
  };

  async function getBasedStatus(addressToCheck) {
    const stringedAddress = JSON.stringify({ address: addressToCheck });
    const req = {
      method: "POST",
      body: stringedAddress,
    };
    const res = await fetch("/api/merkle", req);
    const jsonres = await res.json();
    console.log(jsonres?.hexProof);
    setIsBased(jsonres?.basedBoolean);
    setBasedStatusProof(jsonres?.hexProof);
  }

  useEffect(() => {
    console.log(address);
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
      console.log({NFTArray});
      } 
      getNFTArray();
    }
  },[contract, address])

  useEffect(() => {
    if (address !== null) {
      setStateIndex(1);
    } else {
      setStateIndex(0);
    }
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

  return (
    <Box sx={{ backgroundColor: `black`, height: `100vh`, overflow: `hidden` }}>
      {stateIndex === 0 && (
        <>
          <Box
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
                  style={{ cursor: `url(images/png/cursorhover.png), auto` }}
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
                  style={{ cursor: `url(images/png/cursorhover.png), auto` }}
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
                <img
                  src="/images/svg/opensea.svg"
                  alt=""
                  style={{ backgroundColor: `transparent` }}
                  draggable="false"
                />
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
                <img
                  src="/images/svg/UPDATEDlooks.svg"
                  alt=""
                  style={{ backgroundColor: `transparent` }}
                  draggable="false"
                />
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
              sx={{
                position: `absolute`,
                left: `50%`,
                top: `55%`,
                transform: `translateX(-50%)`,
                opacity: `0.75`,
                transition: `0.25s`,
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
                      top: `.8ex`,
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
                    style={{ position: `fixed`, right: `2rem`, top: `2rem` }}
                    draggable="false"
                  />
                  <Text
                    sx={{
                      position: `fixed`,
                      top: `.8ex`,
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
              </Box>
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
                <Heading sx={{ lineHeight: `1`, margin: `1ex`, fontSize: `48px` }}>
                  Summon Successful
                </Heading>
                {summonedNFT && (
                  <Box sx={{padding: `2ex 2em`}}>
                  <img
                    src={summonedNFT?.source}
                    alt={`Based Ghoul #${summonedNFT?.index}`}
                  />
                  </Box>
                )}
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
    </Box>
  );
}
