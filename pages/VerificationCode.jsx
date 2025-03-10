import React, { useState } from "react";
import Navbar from "../component/Navbar";

function VerificationCode() {
  const [code, setcode] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlecodeInput = (number) => {
    if (code.length < 5) {
      setcode(code + number); // Agregar el dígito al code
      setActiveIndex(code.length); // Activar la casilla actual
      setTimeout(() => setActiveIndex(null), 500); // Desactivar la casilla después de 500ms
    }
  };

  const handleCreatecode = () => {
    if (code.length === 5) {
      alert(`Code creado: ${code}`);
    } else {
      alert("El Code debe tener 5 dígitos.");
    }
  };

  const handleSkip = () => {
    alert("Has omitido la creación del code.");
  };

  const showKeyboard = () => {
    setIsKeyboardVisible(true);
  };

  const handleDelete = () => {
    setcode(code.slice(0, -1));
    setActiveIndex(code.length - 1); // Activar la casilla anterior
    setTimeout(() => setActiveIndex(null), 500);
  };

  return (
    <div className="min-h-screen flex flex-col p-4">
      <Navbar/>

      <h1 className="text-2xl font-bold text-white mt-8">Authentication Code</h1>
      <p className="text-gray-500 mt-2 pr-4">Enter 5-digit code we just texted to your phone number, +1 8976889043</p>

      <div
        className={`flex flex-col items-center my-24 ${
          isKeyboardVisible ? "fixed top-32 left-0 right-0" : ""
        }`}
      >
        <div className="flex space-x-2 my-4">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              onClick={showKeyboard}
              className={`w-16 h-16 rounded-lg border-2 ${
                activeIndex === index ? "border-red-500" : "bg-gray-800"
              } flex items-center justify-center cursor-pointer transition-colors`}
            >
              {code[index] && <div className="w-4 h-4 bg-white rounded-full" />}
            </div>
          ))}
        </div>

        <div className="text-sm p-4 w-full text-gray-500">
          <h2 className="text-start">Use different phone number</h2>
        </div>

        {/* Botones de acción */}
        {isKeyboardVisible && (
          <div className="w-full flex flex-col space-y-2 mt-4 px-4">
            <button
              onClick={handleCreatecode}
              className="w-full bg-rojo text-white font-bold py-4 rounded-lg hover:bg-red-600 transition"
            >
              Continue
            </button>
            <button
              onClick={handleSkip}
              className="w-full text-rojo bg-gray-800 font-bold py-4 rounded-lg hover:bg-red-50 transition"
            >
              Resent Code
            </button>
          </div>
        )}
      </div>

      {/* Teclado numérico */}
      {isKeyboardVisible && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 border-t">
          <div className="grid grid-cols-3 gap-2">
            {/* Fila 1 */}
            {[
              { number: "1", letters: "" },
              { number: "2", letters: "ABC" },
              { number: "3", letters: "DEF" },
            ].map((key, index) => (
              <button
                key={index}
                onClick={() => handlecodeInput(key.number)}
                className="p-2 bg-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition"
              >
                <span className="text-xl font-bold text-white">
                  {key.number}
                </span>
                {key.letters && (
                  <span className="text-xs text-white">{key.letters}</span>
                )}
              </button>
            ))}

            {/* Fila 2 */}
            {[
              { number: "4", letters: "GHI" },
              { number: "5", letters: "JKL" },
              { number: "6", letters: "MNO" },
            ].map((key, index) => (
              <button
                key={index}
                onClick={() => handlecodeInput(key.number)}
                className="p-2 bg-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition"
              >
                <span className="text-xl font-bold text-white">
                  {key.number}
                </span>
                {key.letters && (
                  <span className="text-xs text-white">{key.letters}</span>
                )}
              </button>
            ))}

            {/* Fila 3 */}
            {[
              { number: "7", letters: "PQRS" },
              { number: "8", letters: "TUV" },
              { number: "9", letters: "WXYZ" },
            ].map((key, index) => (
              <button
                key={index}
                onClick={() => handlecodeInput(key.number)}
                className="p-2 bg-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition"
              >
                <span className="text-xl font-bold text-white">
                  {key.number}
                </span>
                {key.letters && (
                  <span className="text-xs text-white">{key.letters}</span>
                )}
              </button>
            ))}

            <div className="col-span-1"></div>
            <button
              onClick={() => handlecodeInput("0")}
              className="p-2 bg-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition"
            >
              <span className="text-xl font-bold text-white">0</span>
            </button>
            <button
              onClick={handleDelete}
              className="p-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Botones de acción (abajo inicialmente) */}
      {!isKeyboardVisible && (
        <div className="fixed bottom-0 left-0 right-0 p-4">
          <button
            onClick={handleCreatecode}
            className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition"
          >
            Create code
          </button>
          <button
            onClick={handleSkip}
            className="w-full mt-2 text-red-500 bg-gray-800 font-bold py-3 rounded-lg hover:bg-red-50 transition"
          >
            Skip for Now
          </button>
        </div>
      )}
    </div>
  );
}

export default VerificationCode;