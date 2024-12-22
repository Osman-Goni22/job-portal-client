import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase_init';
import axios from 'axios';

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('current user:',  currentUser);
            if(currentUser?.email){
                const user ={email:currentUser.email}
                axios.post('http://localhost:3000/jwt',user, {withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                    setLoading(false)
                })
              
            }
            else{
                axios.post('http://localhost:3000/logout', {}, {withCredentials:true})
                .then(res=>{
                    console.log('logout token:',res.data)
                    setLoading(false)
                })
               
            }
           

        })
        return ()=>{
            subscribe();
        }
    },[])

    const logOut = ()=>{
       return signOut(auth)
    }

    const provider = new GoogleAuthProvider();
    const signIngWeithGoogle =()=>{
          return signInWithPopup(auth, provider )
    }


    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const AuthInfo ={
        user, 
        createUser,
        loading,
        signInUser,
        logOut,
        signIngWeithGoogle
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;