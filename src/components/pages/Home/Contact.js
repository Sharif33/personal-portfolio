import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import sharif from '../../../images/sharif-pHero.jpg';
import { Link } from 'react-router-dom';
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import Typewriter from 'typewriter-effect';

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
        <div className="bg-dark" style={{ overflowX: "hidden", paddingTop: "50px" }}>
            <div className="container">
                <h4 className="p-2 text-warning fw-bold border-start border-5 border-danger">C O N T A C T  .  M E</h4>
                <div className="text-center mx-auto my-auto p-3 indexZ">
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
                </div>
                <div className="row">
                    <div className="col-sm-12 mx-auto col-md-6 bg-warning">
                        <div className="text-center mt-5 p-4">
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
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 mx-auto bg-light">
                        <form className="p-4 mt-5 shadow" ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="full_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" name="to_email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Write your valuable message..." required></textarea>
                            </div>
                            <div className="mb-3">
                                <input className="btn btn-dark px-5" type="submit" value="Send" />
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
                                    Your message has been successfully sent. I will you contact you soon. Thank You.
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