import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import ProviderMain from './providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderMain/>
  </StrictMode>,
)
