import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
const JobDetails = () => {
    const loadedJob = useLoaderData();
    return (
        <div>
            <h2>Job details  : {loadedJob.title}</h2>
            <h2>Apply for :{loadedJob.company}</h2>
            <h2>Deadline: {loadedJob.applicationDeadline}</h2>
            <Link to={`/jobApply/${loadedJob._id}`} className='btn'>Apply Now</Link>
        </div>
    );
};

export default JobDetails;