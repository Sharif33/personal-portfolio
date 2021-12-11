import React from 'react';
import profile from "../../../images/sharifAbout.jpg";
import html from "../../../images/htnl.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import react from "../../../images/react.png";
import mongodb from "../../../images/mongodb.png";
import firebase from "../../../images/firebase.png";
import bootstrap from "../../../images/bootstrap.png";
import node from "../../../images/node.png";
import express from "../../../images/express.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import chrome from "../../../images/chrome.png";
import mui from "../../../images/mui.png";
import tailwind from "../../../images/tailwind.png";
import netlify from "../../../images/netlify.png";
import vs from "../../../images/vs.png";
import heroku from "../../../images/heroku.png";

const About = () => {
    return (
        <div>
            <div style={{ paddingTop: "50px", }} className="bg-dark">
            </div>
            <div className="py-3 bg-dark">
                <div className="container">
                    <h4 className="p-2 text-warning fw-bold border-start border-5 border-danger">A B O U T  .  M E</h4>
                    <div className='indexZ text-end'>
                        <img className="img-fluid rounded-circle border p-1 border-dark img-contact" src={profile} alt="" />
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 my-3">
                        <div className=" col bg-warning">
                            <div className="px-3 rounded mt-4 pt-2">
                                <h2 className="text-light fw-bold">Hi_</h2>
                                <p className="align-custom py-2">This is Sharif Mohammad Rashed. I'm a Web Developer, specialize in front end technologies like JavaScript, React, HTML5, CSS3, Bootstrap5, etc. I have also worked with Node JS, Express JS, MongoDB, .
                                    My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to end of the project and give support for every problem.</p>
                            </div>
                        </div>
                        <div className=" col bg-light">
                            {/* <img className="img-fluid w-100 h-100 img-hide" src={profile} alt="" /> */}
                            <h5 className="my-4 px-3 text-warning fw-bold border-start border-5 border-dark">S T U D Y</h5>
                            <div>
                                <div className="d-flex text-start p-2">
                                    <div className="text-end fw-bold px-3 text-dark">
                                        <p>Degree:</p>
                                        <p>Course :</p>
                                        <p>University :</p>
                                        <p>Period :</p>
                                    </div>
                                    <div className="text-start px-3 text-dark">
                                        <p>Bachelor of Science</p>
                                        <p>CSE</p>
                                        <p>National University</p>
                                        <p>January 2018 - Present</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='="col  bg-light'>
                            <h5 className="my-4 px-3 text-warning fw-bold border-start border-5 border-dark">T R A I N I N G</h5>
                            <div>
                                <div className="d-flex w-100 text-start p-2 ">
                                    <div className="text-end fw-bold px-3 text-dark">
                                        <p>Course :</p>
                                        <p>Trainer :</p>
                                        <p>Institute :</p>
                                        <p>Period :</p>
                                    </div>
                                    <div className="text-start px-3 text-dark">
                                        <p>Web Development</p>
                                        <p>Jhankar Mahbub</p>
                                        <p>Programming Hero</p>
                                        <p>July 2021 - December 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container rounded">
                        <div className="row">
                            <h4 className="my-4 text-warning fw-bold border-start border-5 border-danger">K E Y . S K I L L S</h4>
                            <div className="col-sm-12 col-md-6  p-3 text-warning fw-bold bg-primary shadow">
                                <div>
                                    <h5>Programming Language: </h5>
                                    <img className="img-fluid  img-width" src={js} alt="" />
                                </div>
                                <div>
                                    <h5 className="">Experties : </h5>
                                    <img className="img-fluid img-width" src={html} alt="" />
                                    <img className="img-fluid img-width" src={css} alt="" />
                                    <img className="img-fluid img-width" src={react} alt="" />
                                    <img className="img-fluid img-width" src={bootstrap} alt="" />
                                    <img className="img-fluid img-width" src={firebase} alt="" />

                                </div>
                                <div>
                                    <h5 className="">Comfortable : </h5>
                                    <img className="img-fluid img-width" src={mui} alt="" />
                                    <img className="img-fluid img-width" src={tailwind} alt="" />
                                </div>
                            </div>
                            <div className="col-sm-12 bg-warning text-primary fw-bold col-md-6  p-3 shadow">
                                <div>
                                    <h5>Back-End : </h5>
                                    <img className="img-fluid  img-width" src={node} alt="" />
                                    <img className="img-fluid  img-width" src={express} alt="" />

                                </div>
                                <div>
                                    <h5>Database : </h5>
                                    <img className="img-fluid  img-width" src={mongodb} alt="" />
                                </div>
                                <div>
                                    <h5 className="">Tools : </h5>
                                    <img className="img-fluid  img-width" src={vs} alt="" />
                                    <img className="img-fluid  img-width" src={chrome} alt="" />
                                    <img className="img-fluid  img-width" src={git} alt="" />
                                    <img className="img-fluid  img-width" src={github} alt="" />
                                    <img className="img-fluid  img-width" src={netlify} alt="" />
                                    <img className="img-fluid  img-width" src={heroku} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;