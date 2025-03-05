import React, { useState } from "react";

const CryptoDetailChart = () => {
  // Estado para manejar el botón activo
  const [activeButton, setActiveButton] = useState("24H");

  // Función para manejar el clic en los botones
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="text-white p-4 rounded-lg shadow-lg">
      <nav className="py-4 flex justify-between items-center">
        {/* Flecha de atrás */}
        <button className="text-white hover:text-gray-300">
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

        {/* Botones de iconos a la derecha */}
        <div className="flex space-x-4">
          {/* Primer ícono */}
          <button className="text-white hover:text-gray-300">
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
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3"
              />
            </svg>
          </button>

          {/* Segundo ícono */}
          <button className="text-white hover:text-gray-300">
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
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
          </button>

          {/* Tercer ícono */}
          <button className="text-white hover:text-gray-300">
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex justify-between items-center mb-4">
        {/* Textos a la izquierda */}
        <div>
          <h1 className="text-sm font-bold text-gray-500">Polygon (MATIC)</h1>
          <div className="text-3xl font-semibold mb-2">$0.8269</div>
          <div className="text-green-500 text-sm">
            0.54% (+1.20%) <span className="text-gray-500"> Past 24 hours</span>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="ml-4">
          <img
            src="../src/assets/Polygon.svg" // Ruta de la imagen
            alt="MATIC Logo"
            className="w-14 h-14 rounded-full" // Ajusta el tamaño de la imagen
          />
        </div>
      </div>

      <div className="rounded-lg mb-4">
        {/* Placeholder for the candle chart */}
        <div className="h-48 bg-gray-700 rounded-lg">
          <img
            src="../src/assets/velas.png"
            alt="Candle Chart"
            className="mb-8"
          />
        </div>
      </div>

      {/* Botones de tiempo */}
      <div className="flex space-x-2 mt-14 py-4 justify-between">
  {["24H", "1W", "1M", "1Y", "ALL"].map((buttonName) => (
    <button
      key={buttonName}
      onClick={() => handleButtonClick(buttonName)}
      className={`px-4 py-2 rounded-lg ${
        activeButton === buttonName
          ? "bg-rojo text-white"
          : "bg-transparent text-gray-400"
      }`}
    >
      {buttonName}
    </button>
  ))}

  {/* Botón con imagen después del "ALL" */}
  <button
    onClick={() => handleButtonClick("Filter")} // Puedes cambiar la función según sea necesario
    className="px-1 h-14 py-2 rounded-lg bg-transparent text-gray-400"
  >
    <img
      src="../src/assets/Tab.svg" // Ruta de la imagen
      alt="Filter Icon"
      className="w-full h-full" // Ajusta el tamaño de la imagen según sea necesario
    />
  </button>
   </div>

      {/* Market Statistics */}
      <div className="p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4 flex">
          Market Statistics{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 mt-2 pl-1 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Primera columna */}
          <div className="space-y-4 pb-2">
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400">Open</span>
              <div className="text-sm">0.8321</div>
            </div>
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400 ">High</span>
              <div className="text-sm">0.8393</div>
            </div>
          </div>

          <div className="space-y-4 pb-2">
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400">Volume</span>
              <div className="text-sm">$220.00M</div>
            </div>
            <div className="flex justify-between p-2 border-b border-gray-700">
              <span className="text-sm text-gray-400">Avg. Vol</span>
              <div className="text-sm">$57.19M</div>
            </div>
          </div>

          <div className="space-y-4 pb-4">
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400">Low</span>
              <div className="text-sm">$0.8141</div>
            </div>
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400 ">52W Range</span>
              <div className="text-sm">0.8322</div>
            </div>
          </div>

          {/* Segunda columna */}
          <div className="space-y-4 pb-4">
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400">Mkt Cap</span>
              <div className="text-sm">$7.8318.M</div>
            </div>
            <div className="flex justify-between border-b border-gray-700 p-2">
              <span className="text-sm text-gray-400 ">Supply</span>
              <div className="text-sm">$8.128 MATIC</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14"></div>

      {/* Botones de compra/venta al final */}
      <div className="h-28 fixed bottom-0 left-0 right-0 degradado-pie p-4 flex justify-around items-center">
        <div className="flex space-x-4 w-full">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg flex-1">
            Buy
          </button>
          <button className="bg-red-400 text-white px-6 py-3 rounded-lg flex-1">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetailChart;