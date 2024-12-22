import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const SocialLogin = () => {
  const {signIngWeithGoogle}=useContext(AuthContext)
    const handleLoginWithGoogle = ()=>{
        signIngWeithGoogle()
        .then(res=>console.log(res))
        .catch(err=>console.log(err.message))
    }
    return (
        <div>
              <div className="divider">OR</div>
            <button onClick={handleLoginWithGoogle} className='btn'>Google</button>
        </div>
    );
};

export default SocialLogin;