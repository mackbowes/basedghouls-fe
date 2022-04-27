const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
import { allowList, SUMMONER_LIST } from "../../utils/allowlist";

const expansionPakLeafNodes = allowList.map((addr) => keccak256(addr));
const summonerListLeafNodes = SUMMONER_LIST.map((addr) => keccak256(addr));
const epTree = new MerkleTree(expansionPakLeafNodes, keccak256, {
  sortPairs: true,
});
const slTree = new MerkleTree(summonerListLeafNodes, keccak256, {
  sortPairs: true,
});

export default function handler(req, res) {
  const body = JSON.parse(req.body);
  const addressToCheck = body.address;
  try {
    let epRoot,
      slRoot,
      leaf,
      epProof,
      slProof,
      epHexProof,
      slHexProof,
      epBoolean,
      slBoolean;
    leaf = keccak256(addressToCheck);
    epRoot = epTree.getRoot().toString("hex");
    slRoot = slTree.getRoot().toString("hex");
    epProof = epTree.getProof(leaf);
    slProof = slTree.getProof(leaf);
    epHexProof = epTree.getHexProof(leaf);
    slHexProof = slTree.getHexProof(leaf);
    epBoolean = epTree.verify(epProof, leaf, epRoot);
    slBoolean = slTree.verify(slProof, leaf, slRoot);
    res
      .status(200)
      .json({
        expansionPak: { epProof, epBoolean, epHexProof },
        summonerList: { slProof, slBoolean, slHexProof },
        isSummoner: slBoolean,
      });
  } catch (error) {
    res.status(500).json({ error });
  }
}
