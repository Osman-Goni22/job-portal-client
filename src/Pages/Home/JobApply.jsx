import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';

const JobApply = () => {

    const id = useParams();

const {user}= useContext(AuthContext)
    const handleApply = e=>{
        e.preventDefault();
        const linkedin = e.target.linkedin?.value;
        const resume = e.target.resume?.value;
        const github = e.target.github?.value;
        console.log(linkedin, resume, github);

        const jobApplication ={
            job_id:id,
            linkedin,
            resume,
            github,
            email:user.email

        }

        axios.post('http://localhost:3000/jobApplications', jobApplication)
        .then(res=>{
           if(res.data.insertedId)
          {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Job Application successful",
                showConfirmButton: false,
                timer: 1500
              });  
          }
        })

        .catch(err=>console.log(err.message))

      
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <form onSubmit={handleApply} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linked In</span>
            </label>
            <input name='linkedin' type="url" placeholder="linkedin URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Resume</span>
            </label>
            <input name='resume' type="url" placeholder="Resume Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub</span>
            </label>
            <input name='github' type="url" placeholder="github" className="input input-bordered" required />
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply</button>
          </div>
        </form>
      </div>
    );
};

export default JobApply;