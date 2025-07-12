import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import AddCard from './AddCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddCard />
    {/* <App /> */}
>>>>>>> ee7ca4b36a162964b0f5b47f14abdac84abe1496
  </StrictMode>,
)
