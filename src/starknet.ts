import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import { RpcProvider, constants } from 'starknet';

const alchemyProvider = new RpcProvider({
  nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
  chainId: constants.StarknetChainId.SN_MAIN,
});

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' } }),
  new InjectedConnector({ options: { id: 'argentX' } }),
];

export { alchemyProvider, connectors }; 