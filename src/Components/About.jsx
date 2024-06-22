import { NavLink } from "react-router-dom"
import watch_1 from "../assets/watch (6).jpg"
import watch_2 from "../assets/watch (1).jpg"
import watch_3 from "../assets/watch (2).jpg"

function About() {
    return (
        <div>
            <h2 className="text-center pt-4 pb-4 mb-0 about">ABOUT US</h2>

            <div className="container-fluid about pb-5">
                <div className="container pt-4">
                    <div className="d-flex flex-column d-md-flex flex-md-row align-items-center">
                        <div className="col-md-6">
                            <div className="p-3">
                                <h3 className="text-center">Mini Store</h3>
                                <p>
                                    MiniStore is a leading retailer of brand name designer watches for all watch brands listed on our website. We pride ourselves on having one of the most efficient shopping systems available with communication at every stage to inform you of your order status, as well as excellent customer service and support team who are glad to assist you with any enquiry or problem, should one arise.
                                </p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="d-flex flex-column d-md-flex flex-md-row gap-md-3">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <img src={watch_1} alt="#" className="img-fluid object-fit-cover h-100 w-100 rounded-3" />
                                </div>
                                <div className="col-md-6 d-flex flex-column gap-3">
                                    <img src={watch_2} alt="#" className="img-fluid object-fit-cover h-50 w-100 rounded-3" />
                                    <img src={watch_3} alt="#" className="img-fluid object-fit-cover h-50 w-100 rounded-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About