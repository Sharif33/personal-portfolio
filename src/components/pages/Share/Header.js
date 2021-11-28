import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    // const activeStyle = {
    //     color: "black",
    //     backgroundColor: "white",
    //     transition: ".5s ease-in",
    //     borderBottom: "1px solid red",
    // };

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#223A5E" }}>
                    <div className="container">
                        <NavLink className="navbar-brand fw-bold fs-2" to="/home">Sharif Rashed</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} className="nav-link active mx-1 fs-5 " aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} className="nav-link active mx-1 fs-5 " to="/contact">Contact Me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} className="nav-link active mx-1 fs-5 " to="/about">About Me</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })} className="nav-link active mx-1 fs-5 " to="/projects">Projects</NavLink>
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