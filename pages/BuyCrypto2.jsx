import React, { useState } from "react";
import TecladoNumerico from "../component/TecladoNumerico";

const BuyCrypto2 = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar el menú desplegable
  const [selectedCrypto, setSelectedCrypto] = useState("ADA"); // Estado para la criptomoneda seleccionada

  const handleConvert = () => {
    const conversionRate = 2; // Tasa de conversión ficticia
    setToAmount(fromAmount * conversionRate);
  };

  // Lista de criptomonedas con sus imágenes
  const cryptocurrencies = [
    { name: "ADA", image: "../src/assets/cardano.svg" },
    { name: "BTC", image: "../src/assets/bitcoin.svg" },
    { name: "ETH", image: "../src/assets/ethereum.svg" },
    { name: "SOL", image: "../src/assets/SOL.svg" },
  ];

  return (
    <div className="p-4 lineas text-white min-h-screen">
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
          <h2 className="text-white text-lg font-semibold">Share QR</h2>
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

      {/* Botón desplegable para seleccionar criptomoneda */}
      <div className="flex flex-col items-center justify-center mt-4 relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-gray-800 text-white font-semibold py-4 px-4 rounded-lg hover:bg-gray-700 transition flex items-center"
        >
          <img
            src={cryptocurrencies.find((crypto) => crypto.name === selectedCrypto).image}
            alt={selectedCrypto}
            className="h-5 w-5 mr-2"
          />
          {selectedCrypto}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <p className="text-gray-500 text-sm mt-2">WDfacsvcs51....gGRHBnm4xoOf</p>

        {/* Menú desplegable */}
        {isDropdownOpen && (
          <div className="absolute top-12 bg-gray-800 rounded-lg shadow-lg w-48 z-10">
            {cryptocurrencies.map((crypto, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedCrypto(crypto.name);
                  setIsDropdownOpen(false);
                }}
                className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
              >
                <img src={crypto.image} alt={crypto.name} className="h-5 w-5 mr-2" />
                <span>{crypto.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contenido principal */}
      <div className="h-1/2 w-full">
        <div className="text-center w-full px-4 mb-4 flex justify-center">
          <div></div>
          <div className="justify-center w-full my-20">
            <h2 className="text-5xl font-semibold text-center">356.67</h2>
            <div className="flex items-center justify-center py-2">
          <img
            src={cryptocurrencies.find((crypto) => crypto.name === selectedCrypto).image}
            alt={selectedCrypto}
            className="h-5 w-5 mr-2"
          />
          <h2>1 {selectedCrypto} = $23,5 ADA</h2>
        </div>
          </div>
          <div className="mt-2">
          </div>
        </div>
      </div>

      <TecladoNumerico />

      <button
        onClick={handleConvert}
        className="w-full mt-8 bg-rojo text-white font-semibold text-lg py-4 rounded-lg hover:bg-red-600"
      >
        Share
      </button>
    </div>
  );
};

export default BuyCrypto2;