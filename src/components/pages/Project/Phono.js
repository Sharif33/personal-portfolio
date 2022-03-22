import React from 'react';
import './Phono.css';
import { RiGithubLine, RiExternalLinkLine,RiGitBranchLine } from "react-icons/ri";

const Phono = () => {
    return (
        <div style={{ overflowX: "hidden", paddingTop: "70px"}}>
             <div className="container">
                 {/* Details */}

                <div className='py-5 rounded'>
                <div className='mt-2 mb-5 p-3 rounded text-center'>
                     <h3 className='text-light'><span className='text-warning fw-bold'>PH</span><span className="text-danger fw-bold">|O|</span><span className="text-warning fw-bold">NO</span></h3>
                     <small className='text-light-slate'>Online mobile phone orders related website</small>
                     <div className='d-flex justify-content-center '>
                     <div>
                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono"><RiGithubLine title= "Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono-server"><RiGitBranchLine title= "Server Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://phono-3a490.web.app/"><RiExternalLinkLine title= "Live Demo" className="icon-hover" /></a>
                    </div>
                     </div>
                 </div>

                    <div className="row">
                        <div className="col-md-6 wrapper">
                        <h4 className=' wrapper-text fw-bold'>Technology Used</h4>                      
            <div className='row'>
                                    <div className='col-md-6 text-light-slate front-end bg-skill-back p-3 rounded'>
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
                                    <div className="col-md-6 text-light-slate back-end bg-skill-back shadow rounded p-3">
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
                        <div className="col-md-6 bg-skill-back wrapper">
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

                <div className='my-5 text-center'>
                    <div >
                <iframe className='ytb rounded' src="https://www.youtube.com/embed/1S8bNbuPJw4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                </div>

                <embed className='pjct rounded' src="https://phono-3a490.web.app/"></embed>
                
             </div>
        </div>
    );
};

export default Phono;