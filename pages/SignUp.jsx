import React from "react";
import Navbar from "../component/Navbar";

function SignUp() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <h1 className="text-2xl p-4 font-bold text-white">Create your account</h1>

      {/* Descripción */}
      <p className="text-gray-500 p-4 mt-2">
        Let's get started with a free Financy account.
      </p>

      {/* Formulario de registro */}
      <form className="mt-6 w-full p-4 max-w-sm ">
        {/* Campo: Nombre completo */}
        <div className="mb-4">
          <input
            type="text"
            className="mt-1 block w-full p-4 border bg-gray-800 text-gray-300 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Campo: Email */}
        <div className="mb-4">
          <input
            type="email"
            className="mt-1 block w-full p-4 border text-gray-300 bg-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Campo: Contraseña */}
        <div className="mb-4">
          <input
            type="password"
            className="mt-1 block w-full p-4 border text-gray-300 bg-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Checkbox: Aceptar términos */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-500"
            />
            <span className="ml-2 text-sm text-white">
              I certify that I'm 18 years of age or older, and I agree to the{" "}
              <a href="#" className="text-red-500 hover:underline">
                User Agreement
              </a>{" "}
              and{" "}
              <a href="/privacyPolitic" className="text-red-500 hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-600 transition"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 py-4">Or sign up with</p>
        <div className="mt-2 flex justify-center space-x-4 px-8">
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

      {/* Enlace: ¿Ya tienes una cuenta? */}
      <div className="mt-12 text-center p-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
