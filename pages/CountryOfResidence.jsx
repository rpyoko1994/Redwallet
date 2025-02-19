import React, { useState } from "react";
import Navbar from "../component/Navbar"; // Asegúrate de que la ruta sea correcta
import Flag from "react-world-flags"; // Importa el componente Flag

// Lista de países con códigos ISO (puedes agregar más)
const countries = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "gb" },
  { name: "Ukraine", code: "ua" },
  { name: "Uruguay", code: "uy" },
  { name: "Venezuela", code: "VE" },
  { name: "España", code: "ES" },
  { name: "Argentina", code: "AR" },
  { name: "Brazil", code: "BR" },
  { name: "Colombia", code: "CO" },
  { name: "France", code: "FR" },
  { name: "Germany", code: "DE" },
  { name: "Italy", code: "IT" },
  // Agrega más países aquí...
];

function CountryOfResidence() {
  // Estado para manejar el país seleccionado
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filtrar países según la búsqueda
  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 4); // Mostrar solo las primeras 4 sugerencias

  // Función para manejar el clic en "Continue"
  const handleContinue = () => {
    if (!selectedCountry) {
      alert("Por favor, selecciona un país antes de continuar.");
    } else {
      alert(`País seleccionado: ${selectedCountry}`);
      // Aquí podrías redirigir al usuario o realizar otra acción
    }
  };

  // Barra de progreso al 50%
  const progressBar = (
    <div className="w-full bg-gray-200 rounded-full h-1">
      <div className="bg-rojo h-1 rounded-full w-1/2"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Navbar con barra de progresión */}
      <Navbar progressBar={progressBar} />

      {/* Título y párrafo */}
      <div className="w-full max-w-4xl mx-auto mt-2 p-4">
        <h1 className="text-3xl font-bold text-white">
          What’s your citizenship?
        </h1>
        <p className="text-gray-500 mt-2 pr-14">
          If you’re a citizen of more than one country, please pick one.
        </p>
      </div>

      {/* Botón para abrir el buscador */}
      {!isSearchOpen && (
        <div className="flex-grow flex items-start justify-center p-4">
          <div className="w-full max-w-4xl">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg p-4 flex items-center justify-between hover:bg-gray-700 transition"
            >
              <div className="flex items-center space-x-3">
                {selectedCountry ? (
                  <>
                    <Flag
                      code={
                        countries.find((c) => c.name === selectedCountry)?.code
                      }
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-medium font-bold">
                      {selectedCountry}
                    </span>
                  </>
                ) : (
                  <span className="text-medium font-bold text-gray-400">
                    Select a country
                  </span>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Buscador (ocupa toda la página) */}
      {isSearchOpen && (
        <div className="fixed inset-0 degradado z-10">
          {/* Navbar para cerrar el buscador */}
          <div className="w-full p-4">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-white font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Contenido del buscador */}
          {/* Título del buscador */}
          <h2 className="text-2xl font-bold mb-4 p-4">Select your Country</h2>
          <div className="p-4 m-4 bg-gray-800 rounded-2xl">
            {/* Campo de búsqueda con ícono */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500
                "
                autoFocus // Abre el teclado automáticamente en dispositivos móviles
              />
              {/* Ícono de búsqueda */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute left-2 top-2 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            {/* Sugerencias de países */}
            <div className="mt-4">
              {filteredCountries.map((country, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedCountry(country.name);
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-2 flex items-center space-x-3 hover:bg-gray-700 cursor-pointer transition"
                >
                  <Flag
                    code={country.code} // Código ISO del país
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-medium font-bold">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sección de seguridad (ícono de candado y párrafo) */}
      <div className="w-full max-w-4xl mx-auto p-4 flex items-center space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
        <p className="text-gray-500">
          Your data is securely processed and encrypted.
        </p>
      </div>

      {/* Botón "Continue" */}
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

export default CountryOfResidence;
