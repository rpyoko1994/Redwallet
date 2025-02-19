import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "../component/Navbar";

function PhoneNumber() {
  const [phone, setPhone] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // Estado para controlar el foco del input

  const showKeyboard = () => {
    setIsKeyboardVisible(true);
  };

  const handleContinue = () => {
    if (phone) {
      alert(`Número de teléfono ingresado: ${phone}`);
    } else {
      alert("Por favor, ingresa un número de teléfono.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <h1 className="text-2xl font-bold text-white p-4 mt-8">Almost Done!</h1>
      <p className="text-gray-500 mt-2 px-4">Enter your phone number and we’ll text you a code to activate your account.</p>

      <div className="flex items-center gap-2 mt-8 p-4">
      <PhoneInput
  country={"us"} // País por defecto
  value={phone}
  onChange={setPhone}
  inputStyle={{
    width: "100%",
    marginLeft:"28px",
    height:"56px",
    fontSize:"20px",
    margin:"10px",
    color: "white",
    backgroundColor: "#1E293B",
    borderRadius: "8px",
    border: `2px solid ${isInputFocused ? "#EF4444" : "#4A5568"}`,
    transition: "border-color 0.3s ease",
  }}
  buttonStyle={{
    backgroundColor: "#1E293B", // Fondo del selector de país
    border: "none", // Elimina el borde por defecto
    marginRight: "2px", // Separación de 2px a la derecha
    padding: "12px", // Ajusta el padding para que coincida con el input
    borderRadius: "8px 0 0 8px", 
    border: `2px solid ${isInputFocused ? "#EF4444" : "#4A5568"}`,
    color: "white", // Texto blanco
  }}
  dropdownStyle={{
    backgroundColor: "#1E293B", // Fondo del dropdown
    color: "white", // Texto blanco
    border: "1px solid #4A5568", // Borde del dropdown
  }}

  searchStyle={{
    backgroundColor: "#1E293B", // Fondo de la barra de búsqueda
    color: "white", // Texto blanco
    borderBottom: "1px solid #4A5568", // Borde inferior de la barra de búsqueda
    margin: "10px", // Margen interno
    padding: "8px", // Padding interno
  }}
  containerStyle={{ width: "100%", }}
  onFocus={() => {
    showKeyboard();
    setIsInputFocused(true); // Activar el estado de foco
  }}
  onBlur={() => setIsInputFocused(false)} // Desactivar el estado de foco
/>
      </div>

      {/* Botón de continuar (siempre visible al final) */}
      <div
        className={`fixed bottom-0 left-0 right-0 p-4 ${
          isKeyboardVisible ? "mb-74" : "" // Ajusta el margen inferior cuando el teclado está visible
        }`}
      >
        <button
          onClick={handleContinue}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition"
        >
          Continue
        </button>
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
                onClick={() => setPhone(phone + key.number)}
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
                onClick={() => setPhone(phone + key.number)}
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
                onClick={() => setPhone(phone + key.number)}
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
              onClick={() => setPhone(phone + "0")}
              className="p-2 bg-gray-500 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition"
            >
              <span className="text-xl font-bold text-white">0</span>
            </button>
            <button
              onClick={() => setPhone(phone.slice(0, -1))}
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
    </div>
  );
}

export default PhoneNumber;
