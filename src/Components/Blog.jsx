import { NavLink } from "react-router-dom"
import post_item_1 from "../assets/post-item1.jpg"
import post_item_2 from "../assets/post-item2.jpg"
import post_item_3 from "../assets/post-item3.jpg"

function Blog() {
    return (
        <div>
            <div className="container-fluid blogs pb-5">
                <div className="container pt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="text-uppercase">LATEST BLOGS</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className=" shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_1} alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - GADGETS</h6>
                                    <h5 className="prices">GET SOME COOL GADGETS IN 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className=" shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_2} alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 25, 2023 - TECHNOLOGY</h6>
                                    <h5 className="prices">TECHNOLOGY HACK YOU WON'T GET</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className=" shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_3} alt="#" className="img-fluid" />
                                <div className="p-3 pb-0">
                                    <h6 className="type">FEB 22, 2023 - CAMERA</h6>
                                    <h5 className="prices">TOP 10 SMALL CAMERA IN THE WORLD</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-0 col-md-6">
                            <div className=" shadow-md rounded-md overflow-hidden p-3">
                                <img src={post_item_2} alt="#" className="img-fluid" />
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

export default Blog