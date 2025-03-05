import React, { useState } from "react";

const PortfolioOfCrypto = () => {
  // Estado para controlar si el monto está visible o no
  const [isAmountVisible, setIsAmountVisible] = useState(true);

  // Estado para manejar la búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para alternar la visibilidad del monto
  const toggleAmountVisibility = () => {
    setIsAmountVisible(!isAmountVisible);
  };

  // Datos de las criptomonedas
  const cryptocurrencies = [
    {
      id: 1,
      name: "Bitcoin",
      fullName: "BTC",
      price: "$13,029.46",
      amount: "0.678564 BTC",
      change: "+0.35%",
      icon: "../src/assets/bitcoin.svg",
      changeType: "positive",
    },
    {
      id: 2,
      name: "MATIC",
      fullName: "Polygon",
      price: "$1,084.55",
      amount: "1.300 MATIC",
      change: "-0.10%",
      icon: "../src/assets/Polygon.svg",
      changeType: "negative",
    },
    {
      id: 3,
      name: "SOL",
      fullName: "Solana",
      price: "$3,672.28",
      amount: "133.99 SOL",
      change: "+0.10%",
      icon: "../src/assets/SOL.svg",
      changeType: "positive",
    },
    {
      id: 4,
      name: "ADA",
      fullName: "Cardano",
      price: "$87.68",
      amount: "250 ADA",
      change: "+2.50%",
      icon: "../src/assets/cardano.svg",
      changeType: "positive",
    },
  ];

  // Filtrar criptomonedas basado en el término de búsqueda
  const filteredCryptos = cryptocurrencies.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white min-h-screen">
      <div className="h-2/6 degradado-rojo p-4">
        <div className="lineas">
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-6 pt-4">
            {/* Botón de Atrás */}
            <button className="text-white hover:text-red-400">
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>

            {/* Botones de Chart y Book */}
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white ">
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
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="text-white hover:text-red-400">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Sección de Información */}
          <div className="mb-6">
            <p className=" text-sm mb-2">Your total balance</p>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {/* Monto visible o oculto */}
                <span className="text-3xl font-semibold">
                  {isAmountVisible ? "$8,786.55" : "******"}
                </span>
                {/* Botón de ojo para alternar visibilidad */}
                <button
                  onClick={toggleAmountVisibility}
                  className=" text-white hover:text-red-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isAmountVisible ? (
                      // Ícono de ojo abierto
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"
                      />
                    ) : (
                      // Ícono de ojo cerrado
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <div className="bg-green-500 h-10 w-36 rounded-full text-sm text-center flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-white mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                +5.10% (+0,03%)
              </div>
            </div>
          </div>

          {/* Sección de Botones Redondos */}
          <div className="h-2/6 flex flex-col justify-center items-center mb-2 ">
            <div className="flex space-x-8 pt-8 pb-2">
              <div className="flex flex-col items-center">
                <button className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center">
                  <img src="../src/assets/logout.svg" className="w-6 h-6"></img>
                </button>
                <p className=" text-sm mt-2">Send</p>
              </div>

              <div className="flex flex-col items-center">
                <button className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center">
                  <img
                    src="../src/assets/logout2.svg"
                    className="w-6 h-6"
                  ></img>
                </button>
                <p className="text-sm mt-2">Receive</p>
              </div>

              <div className="flex flex-col items-center">
                <button className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center">
                  <img
                    src="../src/assets/chart-bar.svg"
                    className="w-7 h-"
                  ></img>
                </button>
                <p className="text-sm mt-2">Buy/Sell</p>
              </div>

              <div className="flex flex-col items-center">
                <button className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center">
                  <img
                    src="../src/assets/exchange.svg"
                    className="w-8 h-8"
                  ></img>
                </button>
                <p className=" text-sm mt-2">Exchange</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buscador y Título */}
      <div className="px-6 pt-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search asset..."
            className="w-full p-4 pl-12 rounded-xl bg-gray-800 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-gray-400 py-3 px-6">Portfolio</h2>

      <div>
        {filteredCryptos.map((crypto) => (
          <div key={crypto.id} className="px-6">
            <div className="w-full border-2 degrade border-gray-800 rounded-2xl p-4 flex items-center justify-between my-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4">
                  <img
                    src={crypto.icon}
                    alt={crypto.name}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="text-start">
                  <div className="text-white font-semibold">{crypto.name}</div>
                  <div className="text-gray-500">
                    {crypto.fullName} · {crypto.price}
                  </div>
                </div>
              </div>
              <div className="text-start">
                <div className="font-semibold">{crypto.amount}</div>
                <div
                  className={`flex items-center ${
                    crypto.changeType === "positive"
                      ? "text-green-300"
                      : "text-red-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-4 mr-2 ${
                      crypto.changeType === "positive"
                        ? "text-green-300"
                        : "text-red-500 rotate-180"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  {crypto.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PortfolioOfCrypto;