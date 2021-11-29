import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

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
        <div className="col-sm-12 col-md-6 mx-auto">

            <form className="p-4 m-4 shadow bg-light" ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="full_name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="to_email" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="Write your valuable message"></textarea>
                </div>
                <div class="mb-3">
                    <input className="btn btn-danger" type="submit" value="Send" />
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
    );
};

export default Contact;