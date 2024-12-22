import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginAnimation from '../../assets/lotti/login.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import SocialLogin from '../../Shared/SocialLogin';
import axios from 'axios';
const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {signInUser} =useContext(AuthContext)
    
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(res=>{
            console.log(res.user);
            const user = {email:email};

            axios.post('http://localhost:3000/jwt', user, {withCredentials:true})
            .then(data=>{
                console.log("Login Token:",data.data);
            })

            navigate(location?.state?location.state:'/')
        })

        .catch(err=>console.log(err.message))
        
    }

    return (
        <div className="w-full max-w-lg shrink-0 shadow-2xl mx-auto md:flex flex-row-reverse items-center">
            <div>
                <Lottie animationData={loginAnimation}></Lottie>
            </div>
            <div>
                <h2 className='text-center font-bold text-2xl'>Sign In Now</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                    <p>New to this Website? please <Link to='/register'>Register</Link></p>

                    <SocialLogin></SocialLogin>  
                </form>
            </div>
        </div>
    );
};

export default Login;