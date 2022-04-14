const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');
import { allowlist } from '../../utils/allowlist';

const leafNodes = allowlist.map(addr => keccak256(addr));
const tree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});

export default function handler(req, res) {
    const body = JSON.parse(req.body);
    const addressToCheck = body.address;
    try {
        const root = tree.getRoot().toString('hex');
        const leaf = keccak256(addressToCheck);
        const proof = tree.getProof(leaf);
        const hexProof = tree.getHexProof(leaf);
        const basedBoolean = tree.verify(proof, leaf, root);
        res.status(200).json({ proof, basedBoolean, hexProof });
    } catch (error) {
        res.status(500).json({error});
    }
  }