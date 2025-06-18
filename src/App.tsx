import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
