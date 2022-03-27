import React from "react";
import { Link } from 'react-router-dom';
import "./SingleProjects.css";
import './Projects.css';
import { RiGithubLine, RiInformationLine, RiExternalLinkLine, RiAddLine } from "react-icons/ri";
import phono from '../../../images/phono.png';
import bike from '../../../images/bikeballey.png';

const Projects = () => {

  return (
    <div id='projects'style={{ overflowX: 'hidden', paddingTop: "70px" }}>
      <div className="container">
      <div className='text-center mb-5'>
                        <h1 className='text-back'>PROJECTS</h1>
                         <h3 className=""><span className='bottom-border text-lightest-slate'>MY<span className='text-info'> WORK</span></span></h3>
                         <p className="text-info">Feature Projects</p>
                    </div>
            <div className="row p-container">
              <div className="col-md-10 mx-auto col-sm-12 p-2">
                <div className="d-md-flex justify-content-between align-items-center">
                  <div className="w-100">
                    <div className="p-img">
                  <div className="p-details"></div>
                  <div className="p-btn">
                  <Link className="text-decoration-none text-warning fs-1" to="/phono"><RiAddLine/></Link>
                  </div>
                </div>
                  </div>
                    <div>
                      <img className="img-none img-fluid shadow" src={phono} alt="" />
                    </div>

                  <div className="p-section">
                    <small className="text-sky font-monospace">Fullstack project</small>
                    <h3 className='text-lightest-slate'><span className='text-warning fw-bold'>PH</span><span className="text-danger fw-bold">|O|</span><span className="text-warning fw-bold">NO</span></h3>

                    <div className="text-light-slate rounded project-details">
                      <p>Full-Stack web application including customize admin panel as well as search and filter option with <span className="text-sky">MERN</span>. Used <span className="text-sky">Firebase</span> for login system. <span className="text-sky">Stripe</span> used for payment system and <span className="text-sky">Material UI & Bootstrap5</span> for styles.</p>
                    </div>

                    <div className="pt-3 pb-1 text-light-slate font-monospace">
                      <small><span className="mx-2 ">React</span> <span className="mx-2 ">MongoDB</span> <span className="mx-2 ">Node Js</span> <span className="mx-2 ">Firebase</span> <span className="mx-2 ">Stripe</span></small>
                    </div>

                    <div>
                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/phono"><RiGithubLine title= "Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://phono-3a490.web.app/"><RiExternalLinkLine title= "Live Demo" className="icon-hover" /></a>
                      
                      <Link className="text-lightest-slate fs-3 ms-2" to="/phono" ><RiInformationLine title= "See Deatails"  className="icon-hover"/></Link>

                    </div>
                  </div>
                </div>
              </div>

              {/* bike Valley */}

              <div className="col-md-10 mx-auto col-sm-12 p-2 my-5">
                <div className="d-md-flex justify-content-between align-items-center">
                <div>
                      <img className="img-none2 img-fluid" src={bike} alt="" />
                  </div>
                  <div className="p-section2">
                    <small className="text-sky font-monospace">MERN Stack project</small>
                    <h3 className='text-lightest-slate'><span className="text-warning fs-4">Bike</span> <span>Valley</span></h3>

                    <div className="text-light-slate rounded project-details2">
                      <p>MERN-Stack web application including customize admin panel. Used <span className="text-sky">MongoDB</span> for databse and <span className="text-sky">Node Js & Express Js</span> for backend. <span className="text-sky">Firebase</span> used for login system and <span className="text-sky">Material UI & Bootstrap5</span> for styles.</p>
                    </div>

                    <div className="pt-3 pb-1 text-light-slate font-monospace">
                      <small><span className="mx-2 ">React</span> <span className="mx-2 ">MongoDB</span> <span className="mx-2 ">Node Js</span> <span className="mx-2 ">Firebase</span> <span className="mx-2 ">MUI</span></small>
                    </div>
                    <div>
                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/BikeValley"><RiGithubLine title= "Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://bike-valley-sharif33.web.app"><RiExternalLinkLine title= "Live Demo" className="icon-hover" /></a>
                      
                      <Link className="text-lightest-slate fs-3 ms-2" to="/bike" ><RiInformationLine title= "See Deatails"  className="icon-hover"/></Link>

                    </div>
                  </div>
                 
                  <div className="w-100">
                    <div className="p-img2">
                  <div className="p-details"></div>
                  <div className="p-btn2">
                  <Link className="text-decoration-none text-warning fs-1" to="/phono"><RiAddLine/></Link>
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

export default Projects;
