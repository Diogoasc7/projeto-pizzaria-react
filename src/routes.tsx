import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
