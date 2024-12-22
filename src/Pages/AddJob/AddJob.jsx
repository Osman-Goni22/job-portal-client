import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const AddJob = () => {

    const {user} = useContext(AuthContext)

    const handleAddJob = (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        
        const initialData = Object.fromEntries(formData.entries())



        const {max,min,currency, ...newJob}= initialData;
       

        newJob.salaryRange={min,max,currency}
        newJob.requirements= newJob.requirements.split('\n')
        
        newJob.responsibilities= newJob.responsibilities.split('\n')
        console.log(newJob);

        axios.post('http://localhost:3000/jobs', newJob)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast('Job added successfully')
            }
        })

        .catch(err=>{
            console.log(err.message);
        })

    }

    return (
        <form onSubmit={handleAddJob} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Title</span>
                </label>
                <input type="text" name='title' placeholder="title" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Location</span>
                </label>
                <input type="text" name='location' placeholder="location" className="input input-bordered" required />

            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Name</span>
                </label>
                <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />

            </div>
            {/* Job type */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Type</span>
                </label>
                <select name='jobType' className="select input-bordered select-ghost w-full max-w-xs">
                    <option disabled selected>Pick the job type</option>
                    <option>Full time</option>
                    <option>Part time</option>
                    <option>Intern</option>
                </select>

            </div>

            
          

            <div>
                <div className='flex items-end gap-4'>

                    <div className='flex flex-col' >
                        <label>Salary Range</label>
                        <input type='text' name='max' className='input input-bordered' placeholder='max-salary' />
                    </div>

                    <input type='text' name='min' className='input input-bordered' placeholder='min-salary' />


                    <select name='currency' className="select input-bordered select-ghost w-full max-w-xs">
                        <option disabled selected>Currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>IRN</option>
                    </select>


                </div>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Field</span>
                </label>
                <select name='field' className="select input-bordered select-ghost w-full max-w-xs">
                    <option disabled selected>Pick the job Field</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Teaching</option>
                </select>

            </div>


            <div className="form-control">
                <label className="label">
                    <span className="label-text">Requirements</span>
                </label>
                <textarea type="text" name='requirements' placeholder="put each requirement in new line" className="input input-bordered" required />

            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Responsibilities</span>
                </label>
                <textarea  type="text" name='responsibilities' placeholder="put each responsibility in new line" className="input input-bordered" required />

            </div>  

           <div>
            <h2>Description</h2>
           <textarea name='description'
                placeholder="Description"
                className="textarea textarea-bordered textarea-lg w-full "></textarea>
           </div>

           <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Name</span>
                </label>
                <input type="text" name='HrName' placeholder="HR Name" className="input input-bordered" required />

            </div>
           <div className="form-control">
                <label className="label">
                    <span className="label-text">Deadline</span>
                </label>
                <input type="date" name='deadline' placeholder="Deadline" className="input input-bordered" required />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Hr Email</span>
                </label>
                <input defaultValue={user.email} type="email" name='HrEmail' placeholder="HR Email" className="input input-bordered" required />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Logo</span>
                </label>
                <input type="text" name='logo' placeholder="Company Logo" className="input input-bordered" required />

            </div>

                
               <div className="form-control mt-6">
                <button className="btn btn-primary">Add Job</button>
            </div>
        </form>
    );
};           

export default AddJob;