import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/Sharif33/personal-portfolio/main/public/myprojects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div id='projects'style={{ overflowX: 'hidden', paddingTop: "70px" }}>
            <div className="container">
                <div className="p-2">
                <h3 className="text-center"> <span className=' rounded-pill bottom-border'>Projects</span> </h3>
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
                        projects.slice(0, 3).map(project => <ProjectDetails
                            key={project.id}
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