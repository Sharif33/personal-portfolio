import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    // DELETE products
    const handleDeleteProducts = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ec0554',
            cancelButtonText: 'No, keep me!',
            confirmButtonText: 'Yes, Delete it!'
          }).then((result) => {
            if (result.isConfirmed) 
         {
            const url = `https://sharif-rashed.herokuapp.com/projects/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your project has been deleted.',
                            'success'
                          )
                        // console.log(data);
                        const remainingProjects = projects.filter(project => project._id !== id);
                        // console.log(remainingOrders);
                        setProjects(remainingProjects);
                    }
                })
        }
    });
    }
    return (
        <div className="container py-4">
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="sticky table" >
                <TableHead sx={{bgcolor: 'secondary.main'}}>
                    <TableRow>
                        <TableCell sx={{ color: 'secondary.main'}}>Project</TableCell>
                        <TableCell sx={{ color: 'secondary.main'}} align="center">Title</TableCell>
                        <TableCell sx={{ color: 'secondary.main'}} align="center">ID</TableCell>
                        <TableCell sx={{ color: 'secondary.main'}} align="center">Edit</TableCell>
                        <TableCell sx={{ color: 'secondary.main'}} align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow hover
                            key={project._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {project?.name}
                            </TableCell>
                            <TableCell align="center">{project?.title}</TableCell>
                            <TableCell align="center">{project?.id}</TableCell>
                            <TableCell align="center"><Link to={`${project?._id}`}> <button className='btn btn-custom'> <i title='Update' className="fas fa-edit"></i> </button> </Link></TableCell>
                            <TableCell align="center"><button onClick={() => handleDeleteProducts(project?._id)} className="btn btn-custom-2"><i className="fas fa-trash"></i></button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
    );
};

export default ManageProjects;