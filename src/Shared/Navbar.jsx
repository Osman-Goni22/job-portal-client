import React, { useContext } from 'react';
import { Link, Links, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import largelogo from '../assets/../assets/small-logo.png'
const Navbar = () => {
    const {user, logOut}= useContext(AuthContext)

    const links = <div className='flex gap-5'>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/myApplications'>My Applications</NavLink>
        <NavLink to='/addJob'>Add Job</NavLink>
        <NavLink to='/myPostedJobs'>My Posted Jobs</NavLink>
       
       

    </div>

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            alert('Logged Out Successfully')
        })
    }  

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            Links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <div className='flex items-center'>
                        <img src={largelogo} className='w-12' alt="" />
                        <p>Job portal</p>
                    </div>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
               {
                user? <div onClick={handleLogOut} className='btn '>logout</div>:<>
                
                <Link to='/register'>Register</Link>
                <Link to='/login'>Sign In</Link>
                
                </>
               }
            </div>
        </div>
    );
};

export default Navbar;