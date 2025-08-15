import React from 'react';

const Projects = () => {
  const projects = [
    "/images/project_img_1.jpg",
    "/images/project_img_2.jpg",
    "/images/project_img_3.jpg",
    "/images/project_img_4.jpg"
  ];

  return (
    <div className="w-full min-h-screen bg-white p-8">
      {/* Heading */}
      <div className="text-center mb-6 mt-10">
        <h1 className="text-3xl font-bold text-black">
          Projects <span className="underline">Completed</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Crafting spaces, building legacies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((src, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300 p-4"
          >
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="w-60 h-40 object-cover rounded-md mb-4"
            />
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 animate-bounce">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
