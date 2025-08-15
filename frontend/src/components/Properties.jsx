// src/pages/Properties.jsx
import { useEffect, useState } from 'react';

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {properties.length > 0 ? (
          properties.map(p => (
            <div key={p._id} className="border rounded p-4 shadow">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-lg font-semibold mt-2">{p.title}</h2>
              <p className="text-gray-600">{p.location}</p>
              <p className="font-bold">Price: ${p.price}</p>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-screen">
            <div className="border rounded p-4 shadow">
              <img
                src="/images/project_img_6.jpg"
                alt=""
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">Property 1</h2>
              <p className="text-gray-600">Lahore</p>
              <p className="font-bold">9000 dollars</p>
            </div>
            <div className="border rounded p-4 shadow">
              <img
                src="/images/project_img_6.jpg"
                alt=""
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">Property 1</h2>
              <p className="text-gray-600">Lahore</p>
              <p className="font-bold">9000 dollars</p>
            </div>
            <div className="border rounded p-4 shadow">
              <img
                src="/images/project_img_6.jpg"
                alt=""
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-2">Property 1</h2>
              <p className="text-gray-600">Lahore</p>
              <p className="font-bold">9000 dollars</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
