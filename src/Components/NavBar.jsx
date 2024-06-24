import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from '../assets/main-logo.png';
import React, { useState } from "react";

function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        if (darkMode) {
            document.querySelector("body").setAttribute('data-theme', 'light');
            setDarkMode(false);
        } else {
            document.querySelector("body").setAttribute('data-theme', 'dark');
            setDarkMode(true);
        }
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
                                <input
                                    type="checkbox"
                                    onChange={toggleTheme}
                                    checked={darkMode}
                                    className="dark_mode_input"
                                    id="darkmode-toggle"
                                    style={{ display: 'none' }}
                                />
                                <label htmlFor="darkmode-toggle" className="darkmode-toggle" style={{ cursor: 'pointer' }}>
                                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                                </label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;
