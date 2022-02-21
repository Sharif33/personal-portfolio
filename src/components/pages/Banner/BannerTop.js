// Strict
import React from 'react';
import "./Banner.css";
import profile from "../../../images/profile.jpg";
// import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import Typewriter from 'typewriter-effect';
import Flash from 'react-reveal/Flash';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';

const BannerTop = () => {
    return (
        <div style={{ overflowX: "hidden", paddingTop: "70px" }} className="bg-profile">
            <div className="row p-4">
                <div className="col-sm-12 col-md-4 text-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Flash>
                                <img className="img-fluid rounded image-profile shadow" src={profile} alt="" />
                            </Flash>

                        </div>
                        <Slide left>
                            <div className="p-2 bg-dark rounded-end">
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://github.com/Sharif33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-github"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sharif-rashed-623abb193/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-linkedin"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.facebook.com/sharif.rashed01/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-facebook"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.instagram.com/rashu_33/"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-instagram"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://discord.com/channels/926693183734304769/926693184279547916"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-discord"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://t.me/Rashu33"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-telegram"></i></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCi_qzc-uH_Aei4aRd5Pr73w"><i className="px-2 fs-4 my-2 icon-hover text-light fab fa-youtube"></i></a>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="m-auto p-4 pt-5 text-light text-center">
                        <div>
                            <Slide right>
                                <h3 className="font-monospace">Hello, I'm</h3>
                            </Slide>
                            <Slide left>
                                <h1 className="fw-bold">Sharif Mohammad Rashed</h1>
                            </Slide>
                            <Rotate top left>
                                <h3 className="text-warning"><Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></h3>
                            </Rotate>
                        </div>

                        <div className="d-flex justify-content-center align-items-center text-start fw-light px-5 pt-3 mx-auto">
                            <div className="text-end text-dark fw-bold px-3">
                                <p>Age :</p>
                                <p>Address:</p>
                                <p>Phone :</p>
                                <p>Email :</p>
                            </div>
                            <div className="text-start px-3">
                                <p>23</p>
                                <p>Mirpur-12, Dhaka, Bangladesh</p>
                                <p>+880 1635-501311</p>
                                <p>md.shariful.islam2511@gmail.com</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Rotate bottom right>
                                <Link className="text-decoration-none" to="/contact"><button className="btn btn-outline-warning fw-bold px-4 py-2"> H i r e  M e  <i className="fas fa-user-plus"> </i></button></Link>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;