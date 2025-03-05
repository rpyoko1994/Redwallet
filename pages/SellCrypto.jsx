import React, { useState } from "react";

const SellCrypto = () => {

  const handleConvert = () => {
    const conversionRate = 2; // Tasa de conversión ficticia
    setToAmount(fromAmount * conversionRate);
  };

  const handleNumberClick = (number) => {
    if (number === "delete") {
      setFromAmount((prev) => prev.slice(0, -1));
    } else {
      setFromAmount((prev) => prev + number);
    }
  };

   const [activeButton, setActiveButton] = useState("100%");
  
    // Función para manejar el clic en los botones
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
  


  return (
    <div className="p-4 lineas text-white min-h-screen">
     <div className="h-1/2 w-full">
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
          <h2 className="text-white text-lg font-semibold">Sell ADA</h2>
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
      <div>
      <div className="flex items-center justify-center py-6 mt-6">
        <img src="../src/assets/cardano.svg" className=" h-5 w-5 mr-2"></img>
        <h2 className=""> 1 ADA = $0,35</h2>

      </div>
        <div className="text-center w-full px-4 mb-4 flex justify-between">
          <div></div>
          <div className="justify-center w-full ml-10">
          <h2 className="text-5xl font-semibold text-center">250</h2>
          <p className="text-gray-500 text-sm mt-2 text-center ">Asset balance 250 ADA</p>    
          </div>   
          <div className="mt-2">
            <button
              className="p-2 bg-gray-800 text-rojo rounded-full hover:bg-red-600 rotate-90"
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
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
          </div>
        </div>
        </div>
         {/* Botones de tiempo */}
      <div className="flex space-x-2 mt-24 py-4 justify-between">
        {["25%", "50%", "75%", "100%", ].map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => handleButtonClick(buttonName)}
            className={`px-6 py-2 rounded-lg ${
              activeButton === buttonName
                ? "bg-rojo text-white" // Fondo rojo cuando está activo
                : "bg-gray-800 text-gray-400" // Sin fondo cuando no está activo
            }`}
          >
            {buttonName}
          </button>
        ))}
      </div>
        {/* Teclado numérico */}
        <div className="grid grid-cols-3 gap-2 my-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "delete"].map((item) => (
            <button
              key={item}
              onClick={() => handleNumberClick(item)}
              className={`p-3 rounded-lg shadow text-center font-bold text-2xl ${
                item === "delete" ? "text-white" : ""
              }`}
            >
              {item === "delete" ? "⌫" : item}
            </button>
          ))}
        </div>
      </div>

      {/* Botón de conversión al final de la página */}
      <button
        onClick={handleConvert}
        className="w-full mt-8 bg-rojo text-white font-semibold text-lg py-4 rounded-lg hover:bg-red-600"
      >
        Sell
      </button>
    
    </div>
  );
};

export default SellCrypto;