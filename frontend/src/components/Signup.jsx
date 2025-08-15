import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({
    userName: '',
    fullName: '',
    email: '',
    password: '',
    role: '',
    avatar: null,
  });

  const handleTextChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = e => {
    const { name, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const submitForm = async e => {
    e.preventDefault();

    for (let key in form) {
      if (!key[form]) {
        alert('All fields are required!');
        return;
      }
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      //this line made the object an array to apply forEach on it
      formData.append(key, value);
    });

    try {
      await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        alert('Signup successful!');
        setForm({
          userName: '',
          email: '',
          password: '',
          role: '',
          image: null,
          fullName: '',
        });
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 my-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Username"
            value={form.userName}
            onChange={handleTextChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="fullName"
            value={form.fullName}
            onChange={handleTextChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleTextChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Role"
            value={form.role}
            onChange={handleTextChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleTextChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={e => setImage(e.target.files[0])}
            className="w-full text-gray-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
