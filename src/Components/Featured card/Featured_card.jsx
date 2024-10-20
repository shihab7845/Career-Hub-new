import React from 'react';
import { Link } from 'react-router-dom';

export default function Featured_card({ item }) {
  const { id,job_title, company_name, logo, job_type, location, remote_or_onsite } = item;

  return (
    <div className="max-w-xs mx-auto rounded-md shadow-md bg-white text-gray-800">
       {/* Image Section */}
{/* Image Section */}
<img
  src={logo}
  alt={`${company_name} logo`}
  className="w-full h-48 object-cover rounded-t-md bg-gray-200 transition-transform transform hover:scale-105"
/>


      {/* Card Body */}
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{job_title}</h2>
          <p className="text-gray-600">{company_name}</p>
          <p className="text-sm text-gray-500">{job_type} | {location}</p>
          <p className="font-medium text-blue-600">{remote_or_onsite}</p>
        </div>
          {/* Card Actions */}
          <Link to={`job/${id}`}>
          <button
            type="button"
            className="w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-white hover:bg-blue-500 transition duration-200"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
