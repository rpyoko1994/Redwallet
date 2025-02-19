import React, { useState } from "react";

function Started() {
  // Estado para la contraseña y la frase seleccionada
  const [selectedPhrase, setSelectedPhrase] = useState("");

  // Frase de recuperación (12 palabras)
  const recoveryPhrase = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  // Función para manejar la selección de una frase
  const handlePhraseSelect = (phrase) => {
    setSelectedPhrase(phrase);
  };


  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="p-4 w-full max-w-md mb-14">
        <div className="mb-8 flex flex-col mt-12">
          <h1 className="text-2xl text-white font-bold text-center mt-8"> {/* Ajusta mt-14 a mt-8 o el valor que prefieras */}
          Write your secret recovery
          </h1>
        </div>

        {/* Lista de palabras de recuperación (en filas de 3) */}
        <div className="h-80 flex items-start w-full">
          <div className="grid grid-cols-3 gap-2 mb-6 mt-4 w-full">
            {recoveryPhrase.map((word, index) => (
              <button
                key={index}
                onClick={() => handlePhraseSelect(word)}
                className={`p-2 rounded-lg text-sm font-mono flex items-center justify-start ${
                  selectedPhrase === word
                    ? "bg-rojo text-white" // Estilo cuando está seleccionada
                    : "bg-gray-800 text-gray-400 border-2 hover:bg-gray-100" // Estilo por defecto
                }`}
              >
                <span className="mr-2">{index + 1}.</span>
              </button>
            ))}
          </div>
        </div>

        {/* Botón "Continue" */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4"> {/* Centrar el botón */}
          <button
            onClick={"/faceid"}
            className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-400 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Started;