import React from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const Historial = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">

        <NavbarRetroceso title="Historial Transfers"/>

      <div>
          </div>
      </div>

      <div className="px-4 py-2 bg-gray-800 m-4 rounded-3xl">
        <div className="space-y-2 py-1">
        <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">0.061 BTC</span>
            <span className=" text-yellow-200">Processing</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">0.55 SOL</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">13.55 ETH</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">222.55 AXP</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">0.55 TRX</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">99.55 USDT</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">23.89 POL</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">0.00045 BTC</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">0.056 ETH</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">5.33 AMX</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between border-b border-gray-500 py-1">
            <span className="text-gray-400">2334.35 ADF</span>
            <span className=" text-green-400">Completed</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">0.333 MAM</span>
            <span className=" text-green-400">Completed</span>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full px-5 h-24 flex items-center">
        <button className="w-full bg-gray-800 rojo text-white text-lg font-semibold py-4 rounded-lg hover:bg-red-600 transition duration-300">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Historial;