import React, { useState } from "react";

const BuyCrypto3 = () => {

  return (
    <div className="p-4 lineas text-white min-h-screen">
      <div className="h-1/2 w-full">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-2 py-6">
          <button onClick={() => window.history.back()} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <div className="text-center">
            <h2 className="text-white text-lg font-semibold">Buy ADA</h2>
          </div>
          <div>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Valor principal */}
        <div className="text-center w-full px-4 mb-4">
          <h2 className="text-5xl font-semibold text-center">356.67</h2>
        </div>

        {/* ADA con imagen */}
        <div className="flex items-center justify-center py-2">
          <img src="../src/assets/cardano.svg" className="h-5 w-5 mr-2" alt="ADA" />
          <h2 className="text-white">23.5 ADA</h2>
        </div>
        <p className="text-gray-500 text-sm text-center mt-2">
        WDfacsvcs51....gGRHBnm4xoOf
        </p>

        <div className="flex justify-center mt-6">
          <img
            src="../src/assets/QR.png" // Ruta de la imagen del QR
            alt="QR Code"
            className="w-full h-full px-6"
          />
        </div>

        <div className="flex items-center justify-center py-2 mt-4">
          <img src="../src/assets/cardano.svg" className="h-5 w-5 mr-2" alt="ADA" />
          <h2 className="text-white"> 1 ADA = $0.35</h2>
        </div>
      </div>

    </div>
  );
};

export default BuyCrypto3;