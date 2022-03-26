import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineMail} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import '../Banner/Banner.css';
import '../AboutMe/Skill.css';
import { HashLink } from 'react-router-hash-link';


const Contact = () => {
    
    // Emailjs form
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
            <div className='text-center'>
                        <h1 className='text-back'>GET IN TOUCH</h1>
                         <h3 style={{marginLeft:'-25px'}} className=""><span className='bottom-border text-lightest-slate'>CONTACT<span className='text-info'> ME</span></span></h3>
                    </div>
                <div className="row">
                    <div className="col-sm-12 mx-auto col-md-4 p-4">
                        <div style={{height:'9.5em'}} className='text-center py-3 bg-skill-back rounded font-custom'>
                                <AiOutlineMail className='fs-1 text-purple rounded-circle bg-light p-1 custom-border'/>
                                <p className='text-sky py-2'>Email</p>
                                <a className="text-decoration-none text-lightest-slate" href="mailto:md.shariful.islam2511@gmail.com">md.shariful.islam2511@gmail.com</a>
                        </div>
                    </div>
                    
                    <div className='col-sm-12 mx-auto col-md-4 p-4'>
                         <div style={{height:'9.5em'}} className='bg-skill-back text-center py-3 rounded font-custom'>
                            <HiLocationMarker className='text-purple fs-1 rounded-circle bg-light p-1 custom-border'/>
                            <p className='text-sky py-2'>Address</p>
                            <p className="text-lightest-slate">Pallabi, Mirpur, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                   
                   <div className='col-sm-12 mx-auto col-md-4 p-4 font-monospace'>
                       <iframe  style={{height:'9.5em'}} className='w-100 rounded' title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9014983311095!2d90.35699666490606!3d23.822101484554207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c13b96515cd1%3A0x1d3ec1947521d0e0!2sPallabi%20Extension%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1646801729099!5m2!1sen!2sbd"  allowFullScreen="" loading="lazy"></iframe>
                    </div> 

                    <div className='my-5 row mx-auto'>
                        {/* <div className='font-custom text-center text-light pb-2 '>
                            <small ><span className="border-bottom border-info fst-italic">Follow Me On Social Media</span></small>
                        </div> */}
                    
                    <div className="col-sm-12 col-md-8 mx-auto">
                        <div>
                            <h6 className='text-lightest-slate text-center font-custom mb-3'> <span className='fs-1 fw-bold lh-lg text-slate'>Any Suggestion for me?</span> <br /> <small className='text-sky'>or</small> Have an exciting project where you need some help? <br /> Send me over a message, and let's chat.</h6>
                        </div>
                        <form className="p-4 text-lightest-slate font-custom" ref={form} onSubmit={sendEmail}>            
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Your Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control  bg-skill-back border-0  text-light p-2" id="exampleFormControlInput1" placeholder="Enter your name" name="full_name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email<span className='text-danger'>*</span></label>
                                <input type="email" className="form-control  bg-skill-back border-0  text-light p-2" id="exampleFormControlInput1" placeholder="Enter your email" name="to_email" required />
                            </div>
                                
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message<span className='text-danger'>*</span></label>
                                <textarea style={{height:'10em'}}  className="form-control  bg-skill-back border-0  text-light" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Write your valuable message..." required>
                                </textarea>
                            </div>
                            
                            <div className="mb-3 text-end p-2">
                                <button className="px-5 py-2 bg-skill-back btn-lg border-0 text-info my-btn" type="submit" value="Send">Send </button>
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
    );
};

export default Contact;