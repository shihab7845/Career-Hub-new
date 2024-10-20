import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedJobapplication,getStoredJobapplication } from '../../Utility/Utility';

export default function JobDetails() {
  const jobs = useLoaderData()
  const { id } = useParams()
  const idINT = parseInt(id)
  const job = jobs.find(job => job.id === idINT)
  console.log(job);

  const handleToast = () => {
    savedJobapplication(idINT)
    toast('You have applied successfully')
  }

  return (
    <div>
      <h1>Job details and number is {id}</h1>

      <Link to={'/AppliedJobs'}>
        <button onClick={handleToast} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </Link>

      <ToastContainer />
    </div>
  )
}
