import React from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const OrderCrypto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-5 degradado-rojo relative h-40">
        <div className="lineas h-full">

         <NavbarRetroceso title="Order Crypto"/>

          <div className="absolute top-28 left-6 right-6">
            <div className="w-full border-2 bg-gray-800 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
                  <img
                    src="../src/assets/Bitcoin.svg"
                    alt="Bitcoin"
                    className="w-full h-full"
                  />
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
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-4 mt-14">
        <div className="text-white text-xl font-semibold mb-4">
          Payment method
        </div>

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img src="../src/assets/bofa.svg" alt="Bank of America" />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Bank of America</div>
              <div className="text-gray-500">Automatic payment</div>
            </div>
          </div>
          <div>
            <a href="">
              <button>
                <h2 className="text-center text-red-500">Change</h2>
              </button>
            </a>
          </div>
        </button>
      </div>

      <div className="px-5 py-2">
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
            <span className=" text-white">0.061 BTC</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Buy Fee</span>
            <span className=" text-green-400">Free</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-gray-400">Total Buy</span>
            <span className=" text-white">$156.76</span>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full degradado px-5 h-24 flex items-center">
        <button className="w-full bg-rojo text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition duration-300">
          Preview Buy
        </button>
      </div>
    </div>
  );
};

export default OrderCrypto;