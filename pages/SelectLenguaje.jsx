import React, { useState } from "react";

const SelectLenguaje = () => {
  // Estado para la opción seleccionada
  const [selectedOption, setSelectedOption] = useState("0");
  // Estado para el valor del buscador
  const [searchTerm, setSearchTerm] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Función para manejar cambios en el buscador
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NavbarRetroceso title="Select Lenguage" />

      {/* Buscador */}
      <div className="px-6 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search language..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-gray-800 text-white rounded-lg pl-10 p-4  focus:outline-none focus:ring-2 focus:ring-red-500"
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

      <div className="px-6 py-4">
        {[
          {
            value: "usa",
            label: "English",
            flag: "../src/assets/flags/usa.svg",
          },
          {
            value: "reino-unido",
            label: "English (UK)",
            flag: "../src/assets/flags/reino-unido.svg",
          },
          {
            value: "indonesia",
            label: "Indonesia",
            flag: "../src/assets/flags/indonesia.svg",
          },
          {
            value: "spain",
            label: "Español",
            flag: "../src/assets/flags/spain.svg",
          },
          {
            value: "france",
            label: "Français",
            flag: "../src/assets/flags/france.svg",
          },
          {
            value: "italy",
            label: "Italiano",
            flag: "../src/assets/flags/italy.svg",
          },
          {
            value: "china",
            label: "Chinese",
            flag: "../src/assets/flags/chinese.svg",
          },
        ]
          .filter((language) =>
            language.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((language) => (
            <div
              key={language.value}
              className={`w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-4 ${
                selectedOption === language.value
                  ? "bg-gray-800 text-red-500 ring-red-500 focus:ring-red-500"
                  : "border-gray-600"
              }`}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full mr-4">
                  <img
                    src={language.flag}
                    alt={language.label}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-start">
                  <div className="text-white font-semibold">
                    {language.label}
                  </div>
                </div>
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="options"
                  value={language.value}
                  checked={selectedOption === language.value}
                  onChange={handleRadioChange}
                  className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring-red-500 focus:ring-2"
                />
              </label>
            </div>
          ))}
      </div>

      <div className="w-full fixed bottom-0 p-4">
        <button className="w-full bg-rojo text-white font-bold py-2 h-14 rounded-lg hover:bg-red-600 transition">
          Change Language
        </button>
      </div>
    </div>
  );
};

export default SelectLenguaje;
