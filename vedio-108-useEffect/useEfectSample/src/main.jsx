// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // strict mode will render the page two times for confirmation in, commenting it out for understanding 
  // useEffect functionality, and to get production time environment
  // <StrictMode>
    <App />
  // </StrictMode>,
)
