import React from "react";
import Navbar from "../component/Navbar"; 

const progressBar = (
  <div className="w-full bg-gray-200 rounded-full h-1">
    <div className="bg-rojo h-1 rounded-full w-1/6"></div>
  </div>
);

function Faceid() {
  return (
    <div className="h-screen">
      <Navbar progressBar={progressBar} />

      <div className="flex flex-col items-center py-24 justify-center">
        <div className="items-center justify-center  w-full flex flex-col">
          <img src="../src/assets/Face.svg" className="w-48 h-48"></img>
        </div>
        <div className="items-center flex flex-col w-full pt-4">
          <h2 className="text-white text-3xl font-medium text-center">
            Enable Face ID
          </h2>
        </div>
        <div className="items-center flex flex-col pt-4">
          <h2 className="text-gray-500 texs-xs text-center px-14">
            This help us check that you’re really you. Identity verification is
            one of the ways we keep secure.
          </h2>
        </div>
      </div>
      <div className="absolute w-full bottom-0 p-4 flex flex-col">
        <button
          type="submit"
          className="w-full flex flex-col bg-rojo text-white p-4 my-2 rounded-md hover:bg-yellow-300"
        >
          Enable Face ID
        </button>
        <button
          type="submit"
          className="w-full flex flex-col bg-gray-800 rojo p-4 my-2 rounded-md hover:bg-yellow-300"
        >
          Skip for Now
        </button>
      </div>
    </div>
  );
}

export default Faceid;
