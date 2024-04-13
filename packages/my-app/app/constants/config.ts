import { ChainId, Config } from "@usedapp/core";

export const SEPOLIA_URL =
  "https://eth-sepolia.g.alchemy.com/v2/qbYCR7uPoQEdw6CTTP3Q-l3jSu6N8ITF";

export const CHAIN_ID = ChainId.Sepolia;

export const DAPP_PROVIDER_CONFIG: Config = {
  readOnlyChainId: CHAIN_ID,
  readOnlyUrls: {
    [CHAIN_ID]: SEPOLIA_URL,
  },
};

export const SEPOLIA_CONTRACT_ADDRESS =
  "0x01B620e6BA56D0C66ED64fC6667C67a6E538D50f";
