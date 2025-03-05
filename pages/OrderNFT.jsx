import React from "react";

const OrderNFT = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar Degradado */}
      <div className="p-5 degradado-rojo relative h-40">
        <div className="lineas h-full">
          {/* Header con botones de back y editar */}
          <div className="flex items-center justify-between mb-10">
            <button
              onClick={() => window.history.back()}
              className="text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <h2 className="text-white text-center text-lg font-semibold">Order NFT</h2>
            <div></div>
          </div>

          {/* Botón de Personal Details con position: absolute */}
          <div className="absolute top-28 left-6 right-6">
            <div className="w-full border-2 bg-gray-800 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
                  <img
                    src="../src/assets/astronauta.svg"
                    alt="Bitcoin"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-start">
                  <div className="text-white font-semibold">Genesis #0011</div>
                  <div className="text-gray-500">Buy</div>
                </div>
              </div>
              <div className="text-start">
                <div className="text-white font-semibold">0.100 ETH</div>
                <div className="text-gray-500 text-end">$156.76</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Payment Method */}
      <div className="px-5 pb-2 mt-14">
        <div className="text-white text-xl font-semibold mb-4">
          Payment method
        </div>

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/paypal.svg" alt="Paypal" />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Paypal</div>
              <div className="text-gray-500">Automatic payment</div>
            </div>
          </div>
          <div>
            <a href="">
              <button>
                <h2 className="text-center text-rojo">Change</h2>
              </button>
            </a>
          </div>
        </button>
      </div>

      {/* Sección de Order Summary */}
      <div className="px-5">
        <h2 className="text-xl font-bold text-white">Order Summary</h2>
      </div>
      <div className="p-5 bg-gray-800 m-4 rounded-3xl">
        <div className="space-y-4 py-4">
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Amount</span>
            <span className=" text-white">$156.76</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Crypto Purchased</span>
            <span className=" text-white">0.100 ETH</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Buy Fee</span>
            <span className="font-bold text-green-400">Free</span>
          </div>
          <div className="flex justify-between pb-1">
            <span className="text-white">Total Buy</span>
            <span className=" text-white">$156.76</span>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full flex-col degradado px-5 pt-3 h-36 flex items-center">
        <div className="w-full mb-2 relative">

          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src="../src/assets/ticket-discount.svg" alt="" />
          </div>

          {/* Input */}
          <input
            type="text"
            className=" text-gray-300 bg-gray-800 rounded-md px-10 w-full py-3 focus:outline-none focus:ring-2 focus:ring-rojo"
            placeholder="Promo Code"
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <button className="w-full bg-rojo text-white font-semibold py-4 mt-2 rounded-lg hover:bg-red-600 transition duration-300">
          Preview Buy
        </button>
      </div>
    </div>
  );
};

export default OrderNFT;