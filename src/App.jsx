import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Pages/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <div>
        <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
