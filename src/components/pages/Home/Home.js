import React from 'react';
import About from '../AboutMe/About';
import BannerTop from '../Banner/BannerTop';
import Project from '../Project/Project';
import Contact from '../Home/Contact';
import ParticlesComponent from '../Share/ParticlesComponent';
import Projects from '../Project/Projects';
import Skills from '../AboutMe/Skills';


const Home = () => {
    return (
        <div id='home' style={{overflowX:"hidden"}}>
            {/* <ParticlesComponent></ParticlesComponent> */}
            <BannerTop></BannerTop>
            <About></About>
            <Skills></Skills>
            <Project></Project>
            <Projects/>
            <Contact></Contact>
        </div>
    );
};

export default Home;