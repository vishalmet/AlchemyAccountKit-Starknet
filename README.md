# Starknet Wallet Connection with Alchemy

This project demonstrates how to connect to Starknet wallets (Braavos/ArgentX) using Alchemy as the RPC provider.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Starknet wallet (Braavos or ArgentX) installed in your browser
- An Alchemy API key

## Installation

### 1. Install Node.js and npm
- Download and install Node.js from [nodejs.org](https://nodejs.org/)
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2. Install Starknet Wallet
Choose one of the following wallets:
- [Braavos Wallet](https://braavos.app/) - Chrome extension
- [ArgentX Wallet](https://www.argent.xyz/argent-x/) - Chrome extension

### 3. Get Alchemy API Key
1. Sign up at [Alchemy](https://www.alchemy.com/)
2. Create a new Starknet app
3. Copy your API key from the dashboard

### 4. Project Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alchemy-accountkit-app
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Install required packages:
   ```bash
   npm install @starknet-react/core starknet --legacy-peer-deps
   ```

4. Create `.env` file:
   ```bash
   touch .env
   ```
   Add your Alchemy API key:
   ```
   VITE_ALCHEMY_API_KEY=your_alchemy_api_key_here
   ```

## Project Structure

- `src/starknetConnect.ts`: Contains the wallet connection logic and Alchemy provider configuration
- `src/App.tsx`: Main React component with the connect wallet button and UI
- `src/main.tsx`: Application entry point with Starknet configuration

## Implementation Details

### Wallet Connection

The project uses `@starknet-react/core` for wallet connection. The connection flow:

1. Uses `StarknetConfig` provider to wrap the application
2. Configures connectors for Braavos and ArgentX wallets
3. Uses hooks from `@starknet-react/core` for connection management:
   - `useAccount` for account information
   - `useConnect` for wallet connection
   - `useDisconnect` for wallet disconnection

### Alchemy Integration

The project uses Alchemy as the RPC provider for Starknet:

```typescript
const providerFactory = (chain: any) => {
  return new RpcProvider({
    nodeUrl: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_6/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
    chainId: constants.StarknetChainId.SN_MAIN,
  });
};
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

- `@starknet-react/core`: React hooks for Starknet integration
- `starknet`: Core Starknet library
- `react`: React framework
- `@vitejs/plugin-react`: Vite plugin for React

## Known Issues

### Deprecation Warning

You may see a warning in the console:
```
@deprecated Use static method WalletAccount.connect or WalletAccount.connectSilent instead. Constructor {@link WalletAccount.(format:2)}.
```

This warning comes from the internal implementation of `@starknet-react/core` and does not affect functionality. It will be resolved in future updates of the library.

## Error Handling

The implementation includes error handling for:
- Missing wallet
- Connection failures
- TypeScript type checking

## TypeScript Support

The project includes proper TypeScript declarations for the Starknet wallet interface and chain configuration.

## Troubleshooting

### Common Issues

1. **Wallet Not Detected**
   - Ensure you have either Braavos or ArgentX installed
   - Check if the wallet extension is enabled
   - Try refreshing the page

2. **Connection Failed**
   - Check your Alchemy API key in `.env`
   - Verify network connectivity
   - Ensure you're on the correct network (Mainnet)

3. **TypeScript Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript version compatibility

4. **Dependency Conflicts**
   - If you encounter dependency conflicts, use the `--legacy-peer-deps` flag:
     ```bash
     npm install --legacy-peer-deps
     ```

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
