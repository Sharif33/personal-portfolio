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
import { HashLink } from 'react-router-hash-link';
import { RiLinkedinLine,RiGithubLine,RiFacebookLine,RiInstagramLine,RiTelegramLine,RiYoutubeLine } 
from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
const BannerTop = () => {
    return (
        <div style={{ overflowX: "hidden", paddingTop: "70px" }} className="bg-profile">
            <div className="row p-4">
                <div className="col-sm-12 col-md-4 text-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Flash>
                                <img className="img-fluid image-profile" src={profile} alt="" />
                                
                            </Flash>

                        </div>
                        <span className='border-profile'></span>
                        <Slide left>
                            <div className="p-2 bg-transparent rounded-end icons">
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://github.com/Sharif33"><RiGithubLine className="  icon-hover"/></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/sharif-rashed-623abb193/"><RiLinkedinLine className="  icon-hover"/></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.facebook.com/sharif.rashed01/"><RiFacebookLine className="  icon-hover"/></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.instagram.com/rashu_33/"><RiInstagramLine className="  icon-hover"/></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://discord.com/channels/926693183734304769/926693184279547916"><SiDiscord className="  icon-hover"/></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://t.me/Rashu33"><RiTelegramLine className="  icon-hover"/></a>
                                <a className="text-decoration-none d-block" rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCi_qzc-uH_Aei4aRd5Pr73w"><RiYoutubeLine className="  icon-hover"/></a>
                                <span className="vertical-line"></span>
                            </div>
                        </Slide>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="m-auto p-4 pt-5 text-light text-center">
                        <div>
                            <Slide right>
                                <h3 className="font-monospace text-info">Hello, I'm</h3>
                            </Slide>
                            <Slide left>
                                <h1 className="fw-bold text-light">Sharif Mohammad Rashed</h1>
                            </Slide>
                            <Rotate top left>
                                <h3 className="text-sky fw-bold"><Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></h3>
                            </Rotate>
                        </div>

                        <div className="d-flex justify-content-center align-items-center text-start  px-5 pt-3 mx-auto">
                            <div className="text-end text-sky px-3">
                                <p>Age :</p>
                                <p>Address:</p>
                                <p>Phone :</p>
                                <p>Email :</p>
                            </div>
                            <div className="text-start px-3 fw-lighter">
                                <p>23</p>
                                <p>Mirpur-12, Dhaka, Bangladesh</p>
                                <p>+880 1635-501311</p>
                                <p>md.shariful.islam2511@gmail.com</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Rotate bottom right>
                                <HashLink  className="text-decoration-none" to="/home#contact"><button className="px-5 py-2 bg-skill btn-lg border-css text-info"> Hire  Me</button></HashLink>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;