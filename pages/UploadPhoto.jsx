import React from "react";

function UploadPhoto() {
  return (
    <div className="h-screen">
      <nav className="">
        <button
          onClick={() => window.history.back()}
          className="text-white font-semibold p-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
      <div className="flex flex-col items-center py-24 justify-center">
        <div className="items-center justify-center  w-full flex flex-col">
          <img src="../src/assets/card.svg" className="w-48 h-48"></img>
        </div>
        <div className="items-center flex flex-col w-full pt-4">
          <h2 className="text-white text-3xl font-medium text-center">
            Verify Your Identity
          </h2>
        </div>
        <div className="items-center flex flex-col pt-4">
          <h2 className="text-gray-500 texs-xs text-center px-10">
            To help protect you from fraud and identity theft, and to comly with
            federal regulations, wee need some info.
          </h2>
        </div>
      </div>
      <div className="absolute w-full bottom-0 p-4 flex flex-col">
        <button
          type="submit"
          className="w-full flex flex-col bg-rojo text-white p-4 my-2 rounded-md hover:bg-red-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default UploadPhoto;
