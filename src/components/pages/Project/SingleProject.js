import { RiGithubLine, RiGitBranchLine, RiExternalLinkLine,RiCloseLine } from "react-icons/ri";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import GitHubButton from 'react-github-btn';

/* const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height:500,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
}; */

const SingleProject = ({ project, openProject, handleClose }) => {

  // useEffect(() => {
       
  //   const script = document.createElement('script');
  //   script.src = 'https://buttons.github.io/buttons.js';
  //   script.async = true;
  //   script.defer = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>

      <Modal
        open={openProject}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <div className="projectModal rounded">
            <div className="row">
              <div className="col-md-6 m-auto">
                <embed className='modalWeb rounded' src={project?.web}></embed>
              </div>
              <div className="col-md-6 m-auto text-dark">
              <div className="modalPsection">
                <div className="d-flex justify-content-between">
                  <div>                          
                    <GitHubButton href={project?.gitC} data-icon="octicon-star" data-show-count="true" aria-label={project?.gitStar}>Star</GitHubButton>
                  </div>
                  <div> 
                    <small className="text-sky font-monospace">{project?.title}</small>
                    <h3 className='text-lightest-slate'>{project?.name}</h3>
                  </div>
                </div>
                   
                    <div className="text-lightest-slate bg-skill rounded modalPdetails">
                      <p>{project?.shortDesc}</p>
                    </div>

                    <div className="mt-3 modalTech text-light-slate font-monospace">
                      <small>{project?.tech}</small>
                    </div>

                    <div className="mt-2 d-flex align-items-center justify-content-md-between"> 
                     <div>
                    <button onClick={handleClose} className="btn text-sky my-btn close-btn-2"> <RiCloseLine className="fs-2"/> close </button>
            </div>  

            <div>
               <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href={project?.gitC}><RiGithubLine title= "Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href={project?.gitS}><RiGitBranchLine title= "Server Source Code" className="icon-hover" /></a>

                      <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href={project?.web}><RiExternalLinkLine title= "Live Demo" className="icon-hover" /></a>

            </div>
                     
                     
                      
                    </div> 
                    
                  </div>
                 
              </div>
              <div style={{marginTop:"-20px"}} className="text-end close-btn">
                    <button onClick={handleClose} className="btn bg-skill-back btn-lg text-sky my-btn rounded-pill"> <RiCloseLine className="fs-2"/> </button>
            </div>  
            </div>
        </div>
      
      </Modal>

     
    </>
  );
};

export default SingleProject;
