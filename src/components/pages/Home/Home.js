import React from 'react';
import About from '../AboutMe/About';
import BannerTop from '../Banner/BannerTop';
import Project from '../Project/Project';
import Contact from '../Home/Contact';
import ParticlesComponent from '../Share/ParticlesComponent';
import Projects from '../Project/Projects';
import Skills from '../AboutMe/Skills';
import Header from '../Share/Header';
import Footer from '../Share/Footer';


const Home = () => {
    return (
        <div id='home' style={{overflowX:"hidden"}}>
            <Header></Header>
            <ParticlesComponent></ParticlesComponent>
            <BannerTop></BannerTop>
            <About></About>
            <Skills></Skills>
            <Projects/>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;