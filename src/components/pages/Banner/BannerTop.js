// Strict
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./Banner.css";
import profile from "../../../images/profile.jpg";
import Typewriter from 'typewriter-effect';
import Flash from 'react-reveal/Flash';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { RiLinkedinLine,RiGithubLine,RiFacebookLine,RiInstagramLine,RiTelegramLine,RiYoutubeLine } 
from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import '../AboutMe/Skill.css';


const BannerTop = () => {
    const form = useRef();
    const [result, setResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hai3fav", "template_i0qbwwg", form.current, "user_CH51wyaFOv59MWQ35F8y0"
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true);
    };
    setTimeout(() => {
        setResult(false)
    }, 5000);
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
                <div className="col-sm-12 col-md-8 ">
                    <div className="p-4 pt-5 margin-right">
                        <div>
                            <Slide right>
                                <h6 className="font-monospace text-info">Hello, my name is</h6>
                            </Slide>
                            <Slide left>
                                <h1 className="my-name fw-bold text-lightest-slate">Sharif M Rashed</h1>
                            </Slide>
                            <Rotate top left>
                                <h2 className="text-lightest-slate fw-bold font-custom"><Typewriter
                                    options={{
                                        strings: ['Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /></h2>
                            </Rotate>
                        </div>

                        <div>
                            <h1 className='text-slate my-bio fw-bold'>
                            I build Web App & developed Website for the clients.
                            </h1>
                        </div>

                        

                        <div className="mt-4">
                            <Rotate bottom right>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="px-5 py-2 bg-skill btn-lg border-css text-info my-btn "> Hire  Me</button></Rotate>
                            {/* modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content bg-modal">
                                    
                                <div className="modal-body">
                                    <div className='text-end'>
                                        <button className="btn btn-close bg-light shadow-blue" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    
                                    {/* form */}
                                <div className="mx-auto  text-light-slate font-custom">
                        <form className="p-4 " ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control border-css bg-transparent text-light" id="exampleFormControlInput1" placeholder="Enter your name" name="full_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email<span className='text-danger'>*</span></label>
                                <input type="email" className="form-control border-css bg-transparent text-light" id="exampleFormControlInput1" placeholder="xyz@example.com" name="to_email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message<span className='text-danger'>*</span></label>
                                <textarea className="form-control border-css bg-transparent text-light" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Write your valuable message..." required></textarea>
                            </div>
                            <div className="mb-3 text-end">
                                    <input className="border-css my-btn bg-skill shadow text-sky py-2 rounded px-5" type="submit" value="Send" />
                                </div>
                        </form>
                        <div>
                            {
                                result ? <div className="alert alert-success" role="alert">
                                    Your message has been successfully sent. I will contact you soon. Thank You.
                                </div> : null
                            }
                        </div>
                    </div>
                                </div>
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

export default BannerTop;