import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const HotJobCard = ({ job }) => {
    const {_id, title, location, salaryRange, company, company_logo, description, jobType,requirements } = job;
    return (
        <div className="pt-5 bg-base-100 pl-5  shadow-customShadow rounded-md">
          <div>
             <div className='flex gap-5'>
             <figure>
                <img
                    src={company_logo}
                    className='w-16'
                    alt="Shoes" />
            </figure>

            <div className=''>
                <h2 className="text-2xl">{company}</h2>
                <h2 className='flex items-center'><FaMapMarkerAlt />{location}</h2>
            </div>
             </div>
          </div>
            <div className='my-5'>
                <h2 className='text-xl text-left mb-2 hover:text-blue-500'>{title} <div className="badge badge-secondary">NEW</div></h2>
                <h2 className='text-justify mb-4'>{description}</h2>
               <div className='flex gap-2'>
                  {
                    requirements.map((skill, indx)=><p key={indx} className='hover:text-purple-600'>{skill}</p>)
                  }
               </div>
            </div>
            <div>
               <div className='flex items-center justify-around'>
                  <h2 className='flex items-center'>Salary:{salaryRange.min}-{salaryRange.max}<FaDollarSign></FaDollarSign></h2>
                 <Link to={`/jobs/${_id}`}>
                 <button className='btn btn-success'>Apply</button>
                 </Link>
               </div>
            </div>
        </div>
    );
};

export default HotJobCard;