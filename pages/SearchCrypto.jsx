import React, { useState } from "react";

const HistoryCrypto = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isNumericKeyboard, setIsNumericKeyboard] = useState(false); // Estado para cambiar entre teclado QWERTY y numérico
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false); // Estado para mostrar/ocultar el teclado
  const [isShiftActive, setIsShiftActive] = useState(false); // Estado para el botón Shift

  // Función para borrar el término de búsqueda
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Función para manejar la entrada del teclado
  const handleKeyPress = (key) => {
    if (key === "⌫") {
      setSearchTerm((prev) => prev.slice(0, -1)); // Borrar último carácter
    } else if (key === "Go") {
      // Lógica para el botón "Go"
      console.log("Buscar:", searchTerm);
    } else if (key === " ") {
      setSearchTerm((prev) => prev + " "); // Agregar espacio
    } else if (key === "Shift") {
      setIsShiftActive((prev) => !prev); // Alternar estado de Shift
    } else {
      setSearchTerm((prev) => prev + (isShiftActive ? key.toUpperCase() : key)); // Agregar carácter al término de búsqueda
    }
  };

  // Teclado QWERTY
  const qwertyKeyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  // Teclado numérico
  const numericKeyboard = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "⌫"],
  ];

  return (
    <div className="min-h-screen flex flex-col  text-white">
      <div className="pb-28">
        <div className="mb-6 py-8 px-6 border-b border-gray-800 flex items-center">
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsKeyboardVisible(true)} // Mostrar teclado al enfocar
            onBlur={() => setIsKeyboardVisible(false)} // Ocultar teclado al desenfocar
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="ml-2 p-2 text-gray-500 hover:text-white"
            >
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Lista de transacciones */}
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

          <div className="px-6 degrade">
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
          <div className="px-6 degrade">
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
          </div>
        </div>

        {/* Gradiente en la parte inferior */}
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </div>

      {/* Teclado dinámico */}
      {isKeyboardVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 ">
          {/* Teclado QWERTY o numérico */}
          <div className="flex flex-col space-y-2 mb-2">
            {(isNumericKeyboard ? numericKeyboard : qwertyKeyboard).map(
              (row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center space-x-2">
                  {row.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleKeyPress(key)}
                      className={`p-3 bg-gray-700 rounded-lg text-white flex-1 ${
                        key === "Shift" || key === "⌫" ? "w-auto" : ""
                      }`}
                    >
                      {key === "Shift" ? (
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
                            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                          />
                        </svg>
                      ) : (
                        isShiftActive && !isNumericKeyboard ? key.toUpperCase() : key
                      )}
                    </button>
                  ))}
                </div>
              )
            )}
          </div>

          {/* Fila inferior: Botón Números, Espacio y Go */}
          <div className="flex justify-between">
            {/* Botón Números */}
            <button
              onClick={() => setIsNumericKeyboard(!isNumericKeyboard)}
              className="w-1/4 p-2 bg-gray-700 rounded-lg text-white"
            >
              {isNumericKeyboard ? "ABC" : "123"}
            </button>

            {/* Botón Espacio */}
            <button
              onClick={() => handleKeyPress(" ")}
              className="w-1/2 mx-2 p-2 bg-gray-700 rounded-lg text-white"
            >
              Espacio
            </button>

            {/* Botón Go */}
            <button
              onClick={() => handleKeyPress("Go")}
              className="w-1/4 p-2 bg-red-500 rounded-lg text-white"
            >
              Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryCrypto;