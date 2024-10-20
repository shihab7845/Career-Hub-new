import React, { useState, useEffect } from 'react';
import { getStoredJobapplication } from '../../Utility/Utility';
import { useLoaderData } from 'react-router-dom';

export default function AppliedJobs() {
  const JobApplicationData = useLoaderData();  // Get job application data
  const [jobApplied, setJobApplied] = useState([]); // State to store the applied jobs
  const SelectedId = getStoredJobapplication();  // Get stored job IDs
  
  useEffect(() => {
    if (SelectedId.length > 0) {
      const appliedJobs = []; // Array to collect jobs

      for (const Id of SelectedId) {
        const job = JobApplicationData.find(job => job.id === Id); // Find the job with the matching ID
        if (job) {
          appliedJobs.push(job); // Add found job to the array
        }
      }

      setJobApplied(appliedJobs); // Set the state once after collecting all jobs
    }
  }, [JobApplicationData,SelectedId]);  // Dependencies for useEffect
  
  console.log('Job IDs applied:', jobApplied);
  console.log('Selected IDs:', SelectedId);
  console.log('Job Application Data:', JobApplicationData);

  return (
    <div>
      <h1>Jobs are here</h1>
      {jobApplied.length > 0 ? (
        <ul>
          {jobApplied.map(job => (
            <li key={job.id}>{job.job_title}</li>  // Assuming jobs have a 'title' field
          ))}
        </ul>
      ) : (
        <p>No jobs applied.</p>
      )}
    </div>
  );
}
