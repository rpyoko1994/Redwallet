import React, { useState } from "react";
import MenuInferior from "../component/MenuInferior";

const Home = () => {
  const [showAmount, setShowAmount] = useState(true);
  const [selectedNFT, setSelectedNFT] = useState(null);

  return (
    <div className="p-6 text-white min-h-screen">
      {/* Total Asset Value Section */}
      <div className="rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-lg text-gray-500">Total asset value</h1>
          <div className="flex items-center">
            <p className="text-4xl font-bold mt-2">
              {showAmount ? "$56,890.00" : "******"}
            </p>
            <button
              onClick={() => setShowAmount(!showAmount)}
              className="p-2 ml-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-sm text-green-500 flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            2.35% (+1.50%) <span className="text-gray-300">from last week</span>
          </h2>
        </div>
        <button className="p-2 bg-gray-800 text-white h-14 w-14 rounded-xl ml-4">
          <img
            src="../src/assets/cartera.svg"
            alt="cartera"
            className="w-10 h-8 flex items-center"
          />
        </button>
      </div>

      {/* My Portfolio Section */}
      <div className="mt-6 flex justify-between items-center py-4">
        <h2 className="text-xl font-semibold">My Portfolio</h2>
        <button className="text-red-500">Sell all</button>
      </div>

      {/* Contenedores superpuestos */}
      <div className="relative w-full max-w-md mx-auto h-40">
        {/* Contenedor superior (h-40) */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md h-40">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="../src/assets/Crypto.svg"
                alt="nft"
                className="w-10 h-10"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Crypto</h3>
                <p className="text-sm text-gray-500">10 Assets</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium">$20,321.00</p>
              <p className="text-sm text-green-500 flex items-center text-end justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                0.24%
              </p>
            </div>
          </div>
        </div>

        {/* Contenedor inferior (superpuesto, h-40 y 50% arriba del superior) */}
        <div className="absolute -bottom-20 left-0 right-0 azulito p-6 rounded-lg shadow-md h-40 z-10">
          {/* Primera fila */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="../src/assets/Stock.svg"
                alt="nft"
                className="w-10 h-10 mb-2"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">NFTs</h3>
                <p className="text-sm text-gray-400">5 Assets</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium">$5,687.99</p>
              <span className="text-sm text-gray-400 flex items-center text-end justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 mr-1 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                1.35%
              </span>
            </div>
          </div>

          {/* Segunda fila */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="">
                <p className="text-sm text-gray-400">Profits</p>
                <h3 className="text-lg">$2,567.00</h3>
              </div>
            </div>
            <button className="bg-white text-rojo px-6 py-2 text-lg font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Crypto Buttons Section */}
      <div className="flex justify-center space-x-20 mt-28">
        {/* Botón con imagen y texto "Crypto" */}
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center bg-gray-800 rounded-full w-16 h-16">
            <img
              src="../src/assets/Crypto2.svg"
              alt="Stock Icon"
              className="w-6 h-6"
            />
          </button>
          <span className="mt-2 text-sm">Crypto</span>
        </div>

        {/* Segundo botón con imagen y texto "Crypto" */}
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center bg-gray-800 rounded-full w-16 h-16">
            <img
              src="../src/assets/NFTs.svg"
              alt="Stock Icon"
              className="w-6 h-6"
            />
          </button>
          <span className="mt-2 text-sm">Crypto</span>
        </div>
      </div>

      {/* Watchlist Section */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Watchlist</h2>
          <a href="#" className="text-rojo">
            Edit Watchlist
          </a>
        </div>
        <div className="mt-4 flex space-x-1 justify-items-stretch w-full text-sm">
          {["Crypto Assets", "US Stocks", "Gold", "NFTs"].map(
            (label, index) => (
              <button
                key={index}
                className={`px-3.5 flex bg-gray-800 py-2 rounded-xl ${
                  selectedNFT === index ? "text-rojo" : "text-gray-500"
                }`}
                onClick={() => setSelectedNFT(index)}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      {/* Transaction Section */}
      <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
            <img
              src="../src/assets/Bitcoin.svg"
              alt="cardano"
              className="w-full h-full"
            />
          </div>
          <div className="text-start">
            <div className="text-white font-semibold">Bitcon</div>
            <div className="text-gray-500">Btc</div>
          </div>
        </div>
        <div className="text-start">
          <div className="text-white font-semibold">$19,075.00</div>
          <div className="text-gray-500">
            {" "}
            <p className="text-sm text-green-500 flex items-center text-end justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              0.35%
            </p>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <MenuInferior />
    </div>
  );
};

export default Home;
