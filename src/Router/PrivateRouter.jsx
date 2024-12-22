import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const PrivateRouter = ({children}) => {
    const {user, loading } =useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <h1>Loading........</h1>
    }


    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;