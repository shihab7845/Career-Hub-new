import React, { useEffect, useState } from 'react';
import Featured_card from '../Featured card/Featured_card';

export default function Featured() {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(Jdata => setData(Jdata));
  }, []);

  const handleAllData = () => {
    setDataLength(data.length);
  };

  return (
    <div className="bg-white py-12 px-6 text-center">
      <h1 className="text-2xl md:text-4xl font-semibold mb-4">Featured Jobs</h1>
      <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
        Explore thousands of job opportunities with all the information you need. It's your future.
      </p>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {data.slice(0, dataLength).map(item => (
          <Featured_card key={item.id} item={item} />
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={handleAllData}
          className={`bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-200 ${data.length === dataLength ? 'hidden' : ''}`}
        >
          Show All Data
        </button>
      </div>
    </div>
  );
}
