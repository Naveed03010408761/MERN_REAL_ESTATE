import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: "url('/images/header_img.png')" }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Explore Homes That Fit Your Dreams
        </h1>

        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white bg-opacity-80 rounded hover:bg-blue-700 hover:bg-opacity-90 transition">
            Projects
          </button>
           <Link to="/login">
                    <button className="px-6 py-3 bg-blue-600 text-white bg-opacity-80 rounded hover:bg-blue-700 hover:bg-opacity-90 transition">
                      Login
                    </button>
                    </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
