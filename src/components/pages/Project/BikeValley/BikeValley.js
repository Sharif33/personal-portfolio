import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { RiGithubLine, RiExternalLinkLine,RiGitBranchLine } from "react-icons/ri";

const BikeValley = () => {
    const labels = {
        0.5: "Useless",
        1: "Useless+",
        1.5: "Poor",
        2: "Poor+",
        2.5: "Ok",
        3: "Ok+",
        3.5: "Good",
        4: "Good+",
        4.5: "Excellent",
        5: "Excellent+",
      };
      const [value, setValue] = React.useState(1);
      const [hover, setHover] = React.useState(-1);
      const { register, handleSubmit, reset } = useForm();

      const onSubmit = (data) => {
        // console.log(data);
        data.rating=value;
    
        axios
          .post(`https://sharif-rashed.herokuapp.com/reviews`, data)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire(
                'Thank You!',
                'You Shared Your Experience!',
                'success'
              )
              reset();
              console.log(res.data);
              // window.location.reload();
            }
          });
      };
    return (
        <div style={{ overflowX: "hidden", paddingTop: "70px"}}>
        <div className="container-fluid">
            {/* Details */}

<div className='py-5'>     

            {/* Details */}
   <div className="row">
                   {/* Review */}
        
       <div className="col-md-2 border-end border-secondary reviews text-center">

        <div className='mt-2 mb-3 text-center'>
        <h3 className='text-lightest-slate'><span className="text-warning fs-4">Bike</span> <span>Valley</span></h3>
                <small className='text-light-slate'>Niche  products related website</small>
                <div className='d-flex justify-content-center '>
                <div>
                 <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/BikeValleyhttps://github.com/Sharif33/BikeValley"><RiGithubLine title= "Source Code" className="icon-hover" /></a>

                 <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://github.com/Sharif33/BikeValley-server"><RiGitBranchLine title= "Server Source Code" className="icon-hover" /></a>

                 <a className="text-decoration-none text-lightest-slate mx-2 fs-3" rel="noreferrer" target="_blank" href="https://bike-valley-sharif33.web.app"><RiExternalLinkLine title= "Live Demo" className="icon-hover" /></a>
               </div>
                </div>
            </div>

           <h5 className="text-sky mb-3 font-custom">Please review my work</h5>
           {
           value && <form className="text-lightest-slate" onSubmit={handleSubmit(onSubmit)}>
       <Box
           sx={{
             width: 200,
             display: "flex",
             alignItems: "center",
             textAlign:"center"
           }}
         >
           <Rating
             name="hover-feedback"
             value={value}
             type="number"
             precision={0.5}
             onChange={(event, newValue) => {
               setValue(newValue);
             }}
             onChangeActive={(event, newHover) => {
               setHover(newHover);
             }}
             emptyIcon={
               <StarIcon style={{ color:"#8892b0" }} fontSize="inherit" />
             }
           />
           {value !== null && (
             <Box sx={{ ml: 2 }}>
               {labels[hover !== -1 ? hover : value]}
             </Box>
           )}
       </Box>
           
         <input
           className="w-100 rounded p-2 bg-transparent text-light mb-3 border-css"
           placeholder="Your Name"
           {...register("name")}
           required
         />
         <input
           className="w-100 rounded p-2 bg-transparent text-light mb-3 border-css"
           type={'email'}
           placeholder="Your Email"
           {...register("email")}
           required
         />
         
         <input
           className=" rounded"
           hidden
           defaultValue={"bikeValley"}
           {...register("project")}
         />
        
         <textarea style={{height:'8em'}} maxLength={200}
           className=" rounded w-100 p-2 bg-transparent text-light mb-3 border-css"
           {...register("description")}
           placeholder="Wonderfull work. Keep going on...."
           required
         />
         <Button
           sx={{ width: "100%", letterSpacing: 2 }}
           type="submit"
           variant="contained"
         >
           share
         </Button>
       </form>
               }
       </div>
           <div className="col-md-9 mx-5 ms-auto">                 
               <div className="row"> 
               
                   <div className="col-md-6 wrapper">
                   <h4 className=' wrapper-text fw-bold'>Technology Used</h4>                      
       <div className='row'>
                               <div className='col-md-6 text-light-slate front-end bg-skill-back p-3 rounded'>
                                   <h5 style={{color:"#22c55e"}}>Front-End :</h5>
                                   <ul>
                                       <li>React JS</li>
                                       <li>React Router dom</li>
                                       <li>React hook form</li>
                                       <li>Axios</li>
                                       <li>Material UI</li>
                                       <li>Bootsrap5</li>
                                       <li>CSS3</li>
                                   </ul>
                                   <h5 style={{color:"#22c55e"}}>Authentication :</h5>
                                   <ul>
                                   <li>Firebase</li> 
                                   </ul>
                                  
                               </div>
                               <div className="col-md-6 text-light-slate back-end bg-skill-back shadow rounded p-3">
                                        <h5 style={{color:"#22c55e"}}>Back-End :</h5>
                                   <ul>
                                       <li>Node.js</li>
                                       <li>Express.js</li>
                                   </ul>
                                   <h5 style={{color:"#22c55e"}}>Database :</h5>
                                   <ul>
                                       <li>MongoDB Atlas</li>
                                   </ul>
                                   
                                   <h5 style={{color:"#22c55e"}}>Deploy :</h5>
                                   <ul>
                                       <li>Heroku</li>
                                       <li>Firebase</li>
                                   </ul>
                               </div>
                           </div>
                   </div>
                   <div className="col-md-6 bg-skill-back wrapper">
                   <h4 className=' wrapper-text fw-bold'>Key Features </h4>
                   <div className="p-3 text-light">
                       <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> MERN-Stack web application including customize admin panel.</p>
                       <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Admin can make another admin, can manage all products (add and delete) , can manage all orders (delete and update).</p>
                       <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Users can sign in / sign up using a Google Account in addition to their email and password. After signin users see their dashboard and bike details.</p>
                       <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Users can order bikes, manage their orders and can give reviews any bikes. </p>
                       <p><i style={{color:"#22c55e"}} className="fas fa-angle-double-right"></i> Responsived for mobile and large devices. </p>
                       
                   </div>
               </div>
           </div>
           
       {/* Preview video and website */}
       <div className='my-5 text-center'>
       <div >
       <div className='mt-5 mb-3'>
                   {/* <h2 className='text-back'>OVERVIEW</h2> */}
                    <h3 style={{fontSize:"30px"}} className="text-center fw-bold font-custom"><span className='text-lightest-slate'>PROJECT OVERVIEW <span className='text-info'>VIDEO</span></span></h3>
               </div>
           <iframe className='ytb rounded' src="https://www.youtube.com/embed/1S8bNbuPJw4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           </div>
           <div className="mt-5">
           <div className='mt-5 mb-3'>
                   {/* <h2 className='text-back'>OVERVIEW</h2> */}
                    <h3 style={{fontSize:"30px"}} className="text-center fw-bold font-custom"><span className='text-lightest-slate'>PREVIEW <span className='text-info'>WEBSITE</span></span></h3>
               </div>
               <embed className='pjct rounded' src="https://bike-valley-sharif33.web.app"></embed>
           </div>
       </div>
           </div>
                   
      
   </div>
</div>


  </div>
</div>
    );
};

export default BikeValley;