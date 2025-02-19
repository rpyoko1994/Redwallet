import React, { useState } from "react";

function GetStarted() {
  // Estado para la contraseña y la frase seleccionada
  const [password, setPassword] = useState("");
  const [selectedPhrase, setSelectedPhrase] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  // Frase de recuperación (12 palabras)
  const recoveryPhrase = [
    "cashback",
    "account",
    "holanda",
    "obscure",
    "color",
    "acoustic",
    "require",
    "display",
    "capital",
    "summing",
    "natural",
    "music",
  ];

  // Función para manejar la selección de una frase
  const handlePhraseSelect = (phrase) => {
    setSelectedPhrase(phrase);
  };

  // Función para manejar el clic en "Continue"
  const handleContinue = () => {
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else if (!selectedPhrase) {
      setError("Please select a recovery phrase.");
    } else {
      setError("");
      alert(`Selected phrase: ${selectedPhrase}\nPassword saved successfully!`);
      // Aquí podrías redirigir al usuario o realizar otra acción
    }
  };

  // Función para alternar entre mostrar/ocultar la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="p-4 w-full max-w-md mb-14">
        <div className="h-36 flex flex-col">
          <h1 className="text-2xl text-white font-bold text-center mt-14">
            Save your secret recovery
          </h1>
          <p className="text-center text-gray-500 mt-2">
            This is your Secret Recovery Phrase. Write it down and keep it safe now!
          </p>
        </div>

        {/* Lista de palabras de recuperación (en filas de 3) */}
        <div className="h-80 flex items-end">
          <div className="grid grid-cols-3 gap-2 mb-6 mt-4">
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
                <span>{word}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Campo de contraseña con ícono de ojo */}
        <div className="h-20"></div>

        <div className="h-24 flex items-end">
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"} // Cambia el tipo de input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-800 text-gray-200 h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 pr-10" // Añade padding a la derecha para el ícono
              placeholder="Enter your password"
            />
            {/* Ícono de ojo (SVG inline con Tailwind) */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200"
            >
              {showPassword ? (
                // Ícono de ojo cerrado
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                    clipRule="evenodd"
                  />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              ) : (
                // Ícono de ojo abierto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mensaje de error */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Botón "Continue" */}
        <div className="h-40 items-center flex">
          <button
            onClick={handleContinue}
            className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-400 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;