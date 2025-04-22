import React from 'react'
import ReactDOM from 'react-dom/client'
import { StarknetConfig } from '@starknet-react/core'
import { providerFactory, connectors, chains } from './starknetConnect'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StarknetConfig
      autoConnect
      connectors={connectors}
      chains={chains}
      provider={providerFactory}
    >
      <App />
    </StarknetConfig>
  </React.StrictMode>,
)
