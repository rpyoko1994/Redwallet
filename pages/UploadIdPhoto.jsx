import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function UploadIdPhoto() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full lineas">
              <nav>
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
      <div className="flex flex-col w-full pt-4 pl-4">
          <h2 className="text-white text-2xl font-medium ">
          Take a Selfie with ID Card
          </h2>
        </div>
        <div className="flex flex-col pt-4">
          <h2 className="text-gray-500 texs-xs px-4">
          Please look at the camera and hold still
          </h2>
        </div>

      <img
        src="../src/assets/mujer.png"
        alt="Mujer"
        className="w-full object-contain px-2"
      />

      <div className="absolute bg-gray-800 bottom-0 left-0 w-full h-1/4 rounded-t-4xl shadow-lg p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-2 w-full">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-full bg-rojo h-14 mt-4 mb-2 text-white font-bold py-2 rounded-lg hover:bg-red-400 transition"
          >
            Take Picture
          </button>
          <button
            onClick={() => navigate("")}
            className="w-full h-14 font-bold py-2 bg-gray-700 text-purple-600 rounded-lg hover:bg-gray-700 transition"
          >
            Retake Picture
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadIdPhoto;
