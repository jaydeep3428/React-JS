import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <div>
            <h2 className="text-center pt-4 mb-0 about">CONTACT US</h2>

            <div className="container-fluid foter">
                <section className="text-secondary">
                    <div className="map container py-5 d-flex">
                        <div className="col-lg-6 col-md-6 rounded overflow-hidden me-md-3 p-4 d-flex align-items-end justify-content-start ">
                            <iframe
                                width="100%"
                                height="100%"
                                className=""
                                frameBorder="0"
                                title="map"
                                marginHeight="0"
                                marginWidth="0"
                                scrolling="no"
                                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            ></iframe>

                        </div>
                        <div className="p-3 foter col-lg-6 col-md-6 d-flex flex-column ms-md-auto py-4 mt-4 mt-md-0">
                            <h2 className="h5 mb-1 font-weight-medium">Feedback</h2>
                            <p className="mb-4">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" name="name" className="form-control border-secondary text-dark" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label ">Email</label>
                                <input type="email" id="email" name="email" className="form-control border-secondary text-dark" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label ">Message</label>
                                <textarea id="message" name="message" className="form-control border-secondary text-dark h-100" rows="5"></textarea>
                            </div>
                            <button className="btn mt-4 btn-primary ">Submit</button>
                            <p className=" mt-3 small">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container-fluid foter">
                <div className="container" style={{ paddingTop: '5em' }}>
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

                            <div className="foter">
                                <div className="container mx-auto py-4 px-5 d-flex align-items-center flex-wrap flex-col flex-sm-row">
                                    <p className="mb-0 text-sm text-center text-sm-left">© 2024 HI Tech. All Rights Reserved.</p>
                                    <span className="d-inline-flex ms-sm-auto justify-content-center">
                                        <a className="">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width='25px' viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ms-3">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width='25px' viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ms-3">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width='25px' viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                        <a className="ms-3">
                                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" width='25px' viewBox="0 0 24 24">
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
        </div>
    );
}

export default Contact;
