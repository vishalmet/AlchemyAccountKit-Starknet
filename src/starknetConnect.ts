import { RpcProvider, constants, Account } from 'starknet';

// Declare the Starknet wallet interface
declare global {
  interface Window {
    starknet?: {
      enable: () => Promise<void>;
      account: {
        address: string;
      };
    };
  }
}

const alchemyProvider = new RpcProvider({
  nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
  chainId: constants.StarknetChainId.SN_MAIN,
});

// Function to connect to wallet
async function connectWallet() {
  try {
    // Check if window.starknet is available (Braavos or ArgentX)
    if (window.starknet) {
      await window.starknet.enable();
      return window.starknet.account;
    }
    throw new Error('No Starknet wallet found');
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    throw error;
  }
}

export { alchemyProvider, connectWallet }; 