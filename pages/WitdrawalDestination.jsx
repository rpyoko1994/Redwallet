import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const WitdrawalDestination = () => {
  // Estado para la opción seleccionada
  const [selectedOption, setSelectedOption] = useState("");
  // Estado para el valor del buscador
  const [searchTerm, setSearchTerm] = useState("");

  const handleRadioChange = (value) => {
    setSelectedOption(value);
  };

  // Función para manejar cambios en el buscador
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen text-white">
      <NavbarRetroceso title="Witdrawald Destination" />

      {/* Buscador */}
      <div className="px-6 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search bank..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-gray-800 text-white rounded-lg pl-10 p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      {/* Lista de bancos */}
      <div className="px-6 py-4">
        {[
          {
            value: "bofa",
            label: "Bank of America",
            web:"bankofamerica.com",
            flag: "../src/assets/bofa.svg",
          },
          {
            value: "barclays",
            label: "Barclays",
            web:"barclays.com",
            flag: "../src/assets/barclays.svg",
          },
          {
            value: "chase",
            label: "Chase",
            web:"chase.com",
            flag: "../src/assets/chase.svg",
          },
          {
            value: "citi",
            label: "Citibank Online",
            web:"citi.com",
            flag: "../src/assets/citi.svg",
          },
          {
            value: "wells",
            label: "Wells Fargo",
            web:"wellsfargo.com",
            flag: "../src/assets/fargo.svg",
          },
          {
            value: "ubs",
            label: "UBS",
            web:"ubs.com",
            flag: "../src/assets/ubs.svg",
          },
          
        ]
          .filter((bank) =>
            bank.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((bank) => (
            <div
              key={bank.value}
              onClick={() => handleRadioChange(bank.value)}
              className={`w-full border-2 rounded-2xl p-4 flex items-center justify-between mb-4 cursor-pointer ${
                selectedOption === bank.value
                  ? "bg-gray-800 "
                  : "border-gray-600"
              }`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4">
                  <img
                    src={bank.flag}
                    alt={bank.label}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-start">
                  <div className="text-white font-semibold">{bank.label}</div>
                  <div className="text-gray-500 font-semibold">{bank.web}</div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Botón fijo en la parte inferior */}
      <div className="w-full fixed bottom-0 p-4">
        <button className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-600 transition">
          Change bank
        </button>
      </div>
    </div>
  );
};

export default WitdrawalDestination;
