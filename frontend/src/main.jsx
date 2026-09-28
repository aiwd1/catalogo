import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode tolto: in sviluppo (non in produzione) React esegue due volte
// render ed effetti per scovare bug, quindi vedremmo doppi console.log e una
// doppia fetch nel tab Network. Per rimetterlo:
// import { StrictMode } from 'react'
// createRoot(...).render(<StrictMode><App /></StrictMode>)
createRoot(document.getElementById('root')).render(
  <App />,
)
