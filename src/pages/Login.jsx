import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700 mb-6">
          Login to <span className="text-[#1C352D]">Your Account</span>
        </h2>

        <form action="#">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C352D] focus:outline-none"
            />
          </div>

          <div className="flex justify-end mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-[#1C352D] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C352D] text-white py-2 px-4 rounded-lg hover:bg-[#162821] transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Create Account Redirect */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/create-account"
            className="text-[#1C352D] font-medium hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
