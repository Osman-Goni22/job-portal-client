// import axios from 'axios';
// import React, { useContext, useEffect } from 'react';
// import { AuthContext } from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const axiosInstance = axios.create({
//     baseURL:'http://localhost:3000',
//     withCredentials:true
// })

// const useAxiosSecure = () => {
//   const {logOut}= useContext(AuthContext)
//   const navigate = useNavigate();
//   useEffect(()=>{
//     axiosInstance.interceptors.response.use(response=>{
//       return response;
//     }, error=>{
//       console.log('error inside inceptors', error);

//       if(error.status==401 || error.status == 403){
//         console.log('need to log out the user');
//         logOut()
//         .then(()=>{
//           console.log('user loged out successfully');
//           navigate('/login')
//         })
//       }
//       return Promise.reject(error);
//     })
//   },[])

//     return axiosInstance;
    
// };

// export default useAxiosSecure;

import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const axiosInstance = axios.create({
  baseURL:'http://localhost:3000',
  withCredentials:true
})
const useAxiosSecure = () => {
 const navigate = useNavigate()
 const {logOut}= useContext(AuthContext)
  useEffect(()=>{
    axiosInstance.interceptors.response.use(response=>{
      return response;
    },error=>{
      console.log('error inside interceptors', error);
      if(error.status===401 || error.status===403){
       logOut(()=>{
        console.log('user logged out successfully');
        navigate('/login')
       })
      }
      return Promise.reject(error)
    })
  },[])

  return (
    axiosInstance
  );
};

export default useAxiosSecure;