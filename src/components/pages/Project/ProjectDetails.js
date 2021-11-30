import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ project }) => {
    const { id, name, tech, imageweb1, } = project;
    return (
        <div>
            <h2>{name}</h2>
            <p>{tech}</p>
            <div>
                <Link to={`projrct/${id}`}><button className="btn btn-outline-success w-100">See Details</button></Link>
            </div>
        </div>
    );
};

export default ProjectDetails;