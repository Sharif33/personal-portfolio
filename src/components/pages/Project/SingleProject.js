import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./SingleProjects.css";
import Slide from 'react-reveal/Slide';

const SingleProject = () => {
    const { id } = useParams();

    const [projects, setProjets] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Sharif33/personal-portfolio/main/public/myprojects.json`)
            .then(res => res.json())
            .then(data => setProjets(data))
    }, [id])

    const projectDetails = projects.find(project => project.id == id)
    return (
        <div className="bg-light" style={{ overflowX: "hidden", paddingTop: "70px" }}>
            <h2 className="text-warning p-3 text-center"><span className="text-dark">Project : </span>{projectDetails?.name}</h2>
            <div className="container">
                <div className="row py-2 bg-light my-2">
                    <div className="col-sm-12 col-md-6 p-3 bg-info">
                        <ul>
                            <h4 className="text-success"> Technology Used :</h4>
                            <li>{projectDetails?.tech}</li>
                        </ul>
                        <ul>
                            <h4 className="text-primary"> Key Features :</h4>
                            <li>{projectDetails?.feature}</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 bg-warning p-3">
                        <ul>
                            <h4 className="text-primary">About :</h4>
                            <li>{projectDetails?.details}</li>
                        </ul>
                        <div className="d-flex justify-content-between">
                            <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href={projectDetails?.github}><button className="btn btn-danger">Source Code</button></a>

                            <a className="text-decoration-none px-2" rel="noreferrer" target="_blank" href={projectDetails?.github}><button className="btn btn-danger">Server Site Code</button></a>
                        </div>
                    </div>

                </div>
                <div className="py-3 my-4">
                    <div className="row row-cols-2 row-cols-md-2 p-3 m-2">
                        <Slide left>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb1} alt="" /></div>
                        </Slide>
                        <Slide right>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb2} alt="" /></div>
                        </Slide>
                        <Slide left>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb3} alt="" /></div>
                        </Slide>
                        <Slide right>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb4} alt="" /></div>
                        </Slide>
                        <Slide left>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb5} alt="" /></div>
                        </Slide>
                        <Slide right>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb6} alt="" /></div>
                        </Slide>
                        <Slide left>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb7} alt="" /></div>
                        </Slide>
                        <Slide right>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb8} alt="" /></div>
                        </Slide>
                        <Slide left>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb9} alt="" /></div>
                        </Slide>
                        <Slide right>
                            <div className="col shadow p-4 "><img className="img-fluid  img-hover" src={projectDetails?.imageweb10} alt="" /></div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;