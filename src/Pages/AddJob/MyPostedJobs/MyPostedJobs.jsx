import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const MyPostedJobs = () => {

    const {user} = useContext(AuthContext)

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])

    return (
        <div>
            <h1>My Posted Jobs {jobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;