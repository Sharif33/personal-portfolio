import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = ({ project }) => {
    const { id, name, website, imageweb1, imageweb2, imageweb3, imageweb4, imageweb5, imageweb6 } = project;
    return (
        <div className="my-3">
            <div className="bg-light shadow">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false}>
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
                <div className="d-flex justify-content-between p-4">
                    <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href={website}><button className="btn btn-danger">Live Preview</button></a>
                    <Link to={`project/${id}`}><button className="btn btn-outline-success">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;