import React from "react";
import Navbar from "../component/Navbar"; 


function SuccessState() {
  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex flex-col items-center py-24 justify-center">
        <div className="items-center justify-center  w-full flex flex-col">
          <img src="../src/assets/password.svg" className="w-48 h-48"></img>
        </div>
        <div className="items-center flex flex-col w-full pt-4">
          <h2 className="text-white text-3xl font-medium text-center">
          Password Updated!
          </h2>
        </div>
        <div className="items-center flex flex-col pt-4">
          <h2 className="text-gray-500 texs-xs text-center px-14">
          Your password has been set up successfully.
          </h2>
        </div>
      </div>
      <div className="absolute w-full bottom-0 p-4 flex flex-col">
        <button
          type="submit"
          className="w-full flex flex-col bg-rojo text-white p-4 my-2 rounded-md hover:bg-red-400"
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );
}

export default SuccessState;
