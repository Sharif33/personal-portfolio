import React, { useEffect, useState } from 'react';

const DashboardHome = () => {
    const [projects, setProjects] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/projects`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    // Reviews
    useEffect(() => {
        fetch(`https://sharif-rashed.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-light-slate'>Total Projects: {projects?.length}</h1>
            <h1 className='text-light-slate'>Total Reviews: {reviews?.length}</h1>
        </div>
    );
};

export default DashboardHome;