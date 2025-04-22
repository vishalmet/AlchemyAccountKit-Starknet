import { RpcProvider, constants } from 'starknet';
import { InjectedConnector } from '@starknet-react/core';

// Declare the Starknet wallet interface
declare global {
  interface Window {
    starknet?: {
      enable: () => Promise<void>;
      account: {
        address: string;
      };
      isConnected: boolean;
    };
  }
}

// Provider factory function
const providerFactory = (chain: any) => {
  return new RpcProvider({
    nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
    chainId: constants.StarknetChainId.SN_MAIN,
  });
};

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' } }),
  new InjectedConnector({ options: { id: 'argentX' } }),
];

const chains = [
  {
    id: BigInt(constants.StarknetChainId.SN_MAIN),
    name: 'Starknet Mainnet',
    network: 'mainnet',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7' as `0x${string}`
    },
    rpcUrls: {
      default: {
        http: [`https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`],
      },
      public: {
        http: [`https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`],
      },
    },
    blockExplorers: {
      default: {
        name: 'Voyager',
        url: 'https://voyager.online',
      },
    },
  },
];

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

export { providerFactory, connectors, chains, connectWallet }; 