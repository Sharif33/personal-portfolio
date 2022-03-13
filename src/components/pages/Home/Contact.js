import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import sharif from '../../../images/sharif-pHero.jpg';
import { Link } from 'react-router-dom';
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import Typewriter from 'typewriter-effect';
import 'react-vertical-timeline-component/style.min.css';
import { IoLocation } from "react-icons/io5";
import { AiOutlineMail,AiTwotonePhone } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
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
        <div id='contact' style={{ overflowX: "hidden", paddingTop: "80px" }}>
            <div className="container">
            <h4 className="text-center  mb-5"> <span className='shadow-purple rounded-pill btn-custom'>Get In Touch</span> </h4>
                {/* <div className="text-center mx-auto my-auto p-3 indexZ">
                    <div>
                        <h3 className="text-info"><Typewriter
                            options={{
                                strings: ['Hello, I am...', 'Sharif Mohammad Rashed', 'I am a...', 'Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h3>
                        <img className="img-fluid rounded-circle border p-1 border-dark img-contact" src={sharif} alt="" />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-sm-12 mx-auto col-md-6 p-4">
                        {/* <div className="text-center mt-5 p-4">
                            <div className="d-flex justify-content-center align-items-center text-start px-5 pt-3 mx-auto">
                                <div className="text-end px-3 text-dark">
                                    <p>Address:</p>
                                    <p>Phone :</p>
                                    <p>Email :</p>
                                </div>
                                <div className="text-start px-3 text-light">
                                    <p>Mirpur-12, Dhaka, Bangladesh</p>
                                    <p>+880 1635-501311</p>
                                    <p>md.shariful.islam2511@gmail.com</p>
                                </div>
                            </div>
                            <div className="d-block pt-3 text-center">
                                <Link className="text-decoration-none" to="/contact"><button className="btn btn-dark  my-2"><i className="fas fa-user-plus"></i> H i r e  M e</button></Link>
                                <a className="text-decoration-none" href={resume} download={resume}> <button className="btn btn-light my-2"><i className="fas fa-download"></i>  R E S U M E</button></a>
                            </div>
                        </div> */}
                    <div className='d-flex  align-items-center text-warning'>
                        <div className='fs-1'>
                            <AiOutlineMail/>
                        </div>
                        <div>
                        <a className="text-decoration-none text-light mx-1 nav-link fw-lighter" href="mailto:md.shariful.islam2511@gmail.com">md.shariful.islam2511@gmail.com</a>
                        </div>
                    </div>
                    <span className="vertical-line-contact"></span>
                    <div className='d-flex align-items-center'>
                        <div className='fs-1 rounded-circle'>
                            <FcCellPhone/>
                        </div>
                        <div>
                        <a className="text-decoration-none text-light fw-lighter mx-1 nav-link" href="tel:+8801635501311">+880 1635-501311</a>
                        </div>
                    </div>
                    <span className="vertical-line-contact"></span>
                    <div className='d-flex align-items-center'>
                        <div style={{color:'#7b1fa2'}} className='fs-1'>
                            <HiLocationMarker/>
                        </div>
                        <div>
                        <p className="text-secondary text-light fw-lighter mx-1 nav-link">Pallabi, Mirpur, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    
                    <iframe className='w-100 px-2 rounded' title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9014983311095!2d90.35699666490606!3d23.822101484554207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b96515cd1%3A0x1d3ec1947521d0e0!2sPallabi%20Extension%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1646801729099!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy"></iframe>

                    </div>

                    <div className="col-sm-12 col-md-6 mx-auto  text-sky">
                        <form className="p-4 " ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control border-react bg-skill" id="exampleFormControlInput1" placeholder="Enter your name" name="full_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email<span className='text-danger'>*</span></label>
                                <input type="email" className="form-control border-react bg-skill" id="exampleFormControlInput1" placeholder="Enter your email" name="to_email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message<span className='text-danger'>*</span></label>
                                <textarea className="form-control border-react bg-skill" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Write your valuable message..." required></textarea>
                            </div>
                            <div className="mb-3">
                                <input className="border-css bg-skill shadow text-sky py-2 rounded px-5" type="submit" value="Send" />
                            </div>
                            {/* <label>Name</label>
                <input type="text" name="full_name" />
                <label>Email</label>
                <input type="email" name="to_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" /> */}
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
    );
};

export default Contact;