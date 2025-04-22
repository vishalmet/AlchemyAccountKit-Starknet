# Starknet Wallet Connection with Alchemy

This project demonstrates how to connect to Starknet wallets (Braavos/ArgentX) using Alchemy as the RPC provider.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Starknet wallet (Braavos or ArgentX) installed in your browser
- An Alchemy API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Alchemy API key:
   ```
   VITE_ALCHEMY_API_KEY=your_alchemy_api_key_here
   ```

## Project Structure

- `src/starknetConnect.ts`: Contains the wallet connection logic and Alchemy provider configuration
- `src/App.tsx`: Main React component with the connect wallet button and UI

## Implementation Details

### Wallet Connection

The project uses the browser-injected `window.starknet` object to connect to Starknet wallets. The connection flow:

1. Checks if a Starknet wallet (Braavos/ArgentX) is installed
2. Calls `window.starknet.enable()` to request wallet connection
3. Retrieves the connected account's address

### Alchemy Integration

The project uses Alchemy as the RPC provider for Starknet:

```typescript
const alchemyProvider = new RpcProvider({
  nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
  chainId: constants.StarknetChainId.SN_MAIN,
});
```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the application in your browser
3. Click the "Connect Wallet" button
4. Approve the connection request in your wallet
5. Once connected, your wallet address will be displayed

## Dependencies

- `starknet`: Core Starknet library
- `react`: React framework
- `@vitejs/plugin-react`: Vite plugin for React

## Error Handling

The implementation includes error handling for:
- Missing wallet
- Connection failures
- TypeScript type checking

## TypeScript Support

The project includes proper TypeScript declarations for the Starknet wallet interface:

```typescript
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
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
