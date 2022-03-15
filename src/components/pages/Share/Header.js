import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Header.css';
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";
import logo from "../../../images/rashed-logo.png";

const Header = () => {

    return (
        <div className="header">
            <div className="header-inner">
                <nav className="navbar fixed-top bg-skill navbar-expand-lg navbar-dark me-auto">
                    <div className="container-fluid px-4">
                        <NavHashLink className="navbar-brand" to="/#home">
      <img className='my-logo' src={logo} alt="" width="50" height="45"/>
    </NavHashLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto">
                                {/* <li className="nav-item">
                                    <a className="text-decoration-none text-light mx-1 nav-link" href="tel:+880-01635-501311"><span><i className="fas fa-phone-alt text-info"> :  </i></span> +880 1635-501311</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="text-decoration-none text-sky mx-1 font-monospace" href="mailto:md.shariful.islam2511@gmail.com">md.shariful.islam2511@gmail.com</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto font-monospace text-light-slate">
                                <li className="nav-item">
                                    <NavHashLink  className="nav-link active mx-1  " aria-current="page" to="/home#home">Home</NavHashLink>
                                </li> 
                                <li className="nav-item">
                                    <NavHashLink  className="nav-link active mx-1  " to="/home#about">About</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink smooth  className="nav-link active mx-1  " to="/home#contact">Contact</NavHashLink>
                                    {/* style={({ isActive }) => ({ color: isActive ? '#64ffda' : 'white' }) */}
                                </li>                               
                                <li className="nav-item">
                                    <NavHashLink  className="nav-link active mx-1" to="/home#projects">Projects</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <NavHashLink  className="nav-link active mx-1  " to="/home#blogs">Blogs</NavHashLink>
                                </li>
                                <li className="nav-item">
                                    <a className="text-decoration-none" href={resume} download={resume}> <button className="my-btn px-4 py-1 bg-skill rounded border-css text-info">Resume</button></a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

// style.={({ isActive }) => ({ color: isActive ? '#64ffda' : 'white' })}
export default Header;