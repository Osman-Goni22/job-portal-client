import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/Home/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../Pages/Home/JobApply";
import MyApplications from "../Pages/Home/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from './../Pages/AddJob/MyPostedJobs/MyPostedJobs';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Page Not Found</h2>,
      children:[
        {
            path:'/',
            element:<Home></Home>,

           
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRouter><JobApply></JobApply></PrivateRouter>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
           path:'/addJob',
           element:<PrivateRouter><AddJob></AddJob></PrivateRouter>
        },
        {
          path:'/myPostedJobs',
          element:<PrivateRouter><MyPostedJobs></MyPostedJobs></PrivateRouter>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/myApplications',
          element:<PrivateRouter><MyApplications></MyApplications></PrivateRouter>
        }
      ]
    },
  ]);

  export default router;