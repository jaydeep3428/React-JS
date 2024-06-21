import { NavLink } from "react-router-dom";
import { TiAdjustBrightness } from "react-icons/ti";
import logo from '../assets/main-logo.png';
import React, { useRef } from "react";



function NavBar() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }

    return (
        <div className="container-fluid pt-2 pb-2 p-md-2 navbars">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid p-0">
                        <img src={logo} className="navbar-brand img-fluid" alt="#" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_ul" aria-controls="nav_ul" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="nav_ul">
                            <ul className="navbar-nav d-flex align-items-start ms-auto">
                                <li className="nav-item"><NavLink className="" to='/'>HOME</NavLink ></li>
                                <li className="nav-item"><NavLink className="" to='/Product'>PRODUCTS</NavLink ></li>
                                <li className="nav-item"><NavLink className="" to='/Blog'>BLOG</NavLink ></li>
                                <li className="nav-item"><NavLink className="" to='/About'>ABOUT</NavLink ></li>
                                <li className="nav-item"><NavLink className="" to='/contact'>CONTACT US</NavLink ></li>
                            </ul>

                            <div className="ms-auto d-flex dark_mode">
                                <input type="checkbox" onClick={toggleTheme} className="dark_mode_input" id="darkmode-toggle" />
                                <h3 className="darkmode-toggle" for="dark_mode_input"><TiAdjustBrightness /></h3>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar

