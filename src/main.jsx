import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import './index.css'
import './styles/globals.css'
import App from './App.jsx'

const container = document.getElementById('root')

// Si hay HTML pre-renderizado → hidrata (adjunta eventos al DOM existente)
// Si no → render normal (dev o fallback)
if (container.innerHTML.trim()) {
  hydrateRoot(container, <StrictMode><App /></StrictMode>)
} else {
  createRoot(container).render(<StrictMode><App /></StrictMode>)
}
