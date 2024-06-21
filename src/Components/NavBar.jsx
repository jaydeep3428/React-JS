import { NavLink } from "react-router-dom";
import { TiAdjustBrightness } from "react-icons/ti";
import logo from '../assets/main-logo.png';


function NavBar() {
    return (
        <div className="container-fluid pt-2 pb-2 p-md-2 navbars text-black">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid p-0">
                        <img src={logo} className="navbar-brand img-fluid" alt="#" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_ul" aria-controls="nav_ul" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="nav_ul">
                            <ul className="navbar-nav d-flex align-items-start ms-auto">
                                <li className="nav-item"><NavLink className="nav-link" to='/'>HOME</NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to='/Product'>PRODUCTS</NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to='/Blog'>BLOG</NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to='/About'>ABOUT</NavLink ></li>
                                <li className="nav-item"><NavLink className="nav-link" to='/contact'>CONTACT US</NavLink ></li>
                            </ul>
                            <h3 className="ms-auto"><TiAdjustBrightness /></h3>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar

