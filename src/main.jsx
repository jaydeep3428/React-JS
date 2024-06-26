import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello_word from './Components/Hello_word.jsx'
import Students from './Components/Students.jsx'
import Input_field from './Components/Input_field.jsx'
import Toggle from './Components/Toggle.jsx'
import Constructor_ex from './Components/Constructor_ex.jsx'
import Render_ex from './Components/Render_ex.jsx'
// import './index.css'
import Component_did_mount from './Components/Component_did_mount.jsx'
import Component_did_update from './Components/Component_did_update.jsx'
import Should_component_update from './Components/Should_component_update.jsx'
import Useeffect_ex from './Components/Useeffect_ex.jsx'
import Usememo_ex from './Components/Usememo_ex.jsx'
import Useref_ex from './Components/Useref_ex.jsx'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Hello_word /> */}
    {/* <hr /> */}
    {/* <Students name={'Jaydeep'} /> */}
    {/* <Input_field />
    <hr />
    <Students name={"Jaydeep"} /> */}
    {/* <App /> */}

    {/* <hr />
    <Toggle />
    <hr />
    <Constructor_ex />
    <hr /> */}
    {/* <Render_ex /> */}
    <App />
    {/* <hr />
    <Component_did_mount />
    <hr />
    <Component_did_update />
    <hr />
    <Should_component_update />
    <hr />
    <Useeffect_ex />
    <hr />
    <Usememo_ex />
    <hr />
    <Useref_ex /> */}
  </React.StrictMode>,
)
