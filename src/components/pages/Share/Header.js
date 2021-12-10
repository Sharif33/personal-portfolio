import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import resume from "../../../images/Md. Shariful Islam-Resume-2021.pdf";

const Header = () => {

    return (
        <div className="header">
            <div className="header-inner">
                <nav className="navbar navbar-expand-lg navbar-dark ms-auto">
                    <div className="container">
                        <NavLink className="navbar-brand fw-bold fs-3 text-warning" to="/home">S<span className="text-danger">|M|</span>R</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#818CF8' })} className="nav-link active mx-1  " aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#818CF8' })} className="nav-link active mx-1  " to="/contact">Contact Me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#818CF8' })} className="nav-link active mx-1  " to="/about">About Me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#818CF8' })} className="nav-link active mx-1  " to="/projects">Projects</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'orange' : '#818CF8' })} className="nav-link active mx-1  " to="/blogs">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="text-decoration-none" href={resume} download={resume}> <button className="btn btn-outline-warning px-4"><i className="fas fa-download"></i>  R E S U M E</button></a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="text-decoration-none text-info mx-1 nav-link" href="tel:+880-01635-501311"><span><i className="fas fa-phone-alt text-danger"> </i></span> +880 1635-501311</a>
                                </li>
                                <li className="nav-item">
                                    <a className="text-decoration-none text-info mx-1 nav-link" href="mailto:md.shariful.islam2511@gmail.com"><span><i className="far fa-envelope text-danger"> </i></span> md.shariful.islam2511@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;