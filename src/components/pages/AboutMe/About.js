import React from 'react';
import { Link } from 'react-router-dom';
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import profile from "../../../images/profile.jpg";
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
            <div style={{ paddingTop: "70px", backgroundColor: '#EEECEB' }} className="">

            </div>
            <div style={{ backgroundColor: '#EEECEB' }} className=
                "py-3  ">
                <div className="container">
                    <div className="p-4 my-2 bg-light rounded border-start border-5 border-warning row">
                        <div className="col-sm-12 col-md-6 p-4">
                            <h1>Hi_</h1>
                            <p className="">I am a Web Developer, specialize in front end technologies like JavaScript, React, HTML5, CSS3, Bootstrap5, etc. I have also worked with Node JS, Express JS, MongoDB, .
                                My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to end of the project and give support for every problem.</p>
                            <div className="d-inline-block">
                                <Link className="text-decoration-none" to="/contact"><button className="btn btn-outline-dark  my-2 fw-bold px-4 py-2">H I R E    M E</button></Link>
                                <a className="text-decoration-none" href={resume} download={resume}> <button className="btn btn-outline-dark  my-2 fw-bold px-4 py-2"><i className="fas fa-download"></i>  R E S U M E</button></a>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center mx-auto p-4">
                            <img className="img-fluid w-75" src={profile} alt="" />
                        </div>
                    </div>
                </div>

                <div className="container my-3 p-4 bg-dark border-end border-5 border-danger rounded">
                    <div className="row">
                        <h3 className="my-3 text-warning  border-start border-end border-5 border-danger">K E Y . S K I L L S</h3>
                        <div className="col-sm-12 col-md-6 mx-auto p-3 bg-light border-end shadow">
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
                        <div className="col-sm-12 bg-warning text-secondary col-md-6 mx-auto p-3 shadow">
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
    );
};

export default About;