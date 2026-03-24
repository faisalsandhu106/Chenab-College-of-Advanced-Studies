import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Paigination from './Components/Common/Paigination.jsx'
import Loader from './Components/Common/Loader.jsx'
import { HelmetProvider } from 'react-helmet-async';
import { CourseProvider } from './Components/ContextAPI/UserContext.jsx'
import { ThemeProvider } from './Components/ContextAPI/ThemeProvider.jsx'
import { AdminProvider } from './Admin/AdminContext/AdminContextAPI.jsx'

createRoot(document.getElementById('root')).render(
  <CourseProvider>
    <AdminProvider>
      <ThemeProvider>
        <HelmetProvider>
          <Router>
            {/* <Loader /> */}
            {/* <Paigination> */}
            <App />
            {/* </Paigination> */}
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </AdminProvider>
  </CourseProvider>
)
