import React from 'react';
import p1 from "../../../images/bikeValley.png";
import p2 from "../../../images/holidayTravel.png";
import p3 from "../../../images/pharmaCare.png";

const Project = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="container my-3 p-4 bg-light rounded">
                <h1 >My P R O J E C T S_</h1>
                <div>
                    <div className="row p-4 shadow my-3">
                        <div className="col-sm-12 col-md-6">
                            <img className="img-fluid rounded" src={p1} alt="" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5>Technology used :</h5>
                            <p>React JS, React Router dom, React hook form, Axios, Material UI, Bootsrap5, CSS3, Heroku,Firebase,Node.js,Express.js,MongoDB.</p>

                            <h5>Overview :</h5>
                            <ul>
                                <li>
                                    Full-Stack web application including customize admin panel.
                                </li>
                                <li>
                                    An Admin can make another admin, can manage all products (add and delete products) , can manage all orders (delete and update orders).
                                </li>
                                <li>
                                    Users can sign in / sign up using a Google Account in addition to their email and password. After signin users see their Dashboard.
                                </li>
                                <li>
                                    Users can order bikes, manage their orders and can give reviews any bikes.
                                    Responsived for Mobile and large device.
                                </li>
                            </ul>
                            <div className="d-inline-block">
                                <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://bike-valley-sharif33.web.app/"><button className="btn btn-danger  my-2 fw-bold px-4 py-2">Visit</button></a>
                                <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/BikeValley"><button className="btn btn-primary  my-2 fw-bold px-4 py-2">Details</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-4 shadow my-3">
                    <div className="col-sm-12 col-md-6">
                        <h5>Technology used :</h5>
                        <p>React JS, React Router dom, React hook form, Axios, Bootsrap5, CSS3, Heroku,Firebase, Node.js, Express.js, MongoDB.</p>

                        <h5>Overview :</h5>
                        <ul>
                            <li>
                                Full-Stack web application based on MERN.
                            </li>
                            <li>
                                Users can SignIn/SignUp by their Google Account.
                            </li>
                            <li>
                                After signin Users can see details of resort, book resort, manage their booking resorts and add their favorite resort.
                            </li>
                            <li>
                                Responsived for mobile and large devices.
                            </li>
                        </ul>
                        <div className="d-inline-block">
                            <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://holiday-travel-sharif33.web.app/
"><button className="btn btn-danger  my-2 fw-bold px-4 py-2">Visit</button></a>
                            <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/HolidayTravel"><button className="btn btn-primary  my-2 fw-bold px-4 py-2">Details</button></a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid rounded" src={p2} alt="" />
                    </div>

                </div>
                <div className="row p-4 shadow my-3">
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid rounded" src={p3} alt="" />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <h5>Technology used :</h5>
                        <p>React JS, React Router dom, Bootsrap5, CSS3, Firebase.</p>

                        <h5>Overview :</h5>
                        <ul>
                            <li>
                                Front-End based website with firebase authentication and Static API.
                            </li>
                            <li>
                                Users can sign in / sign up using a Google Account in addition to their email and password.
                            </li>
                            <li>
                                After signin Users can view doctor and medicine details and make appoinments with doctors.
                            </li>
                            <li>
                                Responsived for mobile and large devices.
                            </li>
                        </ul>
                        <div className="d-inline-block">
                            <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://pharma-care-sharif33.web.app/"><button className="btn btn-danger  my-2 fw-bold px-4 py-2">Visit</button></a>
                            <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/PharmaCare"><button className="btn btn-primary  my-2 fw-bold px-4 py-2">Details</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;