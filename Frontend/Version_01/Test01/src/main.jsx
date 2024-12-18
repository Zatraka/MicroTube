import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { ReactDOM } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter> {/* durch den BrowserRouter von der React-Liberary kann das App Componente auf die react-Router-liberay benutzen  */}
  </StrictMode>,
)
