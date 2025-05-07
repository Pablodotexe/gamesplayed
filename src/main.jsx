// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Esto es lo que provee el contexto necesario para <Link> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)