import React from 'react';
import About from '../AboutMe/About';
import BannerTop from '../Banner/BannerTop';
import Project from '../Project/Project';


const Home = () => {
    return (
        <div>
            <BannerTop></BannerTop>
            <About></About>
            <Project></Project>
        </div>
    );
};

export default Home;