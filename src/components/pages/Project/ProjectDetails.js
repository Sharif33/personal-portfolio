import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = ({ project }) => {
    const { id, name, imageweb1, imageweb2, imageweb3, imageweb4, imageweb5, imageweb6 } = project;
    return (
        <div>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={imageweb1} alt="" />
                    <div className="legend">
                        <h4>{name}</h4>

                    </div>
                </div>
                <div>
                    <img src={imageweb2} alt="" />
                    <div className="legend">
                        <h4>{name}</h4>

                    </div>
                </div>
                <div>
                    <img src={imageweb3} alt="" />
                    <div className="legend">
                        <h4>{name}</h4>

                    </div>
                </div>
                <div>
                    <img src={imageweb4} alt="" />
                    <div className="legend">
                        <h4>{name}</h4>

                    </div>
                </div>
                <div>
                    <img src={imageweb5} alt="" />
                    <div className="legend">
                        <h4>{name}</h4>

                    </div>
                </div>
                <div>
                    <img src={imageweb6} alt="" />
                    <div className="legend">
                        <h4>{name}</h4>

                    </div>
                </div>
            </Carousel>

            <div className="d-flex justify-content-between">
                <Link to={`projrct/${id}`}><button className="btn btn-outline-success">See Details</button></Link>
                <Link to={`projrct/${id}`}><button className="btn btn-outline-success">See Details</button></Link>
            </div>
        </div>
    );
};

export default ProjectDetails;