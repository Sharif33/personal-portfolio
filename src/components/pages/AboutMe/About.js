import React from 'react';
import profile from "../../../images/sharifAbout.jpg";
import { AiFillStar } from "react-icons/ai";
import { IoSchoolSharp, IoBulbSharp } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    return (
        <div>
            <div id='about' style={{ paddingTop: "70px", overflowX:'hidden' }}>
            </div>
            <div className="py-3">
                <div className="container">
                    <h3 className="text-center"><span className='bottom-border rounded-pill'>About Me</span></h3>
                    {/* <div className='indexZ text-end'>
                        <img className="img-fluid rounded-circle border p-1 border-dark img-contact" src={profile} alt="" />
                    </div> */}
                    <div className="row row-cols-1 row-cols-md-3 my-3">
                        {/* <div className=" col bg-warning">
                            <div className="px-3 rounded mt-4 pt-2">
                                <h2 className="text-light fw-bold">Hi_</h2>
                                <p className="align-custom py-2">This is Sharif Mohammad Rashed. I'm a Web Developer, specialize in front end technologies like JavaScript, React, HTML5, CSS3, Bootstrap5, etc. I have also worked with Node JS, Express JS, MongoDB, .
                                    My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to end of the project and give support for every problem.</p>
                            </div>
                        </div> */}
                        <div className=" col bg-light">
                            {/* <img className="img-fluid w-100 h-100 img-hide" src={profile} alt="" /> */}
                            {/* <h5 className="my-4 px-3 text-warning fw-bold border-start border-5 border-dark">S T U D Y</h5> */}
                            {/* <div>
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
                            </div> */}
                        </div>
                        {/* <div className='="col  bg-light'>
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
                        </div> */}
{/* linear-gradient(45deg,#f11504,#e8508f) - red
linear-gradient(45deg,#0288d1,#26c6da) - sky
linear-gradient(45deg,#ec0554,#f7538a) - pink
linear-gradient(45deg,#6200ea,#1976d2e0) - blue 
linear-gradient(45deg, #303f9f,#7b1fa2) - violet*/}
                    </div>

<div>
<VerticalTimeline  >
                            
  <VerticalTimelineElement
  lineColor={ '#64ffda' }
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#112240', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #112240' }}
    date={<h2 className='text-light'>My Self</h2>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: '0 10px 26px 5px rgb(76 175 80 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(76 175 80 / 12%)', border:'3px solid white' }}
    icon={<img className="img-fluid rounded-circle" src={profile} alt="" />}
  >
    <h1 className="text-light fw-bold">Hi_</h1>
    <p className="align-custom">This is Sharif Mohammad Rashed. I'm a Web Developer, specialize in front-end technologies like JavaScript, React, HTML5, CSS3, Bootstrap5, Material UI etc. I have also worked with Node JS, Express JS, MongoDB, .
    My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to end of the project and give support for every problem.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#112240', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #112240' }}
    date={<h2 className='text-light'>Study</h2>}
    iconStyle={{ background: '#112240', color: '#fff', boxShadow: '0 10px 26px 5px rgb(255 152 0 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(255 152 0 / 12%)', border:'3px solid white'}}
    icon={<IoSchoolSharp />}
  >
            <div>
                <h1 className="vertical-timeline-element-title fs-2">Bachelor of Science </h1>
                <h4 className='fw-bold'><span className='h6'>in </span> Computer Science & Engineering</h4>
                <p>National University</p>
                <p>January 2018 - Present</p>
           </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#112240', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #112240' }}
    date={<h2 className='text-light'>Training</h2>}
    iconStyle={{ background: '#112240', color: '#fff', boxShadow: '0 10px 26px 5px rgb(244 67 54 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(244 67 54 / 12%)', border:'3px solid white' }}
    icon={<IoBulbSharp />}
  >
    <div className="">
        <h1 className="vertical-timeline-element-title fs-2">Web Development</h1>
        <h4 className='fw-bold'> <span className='h6'> course with </span> Jhankar Mahbub</h4>
        <p>Programming Hero</p>
        <p>July 2021 - December 2021</p>
    </div>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<AiFillStar />}
  /> */}
</VerticalTimeline>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;