import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StarshipProvider } from './contexts/starshipContext.jsx'
import { NotificationProvider } from './contexts/notification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotificationProvider>
      <StarshipProvider>
        <App />
      </StarshipProvider>
    </NotificationProvider>
  </StrictMode >,
)
