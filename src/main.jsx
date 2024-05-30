import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello_word from './Components/Hello_word.jsx'
import Students from './Components/Students.jsx'
import Input_field from './Components/Input_field.jsx'
import Toggle from './Components/Toggle.jsx'
import Constructor_ex from './Components/Constructor_ex.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello_word />
    <hr />
    {/* <Students name={'Jaydeep'} /> */}
    <Input_field />
    <hr />
    {/* <Students name={"Jaydeep"}/> */}
    <App />

    <hr />
    <Toggle />
    <hr />
    <Constructor_ex />
  </React.StrictMode>,
)
