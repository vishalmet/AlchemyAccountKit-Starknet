import { useAccount, useConnect, useDisconnect } from '@starknet-react/core';
import './App.css'

function App() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    try {
      // Use the first available connector
      const connector = connectors[0];
      if (connector) {
        await connect({ connector });
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      {!isConnected ? (
        <button
          onClick={handleConnect}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <div style={{ 
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}>
          <p style={{ color: 'green', fontWeight: 'bold' }}>Wallet Connected</p>
          <p style={{ color: 'green', fontWeight: 'bold' }}>Address: {address}</p>
          <button
            onClick={() => disconnect()}
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
