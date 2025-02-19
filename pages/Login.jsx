import React from "react";
import Navbar from "../component/Navbar";

function Login() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-w-screen flex flex-col items-center justify-center">
        <img
          src="../src/assets/logomin.svg"
          className="px-4 py-2"
          alt="Logo"
        />{" "}
        <h1 className="text-2xl font-bold text-white px-4 py-2 text-center">
          Welcome Back!
        </h1>
        <p className="text-gray-500 mt-2 px-4 text-center">
          Sign in to your account
        </p>
      </div>

      <form className="mt-6 w-full max-w-sm p-4">
        <div className="mb-4">
          <input
            type="email"
            className="mt-1 block w-full p-4 border bg-gray-800 text-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="mt-1 block w-full p-4 border bg-gray-800 text-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4  flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-red-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 p-4 text-white font-bold rounded-lg hover:bg-red-600 transition"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 py-4">Or sign in with</p>
        <div className="mt-2 flex justify-center space-x-4 px-6">
          <button className="p-2 border w-1/2 flex items-center border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <img
              src="../src/assets/Apple.svg"
              alt="Apple"
              className="w-8 h-8"
            />
            <h2 className="text-white text-sm px-4">Apple</h2>
          </button>
          <button className="p-2 border w-1/2 flex items-center border-gray-300 rounded-lg hover:bg-gray-100 transition">
            <img
              src="../src/assets/Google.svg"
              alt="Google"
              className="w-6 h-6"
            />
            <h2 className="text-white text-sm px-4">Google</h2>
          </button>
        </div>
      </div>

      <div className="mt-14 pt-16 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
