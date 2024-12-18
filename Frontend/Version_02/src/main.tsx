//import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter><App /></BrowserRouter>  {/* durch den BrowserRouter von der React-Liberary kann das App Componente auf die react-Router-liberay benutzen  */}
  </StrictMode>,
)
