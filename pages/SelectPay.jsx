import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const SelectPay = () => {
  // useState dentro del componente
  const [selectedOption, setSelectedOption] = useState("0");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleContinue = () => {
    if (!selectedOption) {
      alert("Por favor, selecciona una opción antes de continuar.");
    } else {
      alert(`Opción seleccionada: ${selectedOption}`);
    }
  };

  return (
    <div className="min-h-screen ">
      <NavbarRetroceso title="Select Pay" />

      <div className="px-6 py-2">
        <div className="text-white text-xl font-semibold mb-2">
          Bank Transfer
        </div>
        <div className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between  mb-4 ${
                selectedOption === "bofa"
                  ? " text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`} 
              >
          <div className="flex items-center">
            <div className="w-10 h-10   rounded-full mr-4">
              <img src="../src/assets/bofa.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
                Bank of American
              </div>
              <div className="text-gray-500">Checked automatically</div>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value="bofa"
              checked={selectedOption === "bofa"}
              onChange={handleRadioChange}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
            />
          </label>
        </div>

        <div className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between  mb-4 ${
                selectedOption === "Barclays"
                  ? " text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`} 
              >
          <div className="flex items-center">
            <div className="w-10 h-10   rounded-full mr-4">
              <img src="../src/assets/Barclays.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
              Barclays
              </div>
              <div className="text-gray-500">Your verification status</div>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value="Barclays"
              checked={selectedOption === "Barclays"}
              onChange={handleRadioChange}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
            />
          </label>
        </div>

        <div className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between  mb-4 ${
                selectedOption === "Fargo"
                  ? " text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`} 
              >
          <div className="flex items-center">
            <div className="w-10 h-10   rounded-full mr-4">
              <img src="../src/assets/fargo.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
                Wells Fargo
              </div>
              <div className="text-gray-500">Checked automatically</div>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value="Fargo"
              checked={selectedOption === "Fargo"}
              onChange={handleRadioChange}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
            />
          </label>
        </div>

      </div>
      <div className="px-6 pb-2">
        <div className="text-white text-xl font-semibold mb-4">Credit / Debit Card</div>

        <div className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-4 ${
                selectedOption === "Visa"
                  ? " text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`} 
              >
          <div className="flex items-center">
            <div className="w-10 h-10   rounded-full mr-4">
              <img src="../src/assets/visa.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
                Visa
              </div>
              <div className="text-gray-500">**** **** **** 4567</div>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value="Visa"
              checked={selectedOption === "Visa"}
              onChange={handleRadioChange}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
            />
          </label>
        </div>

        <div className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-4 ${
                selectedOption === "Mastercard"
                  ? " text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`} 
              >
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full mr-4">
              <img src="../src/assets/mastercard.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
              Mastercard
              </div>
              <div className="text-gray-500">**** **** **** 3456</div>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value="Mastercard"
              checked={selectedOption === "Mastercard"}
              onChange={handleRadioChange}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
            />
          </label>
        </div>

 
      </div>

      <div className="px-6 pb-4">
        <div className="text-white text-xl font-semibold mb-4">E-Wallet</div>

        <div className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-2 ${
                selectedOption === "Paypal"
                  ? " text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`} 
              >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/paypal.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
                Paypal
              </div>
              <div className="text-gray-500">Checked automatically</div>
            </div>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="options"
              value="Paypal"
              checked={selectedOption === "Paypal"}
              onChange={handleRadioChange}
              className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
            />
          </label>
        </div>

 
      </div>

      <div className="w-full fixed bottom-0 p-4 h-24 degradado">
        <button
          onClick={handleContinue}
          className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-600 transition"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SelectPay;
