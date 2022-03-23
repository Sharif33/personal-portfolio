import React from 'react';
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
import figma from "../../../images/figma.png";
import stripe from "../../../images/stripe.png";
import reactBp from "../../../images/reactBootstrap.png";
import github from "../../../images/github.png";
import chrome from "../../../images/chrome.png";
import mui from "../../../images/mui.png";
import tailwind from "../../../images/tailwind.png";
import netlify from "../../../images/netlify.png";
import vs from "../../../images/vs.png";
import heroku from "../../../images/heroku.png";
import ProgressBar from "@ramonak/react-progress-bar";
import './Skill.css';

const Skills = () => {
    return (
        <div>
            <div className="container my-5">
            <div className='my-5'>
                        {/* <h2 className='text-back'>OVERVIEW</h2> */}
                         <h3 style={{fontSize:"30px"}} className="text-center fw-bold font-custom"><span className='text-lightest-slate'>MY <span className='text-info'>SKILLS</span></span></h3>
                    </div>
                <div className="row row-cols-1 row-cols-md-4 g-2">
                    <div className="col text-center skill px-2 my-2">
                        <img className='img-fluid rounded-circle border skill-margin' src={js} alt="" />

                        <div className='bg-skill-back rounded pt-5'>
                           <div className='p-3'>
                            <div className='d-flex justify-content-center border-js  align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={js} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#F4E11E'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={50} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-react align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={react} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#06B0DB'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-js  align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={firebase} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#F4E11E'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button> 
                            </div>
                        </div> 
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-mui  align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={mui} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#DBDBDB'} baseBgColor={'gray'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={70} maxCompleted={100} />
                                </button> 
                            </div>
                        </div> 
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-react align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={reactBp} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#06B0DB'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col text-center skill px-2 my-2">
                        <img className='img-fluid rounded-circle border skill-margin-css' src={css} alt="" />

                        <div className='bg-skill-back rounded pt-5'>
                           <div className='p-3'>
                            <div className='d-flex justify-content-center border-css  align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={css} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'white'} bgColor={'#1976d2e0'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={75} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-html align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={html} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'white'} bgColor={'#E44D26'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center custom-border align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={bootstrap} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div> 
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-react align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={tailwind} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar  bgColor={'#06B0DB'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={70} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div> 
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-html align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={figma} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'white'} bgColor={'#E44D26'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col text-center skill px-2 my-2">
                        <img className='img-fluid rounded-circle border skill-margin-node' src={node} alt="" />

                        <div className='bg-skill-back rounded pt-5'>
                           <div className='p-3'>
                            <div className='d-flex justify-content-center border-node  align-item-center text-center bg-skill-2'>
                                <img className='img-fluid img-width' src={node} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'white'} bgColor={'#03d068'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={70} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-mui align-item-center text-center bg-skill-2'>
                                <img className='img-fluid img-width' src={express} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar bgColor={'grey'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-node align-item-center text-center bg-skill-2'>
                                <img className='img-fluid img-width' src={mongodb} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar bgColor={'#03d068'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div> 
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-css align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={stripe} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#1976d2e0'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-js align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={chrome} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#F4E11E'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div> 
                        </div>
                        
                    </div>
                    <div className="col text-center skill px-2 my-2">
                        <img className='img-fluid rounded-circle border skill-margin-heroku' src={heroku} alt="" />

                        <div className='bg-skill-back rounded pt-5'>
                           <div className='p-3'>
                            <div className='d-flex justify-content-center custom-border  align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={heroku} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar animateOnRender={true} height={'12px'} labelSize={'10px'} completed={75} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-react align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={netlify} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar bgColor={'#06B0DB'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-mui align-item-center text-center bg-skill-2'>
                                <img className='img-fluid img-width' src={github} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'black'} bgColor={'#DBDBDB'} baseBgColor={'gray'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div> 
                        <div className='p-3'>
                            <div className='d-flex justify-content-center border-html align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={git} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar labelColor={'white'} bgColor={'#E44D26'} animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center custom-border align-item-center text-center bg-skill'>
                                <img className='img-fluid img-width' src={vs} alt="" />
                                <button className='btn w-75'>
                                    <ProgressBar animateOnRender={true} height={'12px'} labelSize={'10px'} completed={80} maxCompleted={100} />
                                </button>
                                
                            </div>
                        </div> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;