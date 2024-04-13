import { SEPOLIA_CONTRACT_ADDRESS } from "@/app/constants/config";
import { abi } from "@/app/contract/abi";
import { useCall, useContractFunction } from "@usedapp/core";
import { Contract, ethers } from "ethers";

export type ClaimedKeyResponse = {
  tokenURI: string;
  claimedAt: number;
};

const abiInterface = new ethers.utils.Interface(abi);
const contract = new Contract(SEPOLIA_CONTRACT_ADDRESS, abiInterface);

export function useClaimKey() {
  const { send, state } = useContractFunction(contract, "claimKey");
  return { send, state };
}

export function useClaimedKeys() {
  const result = useCall({
    contract: contract,
    method: "claimedKeys",
    args: [],
  });
  return result?.value?.[0] as ClaimedKeyResponse[] | undefined;
}

export function traslateImage(ipfsImageUri: string) {
  return ipfsImageUri.replace("ipfs://", "https://ipfs.io/ipfs/");
}
