import React, { useState } from 'react';
import NavbarRetroceso from '../component/NavbarRetroceso';

const BankAccountDetail = () => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="p-4 min-h-screen">
     <NavbarRetroceso title="Bank Account Detail" />

      <img src="../src/assets/bank.png" alt="Tarjeta de Banco" className="mb-6 w-full" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium py-2 text-gray-500">Name on Card</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-3 text-white border bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            required
            placeholder='Jerry Thomas'
          />
        </div>

        {/* Fecha de expiración y CVC */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium py-2 text-gray-500">Expiration</label>
            <input
              type="text"
              name="expiration"
              value={formData.expiration}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-3 text-white border bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
              placeholder='12/25'
            />
          </div>
          <div>
            <label className="block text-sm font-medium py-2 text-gray-500">CVC</label>
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-3  border text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              required
              placeholder='8974'
            />
          </div>
     
        </div>

               <div>
          <label className="block text-sm font-medium py-2 text-gray-500">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-3 border bg-gray-800 rounded-md shadow-sm focus:outline-none text-white focus:ring-red-500 focus:border-red-500"
            required
            placeholder='9087 7658 7654 7777'
          />
        </div>
      </form>
    </div>
  );
};

export default BankAccountDetail;