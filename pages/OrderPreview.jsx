import React from "react";

const OrderPreview= () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-5 py-2">        
          <div className="flex items-center justify-between my-4">
            <button
              onClick={() => window.history.back()}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h2 className="text-white text-center font-semibold text-lg">Order Preview</h2>
            <div></div>
         

        </div>
      </div>

      <div className="px-5">

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/Bitcoin.svg" alt="Bank of America" />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">BTC</div>
              <div className="text-gray-500">Bitcoin</div>
            </div>
          </div>
          <div className="text-start">
              <div className="text-white font-semibold">$1,245.00</div>
              <div className="text-gray-500">0.061 BTC</div>
            </div>
        </button>
      </div>

      {/* Sección de Order Summary */}
      <div className="px-5 py-2 mt-2">
        <h2 className="text-xl font-bold text-white">Order Summary</h2>
      </div>
      <div className="p-5 bg-gray-800 m-4 rounded-3xl">
        <div className="space-y-4 py-2">
          <div className="flex justify-between border-b border-gray-500 pb-4">
            <span className="text-gray-400">BTC Price</span>
            <span className="font-bold text-white">0.061 BTC</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-4">
            <span className="text-gray-400">Amount</span>
            <span className="font-bold text-white">$1,245.00</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-4">
            <span className="text-gray-400">Payment method</span>
            <span className="font-bold text-white">Bank of America</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-4">
            <span className="text-gray-400">Financial fee</span>
            <span className="font-bold text-white">$8.00</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-4">
            <span className="text-gray-400">Buy Fee</span>
            <span className="font-bold text-green-400">Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Buy</span>
            <span className="font-bold text-white">$1,243.00</span>
          </div>
        </div>
      </div>

      {/* Botón de Acción (fijo en la parte inferior) */}
      <div className="mt-auto w-full p-5  flex items-center">
        <button className="w-full bg-red-500 text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition duration-300">
          Preview Buy
        </button>
      </div>
    </div>
  );
};

export default OrderPreview;