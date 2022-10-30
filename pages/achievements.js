import { Box, Heading, Text } from "@chakra-ui/react";
import { useEthers } from "../contexts/EthersProviderContext";
import { BGContract } from "../utils/contract";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ethers } from "ethers";
import axios from "axios";
import getValidAchievements from "../utils/achievements/getValidAchievements";
import Achievement from "../components/Achievement";

import { MN_ADDRESS } from "../utils/address";

export default function Achievements(props) {
  const { address, isUpdating, connectProvider, signer, provider } =
    useEthers();

  const [contract, setContract] = useState(null);
  const [ownedGhouls, setOwnedGhouls] = useState(null);
  const [ghoulData, setGhoulData] = useState(null);
  const [transferToEvents, setTransferToEvents] = useState(null);
  const [transferFromEvents, setTransferFromEvents] = useState(null);
  const [chieves, setChieves] = useState(null);
  const [ritualStatus, setRitualStatus] = useState(0);

  useEffect(() => {
    async function getContract() {
      if (!!provider && !!address) {
        let network = await provider.getNetwork();
        let tempContract = BGContract(
          network.chainId,
          address,
          provider,
          signer
        );
        setContract(tempContract);
      }
    }
    getContract();
  }, [provider, address]);

  const collectTransferEvents = async () => {
    const latestBlock = await provider?.getBlockNumber();
    const toEventsFilter = await contract?.read?.filters?.Transfer(
      null,
      address
    );
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
    setTransferToEvents(toEvents);
    setTransferFromEvents(fromEvents);
  };

  const findHeldGhouls = async () => {
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
      console.log({ heldGhouls });
      setOwnedGhouls(heldGhouls);
    }
  };

  const fetchGhoulData = async () => {
    console.log("attempting fetch");
    ownedGhouls.forEach(async (ghoul) => {
      let thisData = await contract?.read?.tokenURI(ghoul);
      let thisIndex = thisData.substring(67, thisData.length - 5);
      thisData = await axios.post("/api/ghoulData", { id: thisIndex });
      setGhoulData((v) => {
        if (v == null) {
          return [thisData.data.data];
        } else if (v.includes(thisData.data.data)) {
          return v;
        } else return [...v, thisData.data.data];
      });
    });
  };

  const requestAchievement = async (achievement, index) => {
    const gasData = {
      recipient: address,
      index,
    };
    const gasResponse = await axios.post("/api/estimateGas", gasData);
    const gasEstimate = gasResponse.data.gasEstimate;
    const fundingTX = {
      to: "0xf1093dBAD29144880743FB98ea7b936F3aeADCf2",
      value: gasEstimate,
    };
    setRitualStatus(1);
    const fundingTransaction = await signer.sendTransaction(fundingTX);
    const fundingReceipt = await fundingTransaction.wait();
    console.log(fundingReceipt);
    if (fundingReceipt.status !== 1) {
      return null;
    }
    setRitualStatus(2);
    const signedMessage = await signer.signMessage(achievement);
    setRitualStatus(3);
    const data = {
      address,
      signedMessage,
      achievement,
    };
    const response = await axios.post("/api/validateAchievement", data);
    console.log({ response });
    if (response.data.message == "Token Minted") {
      setRitualStatus(4);
    } else {
      setRitualStatus(5);
    }
  };

  useEffect(() => {
    console.log("Collecting transfer events");
    collectTransferEvents();
  }, [contract]);

  useEffect(() => {
    if (transferToEvents !== null && transferFromEvents !== null) {
      findHeldGhouls();
    }
  }, [transferToEvents, transferFromEvents]);

  useEffect(() => {
    if (ownedGhouls?.size > 0) {
      // fetchGhoulData();
      console.log({ ownedGhouls });
      const tempChieves = getValidAchievements(ownedGhouls);
      setChieves(tempChieves);
    }
  }, [ownedGhouls]);

  return (
    <Box
      sx={{
        backgroundColor: `black`,
        backgroundImage: `url(/images/chieve-bg.jpg)`,
        backgroundSize: `cover`,
        height: `100vh`,
        overflow: `hidden`,
        overflowY: `scroll`,
        paddingBottom: `20vh`,
      }}
    >
      <Heading
        sx={{
          color: `white`,
          fontFamily: `lores-12-narrow, monospace`,
          padding: `1rem`,
          fontSize: `5vw`,
          textAlign: `center`,
        }}
      >
        Summoner Hall of Fame
      </Heading>
      <Text
        sx={{
          color: `white`,
          fontFamily: `lores-12-narrow, monospace`,
          padding: `1rem`,
          maxWidth: `45ch`,
          margin: `0 auto`,
          fontSize: `1.5vw`,
        }}
      >
        In recognition of the sacrifices made by all summoners, the anciene
        regime has erected this commemorative hall. <br />
        Summoners that have made great strides in practicing and promoting the
        faith may peruse all awards prepared by the Council, as well as directly
        apply for receiving such rewards in this hallowed hall.
      </Text>
      {!address && (
        <Box
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            border: `1px solid white`,
            width: `fit-content`,
            margin: `2rem auto`,
            fontSize: `24px`,
          }}
          onClick={() => connectProvider()}
        >
          Connect Wallet
        </Box>
      )}
      {address && (
        <Box
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            width: `fit-content`,
            margin: `2rem auto`,
            fontSize: `24px`,
          }}
        >
          Welcome, {address}
        </Box>
      )}

      {chieves !== null && (
        <Box
          sx={{
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            width: `fit-content`,
            gap: `1rem`,
            margin: `0 auto`,
          }}
        >
          {Object.keys(chieves).length > 0 &&
            Object.keys(chieves).map((chieve, index) => {
              return (
                <>
                  <Achievement
                    index={index}
                    chieve={`${chieve}`}
                    state={`${chieves[chieve].toString()}`}
                    requestFunction={requestAchievement}
                  />
                </>
              );
            })}
        </Box>
      )}
      {ghoulData?.size > 0 && (
        <Box
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            width: `fit-content`,
            margin: `2rem auto`,
            fontSize: `24px`,
          }}
        >
          Your Ghouls:
          <Box sx={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr 1fr` }}>
            {ghoulData.map((ghoul, index) => {
              return (
                <Box key={index}>
                  <img
                    src={ghoul.image}
                    style={{ width: `100px`, height: `100px` }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
      <Modal isOpen={ritualStatus == 1}>
        {" "}
        <Text
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            maxWidth: `45ch`,
            margin: `0 auto`,
            fontSize: `1.5vw`,
          }}
        >
          This ritual requires an ethereal sacrifice. The instructions for completing the ritual should be clear to you now.
        </Text>
      </Modal>
      <Modal isOpen={ritualStatus == 2}>
        {" "}
        <Text
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            maxWidth: `45ch`,
            margin: `0 auto`,
            fontSize: `1.5vw`,
          }}
        >
          Summoner, please confirm your request for consideration by the council of ancients.
        </Text>
      </Modal>
      <Modal isOpen={ritualStatus == 3}>
        {" "}
        <Text
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            maxWidth: `45ch`,
            margin: `0 auto`,
            fontSize: `1.5vw`,
          }}
        >
          The ritual is in progress. The council of ancients is evaluating your words and deeds. Have patience.
        </Text>
      </Modal>
      <Modal isOpen={ritualStatus == 4} closeFunction={() => setRitualStatus(0)}>
        {" "}
        <Text
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            maxWidth: `45ch`,
            margin: `0 auto`,
            fontSize: `1.5vw`,
          }}
        >
          The ritual has successfully completed. The council of ancients thanks you for your participation.
        </Text>
      </Modal>
      <Modal isOpen={ritualStatus == 5} closeFunction={() => setRitualStatus(0)}>
        {" "}
        <Text
          sx={{
            color: `white`,
            fontFamily: `lores-12-narrow, monospace`,
            padding: `1rem`,
            maxWidth: `45ch`,
            margin: `0 auto`,
            fontSize: `1.5vw`,
          }}
        >
          The ritual has completed unsuccessfully. Please contact the council about this error.
        </Text>
      </Modal>
    </Box>
  );
}

const Modal = (props) => {
  return (
    <>
      {props.isOpen && (
        <>
          <Box
            sx={{
              position: `fixed`,
              backgroundColor: `rgba(0,0,0,0.8)`,
              width: `100vw`,
              height: `100vh`,
              left: `0`,
              top: `0`,
            }} onClick={() => props?.closeFunction()}
          ></Box>
          <Box
            sx={{
              position: `fixed`,
              backgroundColor: `rgba(0,0,0,1)`,
              left: `50%`,
              top: `50%`,
              transform: `translateX(-50%) translateY(-50%)`,
              padding: `2rem`,
              border: `2px solid white`
            }}
          >
            {props.children}
          </Box>
        </>
      )}
    </>
  );
};
