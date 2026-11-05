import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GameProvider } from './state/GameContext'
import './styles.css'

// Remove a barra final para uso como basename do React Router (ex.: "/cloud-sisters")
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <GameProvider>
        <App />
      </GameProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
