import React from 'react';

const About = () => {
  return (
    <div className="bg-white w-full h-screen p-10 my-8">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-extrabold text-gray-900 tracking-wide">
          About {""}  <span className="text-lg text-blue-600 underline decoration-2">
          Our Brands
        </span>
        </h3>
      </div>

      {/* Brand Image */}
      <div
        className="w-full h-64 bg-cover bg-center rounded-xl shadow-lg border border-gray-200 mb-10"
        style={{ backgroundImage: 'url("/images/brand_img.png")' }}
      ></div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 ">
        {[
          { number: '10+', text: 'Years of Excellence' },
          { number: '50+', text: 'Projects Completed' },
          { number: '100+', text: 'Happy Clients' },
          { number: '20+', text: 'Awards Won' }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <h4 className="text-3xl font-bold text-blue-700">{item.number}</h4>
            <p className="text-gray-600 mt-2 text-center">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
        voluptatibus harum magnam ut tempore laborum culpa suscipit sequi. Vitae
        fugiat cupiditate cumque molestiae distinctio quibusdam laborum
        dignissimos commodi ut totam.
      </p>

      {/* Button */}
      <div className="text-center">
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition animate-bounce">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
