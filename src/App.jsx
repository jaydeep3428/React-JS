import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Components/Students'
import Render_ex from './Components/Render_ex'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/NavBar'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Product from './Components/Product'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/product' element={<Product />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<div>this is 4o4 error page</div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
