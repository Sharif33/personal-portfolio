import React from 'react';
import { Link } from 'react-router-dom';
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import profile from "../../../images/profile.jpg";

const About = () => {
    return (
        <div>
            <div style={{ paddingTop: "70px", backgroundColor: '#EEECEB' }} className="">

            </div>
            <div style={{ backgroundColor: '#EEECEB' }} className=
                "py-3  ">
                <div className="container">
                    <div className="p-4 my-2 bg-light rounded border-start border-5 border-warning row">
                        <div className="col-sm-12 col-md-6 p-4">
                            <h1>Hi_</h1>
                            <p className="">I am a Web Developer, specialize in front end technologies like JavaScript, React, HTML5, CSS3, Bootstrap5, etc. I have also worked with Node JS, Express JS, MongoDB, .
                                My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to end of the project and give support for every problem. I have no experience at all but I will prove myself with my best.</p>
                            <div className="d-inline-block">
                                <Link className="text-decoration-none" to="/contact"><button className="btn btn-outline-dark  my-2 fw-bold px-4 py-2">H I R E    M E</button></Link>
                                <a className="text-decoration-none" href={resume} download={resume}> <button className="btn btn-outline-dark  my-2 fw-bold px-4 py-2"><i className="fas fa-download"></i>  R E S U M E</button></a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center mx-auto p-4">
                            <img className="img-fluid w-75" src={profile} alt="" />
                        </div>
                    </div>
                </div>

                <div className="container my-3 p-4 bg-light border-end border-5 border-danger rounded">
                    <div className="row">
                        <h3 className="my-3">KEY SKILLS_</h3>
                        <div className="col-sm-12 col-md-6 mx-auto">
                            <div>
                                <div className="p-2">
                                    <h6>HTML5</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-2">
                                    <h6>CSS3</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-2">
                                    <h6>Bootstrap5</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-2">
                                    <h6>Firebase</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mx-auto">
                            <div>
                                <div className="p-2">
                                    <h6>JavaScript(ES6)</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-2">
                                    <h6>React JS</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-2">
                                    <h6>MongoDB</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p-2">
                                    <h6>Node JS, Express JS</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;