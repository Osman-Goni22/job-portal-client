import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import useAxiosSecure from './../../hooks/useAxiosSecure';


const MyApplications = () => {
    const {user} = useContext(AuthContext)
    const [jobs, setJobs]= useState([])
    const AxiosSecure = useAxiosSecure();
    useEffect(()=>{
        // fetch(`http://localhost:3000/jobApplications?email=${user.email}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setJobs(data);
        // })

        // axios.get(`http://localhost:3000/jobApplications?email=${user.email}`,{withCredentials:true})
        // .then(res=>{
        //   setJobs(res.data)
        // })

        // .catch(err=>console.log(err.message))

      
        AxiosSecure.get(`/jobApplications?email=${user.email}`)
        .then(res=>setJobs(res.data))
        .catch(error=>console.log(error))
    },[user.email])     
    
    
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
         
          {
            jobs.map(job=>    <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </td>
                <td>
               
                  <br />
                  <span className="badge badge-ghost badge-sm">{job.company}</span>
                </td>
                <td>Crimson</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>)
          }
          
          </tbody>
        
         
        </table>
      </div>
    );
};

export default MyApplications;