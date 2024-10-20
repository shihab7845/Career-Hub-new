import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div role="alert" className="flex flex-col items-center bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg space-y-4">
      <div className="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>

      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded transition duration-300 ease-in-out"
      >
        Go Back
      </Link>
    </div>
  );
}
