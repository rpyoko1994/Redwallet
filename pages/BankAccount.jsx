import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const BankAccount = () => {
  const [selectedOption, setSelectedOption] = useState("0");

  const handleContainerClick = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (!selectedOption) {
      alert("Por favor, selecciona una opción antes de continuar.");
    } else {
      alert(`Opción seleccionada: ${selectedOption}`);
    }
  };

  return (
    <div className="min-h-screen">
     <NavbarRetroceso title="Bank Account" />

      <div className="px-6 py-2">
        <div className="text-gray-500 text-xl font-semibold mb-4">
          Bank Account
        </div>
        <div
          className={`w-full border-2 rounded-2xl p-4 flex items-center justify-between mb-4 ${
            selectedOption === "bofa"
              ? "bg-gray-800 "
              : "border-gray-600"
          }`}
          onClick={() => handleContainerClick("bofa")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/bofa.svg" alt="Bank of America" />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Bank of American</div>
              <div className="text-gray-500">**** **** **** 8907</div>
            </div>
          </div>
        </div>

        <div
          className={`w-full border-2 rounded-2xl p-4 flex items-center justify-between mb-4 ${
            selectedOption === "Barclays"
              ? "bg-gray-800"
              : "border-gray-600"
          }`}
          onClick={() => handleContainerClick("Barclays")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/Barclays.svg" alt="Barclays" />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Barclays</div>
              <div className="text-gray-500">**** **** **** 8907</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div className="text-gray-500 text-xl font-semibold mb-4">E-Wallet</div>

        <div
          className={`w-full border-2 rounded-2xl p-4 flex items-center justify-between mb-4 ${
            selectedOption === "Paypal"
              ? "bg-gray-800 "
              : "border-gray-600"
          }`}
          onClick={() => handleContainerClick("Paypal")}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/paypal.svg" alt="Paypal" />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Paypal</div>
              <div className="text-gray-500">uiuxseju@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full fixed bottom-0 p-4 h-24 degradado">
        <button
          onClick={handleContinue}
          className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-600 transition"
        >
          Add Bank Account/E-wallet
        </button>
      </div>
    </div>
  );
};

export default BankAccount;