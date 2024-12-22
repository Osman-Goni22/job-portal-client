import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HotJobCard from './HotJobCard';

const HotJobs = () => {

    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/jobs')
        .then(res=>{
            setJobs(res.data);
        })
        
    },[])

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
              {
                jobs.map(job=><HotJobCard job={job} key={job._id}></HotJobCard>)
              }
            </div>
        </div>
    );
};

export default HotJobs;