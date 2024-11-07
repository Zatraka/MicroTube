import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
      <BrowserRouter><App /></BrowserRouter> {/* durch den BrowserRouter von der React-Liberary kann das App Componente auf die react-Router-liberay benutzen  */}
  </StrictMode>,
)
