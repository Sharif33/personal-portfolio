import React from 'react';
import theme from '../../../images/theme.png';
import SingleProject from './SingleProject';
// import { Link } from 'react-router-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = ({ project }) => {
    const [openProject, setOpenProject] = React.useState(false);
    const handleOpen = () => setOpenProject(true);
    const handleClose = () => setOpenProject(false);
    const {name,title} = project;
    return (
        <div className="my-3">
            
            <div onClick={handleOpen} className='col p-2 text-light-slate'>
                <h5> <span className='p-2 rounded-top' > {name}</span></h5>
                <img title={title} className='img-fluid img-hover rounded' src={theme} alt="" />
                
            </div>
                
            
            {/* <div className="bg-light shadow rounded py-3" style={{ height: "100%" }}>
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
                </Carousel>
                <div className="d-flex justify-content-between p-4">
                    <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href={website}><button className="btn btn-custom-2">Live Preview</button></a>
                    <Link to={`project/${id}`}><button className="btn  btn-custom">See Details</button></Link>
                </div>
            </div> */}

                <SingleProject
                handleClose={handleClose}
                project={project}
                openProject={openProject}
                />

        </div>
    );
};

export default ProjectDetails;