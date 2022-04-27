import Web3 from "web3";
import {GC_ADDRESS, MN_ADDRESS} from './address';
import {BasedGhoulsNFTAbi} from './abis/BasedGhoulsNFTAbi';
import { chainByID } from "./chain";

export const BGContract = (chainID, address, web3) => {
    let contractAddress;
    if(!web3) {
        rpcURL = chainByID(chainID).rpc_url;
        web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));
    }
    
    if (chainID == "0x1") {
        contractAddress = MN_ADDRESS;
    }
    
    if (chainID == "0x64") {
        contractAddress = GC_ADDRESS;
    }

    if (typeof contractAddress == "undefined") {
        alert("You must change your chain");
        return null;
    }

    return new web3.eth.Contract(BasedGhoulsNFTAbi, contractAddress, {from: address});
}