import { useState } from 'react';
import { connectWallet } from './starknetConnect';
import './App.css'

function App() {
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    try {
      const account = await connectWallet();
      setAddress(account.address);
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
      {!address ? (
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
          backgroundColor: 'blue',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p>Connected: {address}</p>
        </div>
      )}
    </div>
  );
}

export default App;
