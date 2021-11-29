import React from 'react';
import "./Banner.css";
import profile from "../../../images/profile.jpg";
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import Typewriter from 'typewriter-effect';

const BannerTop = () => {
    return (
        <div style={{ overflowX: "hidden" }} className="bg-profile">
            <div className="row p-4">
                <div className="col-sm-12 col-md-4">
                    <img className="img-fluid rounded shadow" src={profile} alt="" />
                </div>
                <div className="col-sm-12 col-md-8">
                    <div className="m-auto p-4 pt-5 text-light text-center">
                        <h3>Hello, I'm</h3>
                        <h1>Sharif Mohammad Rashed</h1>
                        <h3 className="text-warning"><Typewriter
                            options={{
                                strings: ['Web Developer', 'Frontend Developer', 'MERN Stack Developer', 'React Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h3>
                        <a href={resume} download={resume}> <button className="btn btn-danger rounded-pill my-2 fw-bold px-4">RESUME</button></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;