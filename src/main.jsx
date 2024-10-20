import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Root from './Root.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Jobs from './Components/Applied Jobs/Jobs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Error from './Components/Error/Error.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import AppliedJobs from './Components/Applied Jobs/Jobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/AppliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path:"/Blogs",
        element:<Blogs></Blogs>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json')
      },
      
      
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
