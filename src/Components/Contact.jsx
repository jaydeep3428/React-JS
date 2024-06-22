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
        </div>
    );
}

export default Contact;
