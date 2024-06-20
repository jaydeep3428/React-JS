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

function App() {
  // const [count, setCount] = useState(0)

  // const [data, setData] = useState("Jaydeep");
  // function click() {
  //   setData(data + " Makwana");
  // }

  // const [name, SetName] = useState("Jaydeep");
  // function sub() {
  //   SetName(name + " Makwana")
  // }

  // const [name, setName] = React.useState('Jaydeep')

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <h1>{data}</h1>
      <button onClick={click}>Click Me!</button> */}

      {/* <div className='App'>
        <h1>Props In React!</h1>
        <Students name={name} />
        <button onClick={sub}>Update Name</button>
      </div> */}

      {/* <div className="App">
        <h2>Render Method!</h2>
        <Render_ex name={name} />
        <button onClick={() => name + setName('Makwana')}>Update</button>
      </div> */}

      <div className="main">
        {/* <nav> */}
        {/* <div>logo</div> */}
        {/* <div className='App'> */}
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
        </BrowserRouter>
        {/* </div> */}
        {/* </nav> */}
      </div>
    </>
  )
}

export default App
