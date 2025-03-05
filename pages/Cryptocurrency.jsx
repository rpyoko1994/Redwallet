import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";
import MenuInferior from "../component/MenuInferior";

const Cryptocurrency = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeButton, setActiveButton] = useState(0); // Estado para el botón activo
  const [activeSection, setActiveSection] = useState("market");

  // Datos de ejemplo para los botones del carrusel
  const buttons = [
    { label: "Crypto Asset", icon: "Crypto2.svg" },
    { label: "US Stock", icon: "Stocky.svg" },
    { label: "NFTs", icon: "NFTs.svg" },
    { label: "Gold", icon: "Gold.svg" },
    { label: "US Stock", icon: "Stocky.svg" },
  ];

  // Datos de ejemplo para los contenedores del carrusel
  const tradingItems = [
    {
      image: "SHIBA.svg",
      titleTop: "SHIB",
      subtitleTop: "Shiba Inu",
      titleBottom: "$0.09854",
      subtitleBottom: "2.03%",
      graph: "Chart.svg",
    },
    {
      image: "cardano.svg",
      titleTop: "ADA",
      subtitleTop: "Cardano",
      titleBottom: "$0.3391",
      subtitleBottom: "0.95%",
      graph: "Chart-2.svg",
    },
    {
      image: "ethereum.svg",
      titleTop: "ETH",
      subtitleTop: "Ethereum",
      titleBottom: "Price",
      subtitleBottom: "$1,600",
      graph: "Chart.svg",
    },
  ];

  return (
    <div className="min-h-screen  text-white">
      {/* Navbar */}
      <NavbarRetroceso title="Market" />

      {/* Buscador */}
      <div className="p-4 border-b border-gray-800">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Carrusel de botones */}
      <div className="p-4 overflow-x-auto">
        <div className="flex space-x-2" style={{ minWidth: "max-content" }}>
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => setActiveButton(index)} // Cambia el botón activo al hacer clic
              className={`px-2 py-2 rounded-lg whitespace-nowrap flex items-center space-x-2 ${
                activeButton === index
                  ? "bg-red-500 text-white" // Estilo para el botón activo
                  : "bg-gray-800 text-white" // Estilo para los botones inactivos
              }`}
            >
              {/* Icono SVG */}
              <img
                src={`../src/assets/${button.icon}`}
                alt={button.label}
                className="w-5 h-5"
              />
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sección "Trading" */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Trading</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <a href="#" className="text-red-500 hover:text-red-400">
          See all
        </a>
      </div>

      {/* Carrusel de contenedores */}
      <div className="p-4 overflow-x-auto">
        <div className="flex space-x-4" style={{ minWidth: "max-content" }}>
          {tradingItems.map((item, index) => (
            <div
              key={index}
              className="w-64 p-4 degrade border-2 border-gray-800 rounded-lg flex-shrink-0"
            >
              {/* Parte superior: Imagen, título y subtítulo */}
              <div className="flex items-center">
                <img
                  src={`../src/assets/${item.image}`}
                  alt={item.titleTop}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <div className="text-white font-semibold">
                    {item.titleTop}
                  </div>
                  <div className="text-gray-500">{item.subtitleTop}</div>
                </div>
              </div>

              {/* Parte inferior: Título, subtítulo y gráfica */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">
                    {item.titleBottom}
                  </div>
                  <div className="text-gray-500">{item.subtitleBottom}</div>
                </div>
                <img
                  src={`../src/assets/${item.graph}`}
                  alt="Graph"
                  className="w-20 h-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Live Price</h2>
        </div>
        <a href="#" className="text-gray-500 hover:text-red-400">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
            Sort
          </div>
        </a>
      </div>

      <div>
        <div className="px-6 ">
          <div className="w-full border-2 degrade border-gray-800 rounded-2xl p-4 flex items-center justify-between my-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4">
                <img
                  src="../src/assets/bitcoin.svg"
                  alt="BTC"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-start">
                <div className="text-white font-semibold">BTC</div>
                <div className="text-gray-500">Bitcoin</div>
              </div>
            </div>
            <div className="text-start">
              <div className="font-semibold">$19,073.00</div>
              <div className="text-green-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 mr-2 text-green-300 transform rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                0.66%
              </div>
            </div>
          </div>
        </div>

        {/* Transacción 2 */}
        <div className="px-6 degrade">
          <div className="w-full border-2 border-gray-800 degrade rounded-2xl p-4 flex items-center justify-between my-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4">
                <img
                  src="../src/assets/Bitcoin-Cash.svg"
                  alt="ADA"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-start">
                <div className="text-white font-semibold">BNB</div>
                <div className="text-gray-500">BNB</div>
              </div>
            </div>
            <div className="text-start">
              <div className="font-semibold">$269.75</div>
              <div className="text-green-300 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 mr-2 text-green-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                0.03%
              </div>
            </div>
          </div>
        </div>

        <div className="px-6">
          <div className="w-full border-2 border-gray-800 degrade rounded-2xl p-4 flex items-center justify-between my-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4">
                <img
                  src="../src/assets/BAND.svg"
                  alt="ETH"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-start">
                <div className="text-white font-semibold">Polygon</div>
                <div className="text-gray-500">Bitcoin Cash</div>
              </div>
            </div>
            <div className="text-start">
              <div className="font-semibold">$0,7869</div>
              <div className="text-red-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 mr-2 text-red-500 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                0.13%
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="w-full border-2 border-gray-800 degrade rounded-2xl p-4 flex items-center justify-between my-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4">
                <img
                  src="../src/assets/Binance.svg"
                  alt="ETH"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div className="text-start">
                <div className="text-white font-semibold">Polygon</div>
                <div className="text-gray-500">Band Protocol</div>
              </div>
            </div>
            <div className="text-start">
              <div className="font-semibold">$0,7869</div>
              <div className="text-red-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 mr-2 text-red-500 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                0.25%
              </div>
            </div>
          </div>
          <div className="h-16"></div>
        </div>
      </div>
      <MenuInferior
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
};

export default Cryptocurrency;
