import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar';
import Lottie from 'lottie-react';
import registerAnimation from '../../assets/lotti/register.json'
import { AuthContext } from '../../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../../Shared/SocialLogin';
const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const regX= /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
        if(!regX.test(password)){
            alert('Invalid password');
            return;
        }

        createUser(email, password)
        .then(res=>{
         
            console.log(res.user);
       
        })

        .catch(err=>{
            console.log(err.message);
        })
        
        
    }

    return (
        <div className="w-full max-w-2xl shrink-0  mx-auto flex flex-row-reverse items-center">
            <div>
                <Lottie animationData={registerAnimation}></Lottie>
            </div>
           <div>
           <div className='shadow-2xl'>
                <h2 className='text-center font-bold text-2xl'>Register Now</h2>
                <form onSubmit={handleRegister} className="card-body">
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Register;