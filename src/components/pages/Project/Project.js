import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div id='projects'style={{ overflowX: 'hidden', paddingTop: "70px" }}>
            <div className="container">
                <div className="p-2">
                <div className='text-center'>
                        <h1 className='text-back'>PROJECTS</h1>
                         <h3 className=""><span className='bottom-border text-lightest-slate'>MY<span className='text-info'> WORK</span></span></h3>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                    {projects.length == 0 ?
                        <div className="d-flex justify-content-center fs-1">
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                        :
                        projects.map(project => <ProjectDetails
                            key={project._id}
                            project={project}
                        >
                        </ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;