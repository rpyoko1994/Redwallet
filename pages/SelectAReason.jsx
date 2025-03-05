import React, { useState } from "react";
import Navbar from "../component/Navbar";

function SelectAReason() {
  // Estado para manejar las opciones seleccionadas
  const [selectedReasons, setSelectedReasons] = useState([]);

  // Función para manejar la selección/deselección de una opción
  const handleReasonSelect = (reason) => {
    if (selectedReasons.includes(reason)) {
      // Si ya está seleccionada, la quitamos
      setSelectedReasons(selectedReasons.filter((r) => r !== reason));
    } else {
      // Si no está seleccionada, la agregamos
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  // Función para manejar el clic en "Continue"
  const handleContinue = () => {
    if (selectedReasons.length === 0) {
      alert("Por favor, selecciona al menos una razón antes de continuar.");
    } else {
      alert(`Razones seleccionadas: ${selectedReasons.join(", ")}`);
      // Aquí podrías redirigir al usuario o realizar otra acción
    }
  };

  const progressBar = (
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div className="bg-rojo h-1 rounded-full w-4/6"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col p-4">
        <Navbar progressBar={progressBar} />

      <h1 className="text-2xl font-bold text-gray-100 mt-4">
        What do you want to use Financial for?
      </h1>

      {/* Descripción */}
      <p className="text-gray-500 mt-2 pr-6">
      We need to know this for regulatory reasons. And also, we need curious!
      </p>

      {/* Opciones de selección */}
      <div className="mt-6 space-y-4 p-3">
        {/* Categoría: Banking */}
        <div className="space-y-2 py-4">
          <h2 className="text-lg font-semibold text-white py-2">Banking</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Transfers",
              "Scheduling Payments",
              "Get salary early",
              "Budgeting",
              "Cashback",
              "View account in one place",
            ].map((reason, index) => (
              <button
                key={index}
                onClick={() => handleReasonSelect(reason)}
                className={`p-2 pr-6 border-gray-800 bg-gray-800 border-2 rounded-lg text-left flex-grow ${
                  selectedReasons.includes(reason)
                    ? "border-rojo text-rojo"
                    : "border-gray-200 text-gray-400"
                } hover:border-red-400 hover:text-red-400 transition`}
              >
                {reason}
              </button>
            ))}
          </div>
        </div>

        {/* Categoría: Investments */}
        <div className="space-y-2 py-4">
          <h2 className="text-lg font-semibold text-white py-2">Investments</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Invest in gold",
              "Invest in cryptocurrency",
              "Invest in stocks",
              "Trading",
              "NFTs",
            ].map((reason, index) => (
              <button
                key={index}
                onClick={() => handleReasonSelect(reason)}
                className={`p-2 border-gray-800 bg-gray-800 border-2 rounded-lg text-left flex-grow ${
                  selectedReasons.includes(reason)
                  ? "border-rojo text-rojo"
                  : "border-gray-200 text-gray-400"
              } hover:border-red-400 hover:text-red-400 transition`}
              >
                {reason}
              </button>
            ))}
          </div>
        </div>

        {/* Categoría: Global Spending */}
        <div className="space-y-2 py-4">
          <h2 className="text-lg font-semibold text-white py-2">Global Spending</h2>
          <div className="flex flex-wrap gap-2">
            {["Spending abroad", "Travel insurance", "Hotel booking","Foreign exchanges",].map((reason, index) => (
              <button
                key={index}
                onClick={() => handleReasonSelect(reason)}
                className={`p-2 border-gray-800 bg-gray-800 border-2 rounded-lg text-left flex-grow ${
                  selectedReasons.includes(reason)
                  ? "border-rojo text-rojo"
                  : "border-gray-200 text-gray-400"
              } hover:border-red-400 hover:text-red-400 transition`}
              >
                {reason}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Botón "Continue" */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button
          onClick={handleContinue}
          className="w-full bg-rojo text-white font-bold py-3 rounded-lg hover:bg-red-600 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SelectAReason;