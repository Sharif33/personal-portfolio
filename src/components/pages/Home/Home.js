import React from 'react';
import About from '../AboutMe/About';
import BannerTop from '../Banner/BannerTop';
import Project from '../Project/Project';
import Contact from '../Home/Contact';
import ParticlesComponent from '../Share/ParticlesComponent';


const Home = () => {
    return (
        <div>
            <ParticlesComponent></ParticlesComponent>
            <BannerTop></BannerTop>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;