import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x41172c5626E94dDfc5D1d2de91dC2f65288386D0';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
