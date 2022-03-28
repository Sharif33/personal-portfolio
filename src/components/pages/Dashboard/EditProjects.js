import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditProjects = () => {
    const { id } = useParams();

    const [projects, setProjects] = useState({});

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [id])

    const handleUpdate = (data) => {
        data.date=new Date().toDateString();
        data.time=new Date().toLocaleTimeString();
        console.log(data);
        Swal.fire({
            title: 'Are you sure?',
            text: "You wanted to update this projects!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ec0554',
            cancelButtonText: 'No, keep me!',
            confirmButtonText: 'Yes, update it!'
          }).then((result) => {
            if (result.isConfirmed) 
         {

            axios.put(`https://sharif-rashed.herokuapp.com/projects/${id}`, data)
          
                .then(res => {
                    if (res.data) {
                        Swal.fire(
                            'Done!',
                            'Updated successfully!',
                            'success'
                          )
                        // window.location.reload();
                        setProjects(data);
                        reset();
                    }
                })
        }
    });

    };

    return (
        <div className="col-md-11 col-lg-9 col-sm-12 mx-auto">
        <div className="py-4 rounded">
            <h3 className="text-slate">Update <span className='text-info'> {projects?.name}</span></h3>
            {
                projects?.name && <form className='custom-form-add' onSubmit={handleSubmit(handleUpdate)}>
                    <div className='row'>
                    <div className="col-md-6">
                       <input {...register("name", { required: true, maxLength: 100 })} defaultValue={projects?.name} />      
                <select {...register("title", { required: true })}>
                <option>{projects?.title}</option>
                <option value="FullStack Project">FullStack Project</option>
                <option value="MERN Stack Project">MERN Stack Project</option>
                <option value="React Project">React Project</option>
                <option value="Frontend Project">Frontend Project</option>
                <option value="Backend Project">Backend Project</option>
                <option value="CSS & HTML Project">CSS & HTML Project</option>
                <option value="Javascript Project">Javascript Project</option>
                <option value="DOM Project">DOM Project</option>
                </select>
                <input {...register("id")} defaultValue={projects?.id} />
                <input {...register("image")} defaultValue={projects?.image} />
                <input {...register("tech")} defaultValue={projects?.tech} />
                <input {...register("gitC")} defaultValue={projects?.gitC} />
                <input {...register("gitS")} defaultValue={projects?.gitS} />
                    </div>
                    <div className="col-md-6">
                        <input {...register("gitStar")} defaultValue={projects?.gitStar} />
                        <input {...register("date")} defaultValue={projects?.date} readOnly />
                        <input {...register("time")} defaultValue={projects?.time} readOnly />
                <input {...register("web")} defaultValue={projects?.web} /> 
                <textarea style={{height:'10.5em'}} {...register("shortDesc", { required: true, maxLength: 500 })} defaultValue={projects?.shortDesc} />
                <input className="btn btn-primary" type="submit" />
                    </div>
                </div>
            </form>
            }
        </div>
    </div>
    );
};

export default EditProjects;