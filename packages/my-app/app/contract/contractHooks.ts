import { SEPOLIA_CONTRACT_ADDRESS } from "@/app/constants/config";
import { abi } from "@/app/contract/abi";
import { useCall } from "@usedapp/core";
import { Contract, ethers } from "ethers";

export type ClaimedKeyResponse = {
  tokenURI: string;
  claimedAt: number;
};

const abiInterface = new ethers.utils.Interface(abi);
const contract = new Contract(SEPOLIA_CONTRACT_ADDRESS, abiInterface);

export function useClaimKey() {
  const result = useCall({ contract, method: "claimKey", args: [] });

  if (!result) return;
  const claimedKeys: ClaimedKeyResponse[] = result.value;
}

export function useClaimedKeys() {
  const result = useCall({ contract, method: "claimedKeys", args: [] });
  if (!result) return;
  const claimedKeys: ClaimedKeyResponse[] = result.value;

  return claimedKeys;
}

export function traslateImage(ipfsImageUri: string) {
  return ipfsImageUri.replace("ipfs://", "https://ipfs.io/ipfs/");
}
