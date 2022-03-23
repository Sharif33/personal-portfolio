import React from 'react';
// import profile from "../../../images/sharifAbout.jpg";
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
// import { AiFillStar } from "react-icons/ai";
import { IoSchoolSharp, IoBulbSharp } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HashLink } from 'react-router-hash-link';

const About = () => {
    return (
        <div>
            <div id='about' style={{ paddingTop: "70px", overflowX:'hidden' }}></div>
            <div className="py-3">
                <div className="container">
                    <div className='text-center mb-5'>
                        <h1 className='text-back'>MY STATS</h1>
                         <h3 className=""><span className='bottom-border text-lightest-slate'>ABOUT <span className='text-info'> ME</span></span></h3>
                    </div>
                   
        

    <div className="row my-4">
      <div className="col-md-5 font-custom m-auto">
        <h2 className='text-light font-custom fw-bold my-3'>Hi_</h2>
        <p className="align-custom text-lightest-slate">This is Sharif Mohammad Rashed. I am a <span className="text-sky"> Web Developer </span>, specialize in <span className="text-sky">Front-end</span> technologies like <span className="text-sky">JavaScript, React, HTML5, CSS3, Bootstrap5, Material UI</span> etc . I have also worked with <span className="text-sky">Backend</span> technologies like  <span className="text-sky"> Node JS, Express JS, MongoDB & Firebase</span> etc . <br /> <br /> I've always been someone who has both a creative and a logical side. I specialize in creating sites for <span className="text-sky"> individuals and small businesses</span> . My goal is to satisfy clients, try to understand what they want for their website, help them from beginning to the end of the project, and support them every time. <br /> <br />
        Take a look at my <span><HashLink className="text-decoration-none text-info" to="/home#projects">portfolio</HashLink> </span>  below, if you think I'd be a good match for you <span><HashLink className="text-decoration-none text-info" to="/home#contact">send me an email</HashLink> </span> .
        </p>

        <a className="text-decoration-none mb-5" href={resume} download={resume}> <button className="my-btn px-4 py-1 bg-skill rounded-pill border-css text-sky my-3">Download Resume</button></a>

    </div>

    {/* Timeline */}

      <div className="col-md-6 mx-auto">

          <VerticalTimeline layout={ '1-column-left' }  >                          
            
            <VerticalTimelineElement
              className=""
              contentStyle={{ background: '#112240', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #112240' }}
              date={<h2 className='text-light font-custom'>Study</h2>}
              iconStyle={{ background: '#112240', color: '#fff', boxShadow: '0 10px 26px 5px rgb(255 152 0 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(255 152 0 / 12%)', border:'3px solid white'}}
              icon={<IoSchoolSharp />}
            >
                      <div>
                          <h4 className="font-custom">Bachelor of Science </h4>
                          <h5 className='fw-bold'><span className='h6'>in </span> Computer Science & Engineering</h5>
                          <p className='font-custom'>National University</p>
                          <p>January 2018 - Present</p>
                    </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className=""
              contentStyle={{ background: '#112240', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #112240' }}
              date={<h2 className='text-light font-custom'>Training</h2>}
              iconStyle={{ background: '#112240', color: '#fff', boxShadow: '0 10px 26px 5px rgb(244 67 54 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(244 67 54 / 12%)', border:'3px solid white' }}
              icon={<IoBulbSharp />}
            >
              <div>
                  <h4 className="font-custom">Web Development</h4>
                  <h5 className='fw-bold'> <span className='h6'> course with </span> Jhankar Mahbub</h5>
                  <p className='font-custom'>Programming Hero</p>
                  <p>July 2021 - December 2021</p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
          
                <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;