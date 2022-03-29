import React, { useEffect, useState } from 'react';
import { AiOutlineFundProjectionScreen,AiOutlineStar,AiFillProject } from "react-icons/ai";
import Rating from '@mui/material/Rating';

const DashboardHome = () => {

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        setInterval(() => {
         setTime(new Date());
        }, 1000);
      }, []);

    const date = new Date().toDateString();
    // const time = new Date().toLocaleTimeString();

    const [projects, setProjects] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const lastUpdate = projects.slice(-1).pop();

    // Reviews
    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const total=(reviews.reduce((total,currentItem) =>  total = parseFloat(total + currentItem.rating) , 0 ));

    const avg =(total/(projects?.length)).toFixed(1);

    // let sum = reviews.reduce(function(prev, current) {
    //     return parseInt(prev + +current.rating)
    //   }, 0);
    //   console.log(sum);

    return (
        <div>
            <div className='text-center'>
                <h1 style={{fontSize:"10vw"}} className='text-info'>{time.toLocaleTimeString()}</h1>
                 <h1 className='text-lightest-slate'>{date}</h1>
            </div>
            
            <div className='row row-cols-1 row-cols-md-3 m-2 g-4'>
                <div className="col">
                    <div className="d-md-flex justify-content-between align-items-center bg-skill-back p-2 rounded">
                        <div className='m-auto'>
                            <AiOutlineFundProjectionScreen  style={{fontSize:"15vw"}}  className='p-2 text-sky w-100'/>
                        </div>
                        <div className='text-center w-100'>
                              <h5 className='text-light-slate font-custom'>Total Projects: <br /> <span className="fs-1 text-danger"> {projects?.length}</span></h5> 
                              <h5 className='text-light-slate'> <span className="font-custom">Last Update:</span> <br /> <small className='text-warning'>{lastUpdate?.date} , {lastUpdate?.time}</small> </h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-md-flex justify-content-between align-items-center bg-skill-back p-2 rounded">
                        <div className='m-auto'>
                            <AiFillProject  style={{fontSize:"15vw"}}  className='p-2 text-sky w-100'/>
                        </div>
                        <div className='text-center w-100'>
                              <h5 className='text-light-slate font-custom'>Last Project: <br /><span className="fs-3 text-danger">{lastUpdate?.name}</span></h5>
                              <h5 className='text-light-slate'> <span className="font-custom"> Upload:</span> <br /> <small className='text-warning'>{lastUpdate?.date} , {lastUpdate?.time}</small> </h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="d-md-flex justify-content-between align-items-center bg-skill-back p-2 rounded">
                        <div className='m-auto'>
                            <AiOutlineStar  style={{fontSize:"15vw"}}  className='p-2 text-sky w-100'/>
                        </div>
                        <div className='text-center w-100'>
                              <h5 className='text-light-slate font-custom'>Total Reviews: <br /><span className="fs-3 text-danger"> {reviews?.length}</span></h5>
                              <h5 className='text-light-slate font-custom'>Average Ratings: <br /> <Rating name="half-rating-read" defaultValue={avg} precision={0.5} readOnly /> <span className="fs-3 text-danger"> {avg}</span></h5>
                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;