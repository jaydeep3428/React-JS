import { NavLink } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { IoPricetagsOutline } from "react-icons/io5";
import { BsShieldPlus } from "react-icons/bs";
import { MdEqualizer } from "react-icons/md";
import watch from "../assets/banner-image (1).png"
import phone from "../assets/product-item4.jpg"
import smartwatch from "../assets/product-item7.jpg"
import t_shirt from "../assets/t-shirt.jpg"
import post_item_1 from "../assets/post-item1.jpg"
import post_item_2 from "../assets/post-item2.jpg"
import post_item_3 from "../assets/post-item3.jpg"

function Home() {
    return (
        <div>
            <div className="container-fluid bg-light-blue" >
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-2 pb-5">YOUR PRODUCTS ARE GREAT.</h1>
                            <NavLink to='/Product' className="btn btn-medium px-5 py-3 bg-dark text-light border-0 rounded-0 text-uppercase">Shop product</NavLink>
                        </div>
                        <div className="col-md-5">
                            <img src={watch} className="main-img img-fluid" alt="#" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid features">
                <div className="container">
                    <div><h2 className="text-uppercase">Our Best Services</h2></div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="box d-flex">
                                <div className="box-icon pe-3 pb-3">
                                    <h3 style={{ color: 'skyblue' }}><FaCartShopping /></h3>
                                </div>
                                <div className="box-content">
                                    <h4>FREE DELIVERY</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="box d-flex">
                                <div className="box-icon pe-3 pb-3">
                                    <h3 style={{ color: 'skyblue' }}><MdEqualizer /></h3>
                                </div>
                                <div className="box-content">
                                    <h4>BEST QUALITY</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="box d-flex">
                                <div className="box-icon pe-3 pb-3">
                                    <h3 style={{ color: 'skyblue' }}><IoPricetagsOutline /></h3>
                                </div>
                                <div className="box-content">
                                    <h4>DAILY OFFERS</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="box d-flex">
                                <div className="box-icon pe-3 pb-3">
                                    <h3 style={{ color: 'skyblue' }}><BsShieldPlus /></h3>
                                </div>
                                <div className="box-content">
                                    <h4>SECURE</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid best">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="text-uppercase">Our Best Products</h2>
                        </div>
                        <div>
                            <NavLink className='pr' to='/Product'>MORE PRODUCTS</NavLink>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="cards text-center shadow-md rounded-md overflow-hidden p-3">
                                <img src={phone} alt="#" className="img-fluid" />
                                <div className="p-4 pb-0">
                                    <h4 className="type">IPHONE 13 PRO</h4>
                                    <h4 className="price">₹ 120000</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="cards text-center shadow-md rounded-md overflow-hidden p-3">
                                <img src={smartwatch} alt="#" className="img-fluid" />
                                <div className="p-4 pb-0">
                                    <h4 className="type">SMART WATCH</h4>
                                    <h4 className="price">₹ 1200</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="cards text-center shadow-md rounded-md overflow-hidden p-3">
                                <img src={t_shirt} alt="#" className="img-fluid" style={{ height: '418px' }} />
                                <div className="p-4 pb-0">
                                    <h4 className="type">MENS PREMIUM T-SHIRT</h4>
                                    <h4 className="price">₹ 600</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid subscribe">
                <div className="container">
                    <div className="row">
                        <div className="subscribe-content bg-dark d-flex justify-content-center align-items-center flex-wrap">
                            <div className="col-md-6 col-sm-12">
                                <div className="pe-3">
                                    <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
                                    <p>Get latest news, updates and deals directly mailed to your inbox.</p>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <form action="#">
                                    <div className="input-group flex-wrap">
                                        <input className="form-control rounded-0" type="email" placeholder="Your Email Address Here" />
                                        <button className="btn btn-primary px-4 py-2 rounded-0">SUBSCRIBE</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid blogs pb-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="">LATEST BLOGS</h2>
                        </div>
                        <div>
                            <NavLink className='pr' to='/Blog'>MORE BLOGS</NavLink>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_1} alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - GADGETS</h6>
                                    <h5 className="prices">GET SOME COOL GADGETS IN 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_2} alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 25, 2023 - TECHNOLOGY</h6>
                                    <h5 className="prices">TECHNOLOGY HACK YOU WON'T GET</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className="shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_3} alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - CAMERA</h6>
                                    <h5 className="prices">TOP 10 SMALL CAMERA IN THE WORLD</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
