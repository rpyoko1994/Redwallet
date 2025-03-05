import React from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const ConfirmOrder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">

        <NavbarRetroceso title="Order Preview"/>

          <div>
            <div className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
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

      <div className="px-5 py-2">
        <h2 className="text-xl font-semibold text-white">Order Summary</h2>
      </div>
      <div className="p-5 bg-gray-800 m-4 rounded-3xl">
        <div className="space-y-4 py-2">
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">BTC price</span>
            <span className="font-bold text-white">0.061 BTC</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Amount</span>
            <span className="font-bold text-white">$1,245.00</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Payment method</span>
            <span className="font-bold text-white">Bank of America</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Financial fee</span>
            <span className="font-bold text-white">$8.00</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 pb-2">
            <span className="text-gray-400">Buy Fee</span>
            <span className="font-bold text-green-400">Free</span>
          </div>
          <div className="flex justify-between pb-2">
            <span className="text-gray-400">Total buy</span>
            <span className="font-bold text-white">$1,253.00</span>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full px-5 h-24 flex items-center">
        <button className="w-full bg-red-500 text-white font-semibold py-4 rounded-lg hover:bg-red-600 transition duration-300">
          Preview Buy
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;