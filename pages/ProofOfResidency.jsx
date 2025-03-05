import React, { useState } from "react";
import Navbar from "../component/Navbar"; // Asegúrate de que la ruta sea correcta

function ProofOfResidency() {
  // Estado para manejar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState("");

  // Función para manejar cambios en los radio buttons
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Función para manejar el clic en "Continue"
  const handleContinue = () => {
    if (!selectedOption) {
      alert("Por favor, selecciona una opción antes de continuar.");
    } else {
      alert(`Opción seleccionada: ${selectedOption}`);
      // Aquí podrías redirigir al usuario o realizar otra acción
    }
  };

  // Barra de progreso para ProofOfResidency
  const progressBar = (
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div className="bg-rojo h-1 rounded-full w-5/5"></div>{" "}
      {/* Ajusta el ancho según el progreso */}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar progressBar={progressBar} />

      <div className="w-full max-w-4xl mx-auto p-4 mb-4">
        <h1 className="text-3xl font-bold text-white">Select and upload</h1>
        <p className=" text-gray-500 mt-2">
          We need this to confirm you reside in United States and verify who you
          are. Data is processed securely.
        </p>
      </div>

      {/* Contenido principal */}
      <div className="flex-grow flex items-start justify-center p-4">
        <div className="w-full max-w-4xl border-2 bg-gray-800 border-gray-800 rounded-2xl p-2 flex flex-col">
          <div
            className={`w-full h-24 my-2 border-gray-600 rounded-2xl shadow-lg flex items-center justify-between p-6 border-2 ${
              selectedOption === "Identity"
                ? "border-red-500 text-rojo ring-red-500 focus:ring-red-500"
                : "border-gray-600"
            }`}
          >
            <img
              src="../src/assets/Ci.svg"
              alt="Palo abajo"
              className="w-14 h-14 object-cover rounded-full"
            />
            <h2 className="text-medium  font-bold text-center">Identity Card</h2>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="options"
                value="Identity"
                checked={selectedOption === "Identity"}
                onChange={handleRadioChange}
                className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
              />
            </label>
          </div>
          <div
            className={`w-full h-24 my-2 border-gray-600 rounded-2xl shadow-lg flex items-center justify-between p-6 border-2 ${
              selectedOption === "Digital"
                ? "border-red-500 text-rojo ring-red-500 focus:ring-red-500"
                : "border-gray-600"
            }`}
          >
            <img
              src="../src/assets/digital-doc.svg"
              alt="Pelota abajo"
              className="w-14 h-14 object-cover rounded-full"
            />
            <h2 className="text-medium font-bold text-center">My Digital Document</h2>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="options"
                value="Digital"
                checked={selectedOption === "Digital"}
                onChange={handleRadioChange}
                className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
              />
            </label>
          </div>

          <div
            className={`w-full h-24 my-2 border-gray-600 rounded-2xl shadow-lg flex items-center justify-between p-6 border-2 ${
              selectedOption === "Passport"
                ? "border-red-500 text-rojo ring-red-500 focus:ring-red-500"
                : "border-gray-600"
            }`}
          >
            <img
              src="../src/assets/pasaporte.svg"
              alt="Passport"
              className="w-14 h-14 object-cover rounded-full"
            />
            <h2 className="text-medium font-bold text-center">Passport</h2>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="options"
                value="Passport"
                checked={selectedOption === "Passport"}
                onChange={handleRadioChange}
                className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="w-full fixed bottom-0 p-4">
        <button
          onClick={handleContinue}
          className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-600 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ProofOfResidency;