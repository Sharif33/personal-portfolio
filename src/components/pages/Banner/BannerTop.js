import React from 'react';
import "./Banner.css";
import profile from "../../../images/profile.jpg";
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import Typewriter from 'typewriter-effect';
import Flash from 'react-reveal/Flash';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

const BannerTop = () => {
    return (
        <div style={{ overflowX: "hidden" }} className="bg-profile">
            <div className="row p-4">
                <div className="col-sm-12 col-md-4 text-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Flash>
                                <img className="img-fluid rounded image-profile shadow" src={profile} alt="" />
                            </Flash>

                        </div>
                        <Slide left>
                            <div className="p-2 bg-dark">
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://github.com/Sharif33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-github"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sharif-rashed-623abb193/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-linkedin"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.facebook.com/sharif.rashed01/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-facebook"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.instagram.com/rashu_33/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-instagram"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://t.me/Rashu33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-telegram"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCi_qzc-uH_Aei4aRd5Pr73w"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-youtube"></i></a>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="m-auto p-4 pt-5 text-light text-center">
                        <Rotate top left>
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
                        </Rotate>

                        <div>
                            <a className="text-decoration-none" href={resume} download={resume}> <button className="btn btn-outline-primary  my-2 fw-bold px-4 py-2"><i className="fas fa-download"></i>  R E S U M E</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;