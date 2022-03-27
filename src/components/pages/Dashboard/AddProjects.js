import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './Dashboard.css';

const AddProjects = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.date=new Date().toDateString();
        data.time=new Date().toLocaleTimeString();
        // console.log(data);

        axios.post(`https://sharif-rashed.herokuapp.com/projects`, data)
            .then(res => {
                if (res.data.insertedId) {
                    
                    Swal.fire(
                        'Good job!',
                        'Added Successfully!',
                        'success'
                      )
                    reset();
                }
            })
    }
    return (
        <div className=" col-md-12 col-lg-9 col-sm-12 mx-auto">
        <div className="py-3 rounded">
        <div className='mb-5'>
                   {/* <h2 className='text-back'>OVERVIEW</h2> */}
                    <h3 style={{fontSize:"30px"}} className="text-center fw-bold font-custom"><span className='text-slate'>PROJECT ADDED SECTION</span></h3>
               </div>
            <form className='custom-form-add' onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                    <div className="col-md-6">
                       <input {...register("name", { required: true, maxLength: 100 })} placeholder="Project Name" />      
                <select {...register("title", { required: true })}>
                <option>Select Title</option>
                <option value="FullStack Project">FullStack Project</option>
                <option value="MERN Stack Project">MERN Stack Project</option>
                <option value="React Project">React Project</option>
                <option value="Frontend Project">Frontend Project</option>
                <option value="Backend Project">Backend Project</option>
                <option value="CSS & HTML Project">CSS & HTML Project</option>
                <option value="Javascript Project">Javascript Project</option>
                <option value="DOM Project">DOM Project</option>
                </select>
                <input {...register("id")} placeholder="Project Number. ex: p11" />
                <input {...register("image")} placeholder="image url" />
                <input {...register("tech")} placeholder="Technology used" />
                <input {...register("gitC")} placeholder="Source Code (Client)" />
                <input {...register("gitS")} placeholder="Source Code (Server)" />
                    </div>
                    <div className="col-md-6">
                <input {...register("gitStar")} placeholder="Star Sharif33/sharif-portfolio on GitHub" />
                <input {...register("web")} placeholder="Website Link" /> 
                <textarea style={{height:'10.5em'}} {...register("shortDesc", { required: true, maxLength: 500 })} placeholder="Short Description" />
                <input className="btn btn-primary" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddProjects;