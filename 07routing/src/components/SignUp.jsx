import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:"url(https://plus.unsplash.com/premium_photo-1677341558055-832134a85ad6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      }}
    >
      <div className="max-w-sm w-full p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-xl font-semibold mb-6 text-gray-800">Sign Up</h2>
         
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email your mobile number
          </label>
          <input
            type="email"
            placeholder="Enter your phone number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email you want to create
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Verigy Password
          </label>
          <input
            type="password"
            placeholder="Verify your password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create Account
          </button>
          <button
            onClick={handleClick}
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
