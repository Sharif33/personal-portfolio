import React from 'react';
import './Phono.css';

const Phono = () => {
    return (
        <div style={{ overflowX: "hidden", paddingTop: "70px"}}>
             <div className="container">
                 {/* Details */}

                <div className='shadow py-5 rounded'>
                <div className='mt-2 mb-5 p-3 rounded text-center'>
                     <h3 className='text-light'><span className='text-warning fw-bold'>PH</span><span className="text-danger fw-bold">|O|</span><span className="text-warning fw-bold">NO</span></h3>
                     <small className='text-secondary'>Online mobile phone orders related website</small>
                     <div className='d-flex justify-content-center '>
                     <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono"><button className="btn btn-custom">Source Code</button></a>
                    <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono-server"><button className="btn btn-custom">Server Site Code</button></a>
                    <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href="https://phono-3a490.web.app/"><button className="btn btn-custom-2">Live Preview</button></a>
                     </div>
                 </div>

                    <div className="row">
                        <div className="col-md-6 wrapper">
                        <h4 className=' wrapper-text fw-bold'>Technology Used</h4>                      
            <div className='row'>
                                    <div className='col-md-6 text-secondary front-end bg-dark p-3 rounded'>
                                        <h5 style={{color:"#22c55e"}}>Front-End :</h5>
                                        <ul>
                                            <li>React JS</li>
                                            <li>React Router dom</li>
                                            <li>React hook form</li>
                                            <li>Axios</li>
                                            <li>Material UI</li>
                                            <li>Bootsrap5</li>
                                            <li>CSS3</li>
                                        </ul>
                                        <h5 style={{color:"#22c55e"}}>Authentication :</h5>
                                        <ul>
                                        <li>Firebase</li> 
                                        </ul>
                                       
                                    </div>
                                    <div className="col-md-6 text-secondary back-end bg-dark shadow rounded p-3">
                                             <h5 style={{color:"#22c55e"}}>Back-End :</h5>
                                        <ul>
                                            <li>Node.js</li>
                                            <li>Express.js</li>
                                        </ul>
                                        <h5 style={{color:"#22c55e"}}>Database :</h5>
                                        <ul>
                                            <li>MongoDB Atlas</li>
                                        </ul>
                                        <h5 style={{color:"#22c55e"}}>Payment :</h5>
                                        <ul>
                                            <li>Stripe</li>
                                        </ul>
                                        <h5 style={{color:"#22c55e"}}>Deploy :</h5>
                                        <ul>
                                            <li>Heroku</li>
                                            <li>Firebase</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-6 bg-dark wrapper">
                        <h4 className=' wrapper-text fw-bold'>Key Features </h4>
                        <div className="p-3 text-light">
                            <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Full-Stack web application including customize admin panel as well as search and filter option.</p>
                            <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Admin can make another admin, can manage all products (add, delete and update products), can manage all orders (delete and update orders).</p>
                            <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Users can sign in / sign up using a Google account in addition to their email and password. After signin, users see their dashboard. They can order  phone, manage their orders and can give reviews any phone. </p>
                            <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Responsived for mobile and large devices. </p>
                            <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Used Stripe for payment. </p>
                        </div>
                    </div>
                </div>
                </div>

                <div className='my-5 shadow p-3 rounded'>
                    <div className='text-center'>
                    <h3 className='text-light fw-bold'>Overview of   <span className='text-light'><span className='text-warning fw-bold'>PH</span><span className="text-danger fw-bold">|O|</span><span className="text-warning fw-bold">NO</span></span> Pages</h3>
                    <small className='text-danger text-center'>*Keep hovering to full page view</small>
                    </div>
                    <hr className=' text-warning' />
                    
                 {/* Main Page */}
             <div className="row p-phono">
                 <h4 className="border-start text-warning fw-bold border-danger">Main Pages</h4>
              <div className="col-md-4 p-2">
                <div className="p-home rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow py-2 text-center">
                    <h5 className="w-100">Home Page</h5>
                  </div>
            </div>
              <div className="col-md-4 p-2">
                <div className="p-shop rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow py-2 text-center">
                    <h5 className="w-100">Shop Page</h5>
                  </div>
            </div>
              <div className="col-md-4 p-2">
                <div className="p-pdetails rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow py-2 text-center">
                    <h5 className="w-100">Product Details Page</h5>
                  </div>
            </div>
              <div className="col-md-4 p-2">
                <div className="p-order rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow py-2 text-center">
                    <h5 className="w-100">Product Order Modal</h5>
                  </div>
            </div>
              <div className="col-md-4 p-2">
                <div className="p-about rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">About Page</h5>
                </div>
            </div>
              <div className="col-md-4 p-2">
                <div className="p-contact rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Contact Page</h5>
                </div>
            </div>
            </div>

            {/* Authentication & User */}

             <div className="row p-phono">
                 <div className='border-start border-danger my-4'>
                 <h4 className=" text-warning fw-bold ">Authentication | User Dashboard | Payment</h4>
                 </div>
                 <div className="col-md-6 p-2">
                <div className="p-login rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Login Page</h5>
                </div>
            </div>
            <div className="col-md-6 p-2">
                <div className="p-myOrder rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">User's Order Page</h5>
                </div>
            </div>
            <div className="col-md-6 p-2">
                <div className="p-payment rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Payment Page</h5>
                </div>
            </div>
            </div>

            {/* Admin Dashboard */}

             <div className="row p-phono">
                 <h4 className="border-start text-warning fw-bold border-danger my-4">Admin Dashboard</h4>
                 <div className="col-md-6 p-2">
                <div className="p-mngOrder rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Manage Order Page</h5>
                </div>
            </div>
            <div className="col-md-6 p-2">
                <div className="p-mngProducts rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Manage Products Page</h5>
                </div>
            </div>
            <div className="col-md-6 p-2">
                <div className="p-update rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Update Products Page</h5>
                </div>
            </div>
            <div className="col-md-6 p-2">
                <div className="p-addProducts rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Add Product Page</h5>
                </div>
            </div>
            <div className="col-md-6 p-2">
                <div className="p-makeAdmin rounded-top"></div>
                <div style={{color:"#22c55e"}} className="bg-dark shadow p-2 text-center">
                    <h5 className="w-100">Make Admin Page</h5>
                </div>
            </div>
            </div>
                </div>

             </div>
        </div>
    );
};

export default Phono;