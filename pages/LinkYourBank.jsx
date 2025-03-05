import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const LinkYourBank = () => {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiration: "",
    cvc: "",
    postalCode: "",
    agreeToTerms: false, // Nuevo estado para el checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Manejar checkbox y otros inputs
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar si el usuario aceptó los términos
    if (!formData.agreeToTerms) {
      alert("Debes aceptar los términos y condiciones para continuar.");
      return;
    }
    // Aquí puedes manejar la lógica de envío del formulario
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <NavbarRetroceso title="Link Your Bank" />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nombre de la tarjeta */}
        <div>
          <label className="block text-sm font-medium text-gray-500 py-2">
            Name on Card
          </label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-4  text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
            placeholder="Jerry Thomas"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 py-2">
              Expiration
            </label>
            <input
              type="text"
              name="expiration"
              value={formData.expiration}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-4 text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
              placeholder="12/25"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 py-2">
              CVC
            </label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-4 text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
              placeholder="8974"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 py-2">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-4  text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
            placeholder="xxxx xxxx xxxx xxxx"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 py-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-4 text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>

        {/* Checkbox para términos y condiciones */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-red-500 focus:ring-red-500 bg-gray-800 rounded"
            required
          />
          <label className="ml-2 block text-sm text-gray-500 pr-6 py-2">
            By adding a new card, you agree to the{" "}
            <a href="/" className="text-red-500">
              credit/debit card terms.
            </a>
          </label>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white mt-32 py-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default LinkYourBank;
