import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/ant_d.css'
import '../shared/config/i18n';
import ProviderMain from './providers'
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <ProviderMain/>
  </StrictMode>,
)
