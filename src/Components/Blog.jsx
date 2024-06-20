import { NavLink } from "react-router-dom"

function Blog() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="text-dark text-uppercase">LATEST BLOGS</h2>
                        </div>
                        {/* <div>
                            <NavLink className='pr' to='/Blog'>MORE BLOGS</NavLink>
                        </div> */}
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="bg-white shadow-md rounded-md overflow-hidden p-3">
                                <img src="src\assets\post-item1.jpg" alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - GADGETS</h6>
                                    <h5 className="prices">GET SOME COOL GADGETS IN 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="bg-white shadow-md rounded-md overflow-hidden p-3">
                                <img src="src\assets\post-item2.jpg" alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 25, 2023 - TECHNOLOGY</h6>
                                    <h5 className="prices">TECHNOLOGY HACK YOU WON'T GET</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="bg-white shadow-md rounded-md overflow-hidden p-3">
                                <img src="src\assets\post-item3.jpg" alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - CAMERA</h6>
                                    <h5 className="prices">TOP 10 SMALL CAMERA IN THE WORLD</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="bg-white shadow-md rounded-md overflow-hidden p-3">
                                <img src="src\assets\post-item3.jpg" alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - CAMERA</h6>
                                    <h5 className="prices">TOP 10 SMALL CAMERA IN THE WORLD</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '5em' }}>
                <div>
                    <footer className="text-white bg-dark">
                        <div className="container px-5 py-5 d-flex align-items-md-center align-items-lg-start flex-md-row flex-md-nowrap flex-wrap flex-col">
                            <div className="col-lg-4 col-md-6 col-12 px-md-4">
                                <NavLink to='/About' className="text-light text-decoration-none">
                                    <h2 className="mb-3">About Shop</h2>
                                </NavLink>
                                <p className="mt-2 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id quam et urna fermentum dignissim.</p>
                            </div>

                            <div className="flex-grow d-flex flex-wrap text-md-start text-start">
                                <div className="col-lg-4 col-md-6 col-12 px-md-4 text-start">
                                    <h2 className="title-font font-medium text-lg mb-3">Quick Links</h2>
                                    <nav style={{ listStyleType: 'none' }} className="mb-10">
                                        <li>
                                            <NavLink to="/" className="">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/Product">Product</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/Blog">Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/About">About</NavLink>

                                        </li>
                                        <li>
                                            <NavLink to="/Contact">Contact Us</NavLink>

                                        </li>
                                    </nav>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 px-md-4 text-start">
                                    <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 text-white">Contact Us</h2>
                                    <p className="m-0">123 Main Street, City, Country</p>
                                    <p className="m-0">Email: info@example.com</p>
                                    <p className="m-0">Phone: +123-456-7890</p>
                                </div>

                                <div className="col-lg-4 col-md-6 col-12 px-md-4 text-start">
                                    <h2 className="mb-3">Subscribe</h2>
                                    <p className="mb-4">Subscribe to our newsletter to receive updates, promotions, and special offers.</p>
                                    <form>
                                        <div className="d-flex flex-column">
                                            <input type="email" id="email" name="email" placeholder="Enter your email" className=" px-4 py-2 border-0 " />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-2 px-4 py-2  border-0 text-light rounded-0">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light">
                            <div className="container mx-auto py-4 px-5 d-flex align-items-center flex-wrap flex-col flex-sm-row">
                                <p className="mb-0 text-sm text-center text-sm-left">Â© 2024 HI Tech. All Rights Reserved.</p>
                                <span className="d-inline-flex ms-sm-auto justify-content-center">
                                    <a className="">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width='25px' viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ms-3">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width='25px' viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ms-3">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width='25px' viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ms-3">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" width='25px' viewBox="0 0 24 24">
                                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Blog