import React from 'react';
import profile from "../../../images/sharifAbout.jpg";
// import { AiFillStar } from "react-icons/ai";
import { IoSchoolSharp, IoBulbSharp } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    return (
        <div>
            <div id='about' style={{ paddingTop: "70px", overflowX:'hidden' }}></div>
            <div className="py-3">
                <div className="container">
                    <div className='text-center'>
                        <h1 className='text-back'>MY STATS</h1>
                         <h3 className=""><span className='bottom-border text-lightest-slate'>ABOUT <span className='text-info'> ME</span></span></h3>
                    </div>
                   
        <div className="row row-cols-1 row-cols-md-3 my-3">
                      
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
    date={<h2 className='text-light font-custom'>My Self</h2>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', boxShadow: '0 10px 26px 5px rgb(76 175 80 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(76 175 80 / 12%)', border:'3px solid white' }}
    icon={<img className="img-fluid rounded-circle" src={profile} alt="" />}
  >
    <h1 className="text-light fw-bold font-custom">Hi_</h1>
    <p className="align-custom">This is Sharif Mohammad Rashed. I'm a Web Developer, specialize in front-end technologies like JavaScript, React, HTML5, CSS3, Bootstrap5, Material UI etc. I have also worked with Node JS, Express JS, MongoDB, .
    My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to end of the project and give support for every problem.</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#112240', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #112240' }}
    date={<h2 className='text-light font-custom'>Study</h2>}
    iconStyle={{ background: '#112240', color: '#fff', boxShadow: '0 10px 26px 5px rgb(255 152 0 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(255 152 0 / 12%)', border:'3px solid white'}}
    icon={<IoSchoolSharp />}
  >
            <div>
                <h1 className="vertical-timeline-element-title fs-2 font-custom">Bachelor of Science </h1>
                <h4 className='fw-bold'><span className='h6'>in </span> Computer Science & Engineering</h4>
                <p className='font-custom fs-5'>National University</p>
                <p>January 2018 - Present</p>
           </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#112240', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #112240' }}
    date={<h2 className='text-light font-custom'>Training</h2>}
    iconStyle={{ background: '#112240', color: '#fff', boxShadow: '0 10px 26px 5px rgb(244 67 54 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(244 67 54 / 12%)', border:'3px solid white' }}
    icon={<IoBulbSharp />}
  >
    <div className="">
        <h1 className="vertical-timeline-element-title fs-2 font-custom">Web Development</h1>
        <h4 className='fw-bold'> <span className='h6'> course with </span> Jhankar Mahbub</h4>
        <p className='font-custom fs-5'>Programming Hero</p>
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