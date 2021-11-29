import React from 'react';
import "./Banner.css";
import profile from "../../../images/profile.jpg";
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import Typewriter from 'typewriter-effect';

const BannerTop = () => {
    return (
        <div style={{ overflowX: "hidden" }} className="bg-profile">
            <div className="row p-4">
                <div className="col-sm-12 col-md-4 text-center">
                    <img className="img-fluid rounded image-profile shadow" src={profile} alt="" />
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="m-auto p-4 pt-5 text-light text-center">
                        <div>
                            <h3>Hello, I'm</h3>
                            <h1>Sharif Mohammad Rashed</h1>
                            <h3 className="text-warning"><Typewriter
                                options={{
                                    strings: ['Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h3>
                        </div>
                        <div>
                            <a className="text-decoration-none" href={resume} download={resume}> <button className="btn btn-outline-dark  my-2 fw-bold px-4 py-2"><i className="fas fa-download"></i>  R E S U M E</button></a>
                        </div>
                        <div className="d-inline-block">
                            <a href="#"><i className="px-2 fs-4 my-2 text-light fab fa-github"></i></a>
                            <a href="#"><i className="px-2 fs-4 my-2 text-light fab fa-linkedin"></i></a>
                            <a href="#"><i className="px-2 fs-4 my-2 text-light fab fa-facebook"></i></a>
                            <a href="#"><i className="px-2 fs-4 my-2 text-light fab fa-instagram"></i></a>
                            <a href="#"><i className="px-2 fs-4 my-2 text-light fab fa-telegram"></i></a>
                            <a href="#"><i className="px-2 fs-4 my-2 text-light fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;