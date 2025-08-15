import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    for (let key in form) {
      if (!form[key]) {
        alert("All fields are required!");
        return;
      }
    }

    try {
      const res = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Login successful!");
        setForm({
          userName: "",
          email: "",
          password: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-10 ">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 text-white text-lg space-y-6 p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <input
          type="text"
          name="userName"
          value={form.userName}
          onChange={handleChange}
          placeholder="Username"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
