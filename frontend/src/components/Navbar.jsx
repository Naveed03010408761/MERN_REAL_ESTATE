import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToSignUp = ()=>{
    navigate("/signUp");
  }
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        
        <div className="text-2xl font-bold cursor-pointer">
          <img src={logo} alt="Image not available" />
        </div>

       
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/home" className="hover:underline">Home</Link>
          </li>
           <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          
           <li>
            <Link to="/projects" className="hover:underline">Projects</Link>
          </li>
           <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>

      
        <div className="hidden md:flex space-x-4">

          <button onClick={goToSignUp} className="px-4 py-2 bg-black rounded hover:bg-gray-800 transition">
            Sign Up
          </button>

        </div>

       
        <div className="md:hidden cursor-pointer">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
