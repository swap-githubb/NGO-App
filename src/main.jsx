import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { injectColorVariables } from './colors.js'
import './index.css'
import App from './App.jsx'

// Inject brand colors as CSS custom properties
injectColorVariables()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
