import React from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const HistoryCrypto = () => {
  return (
    <div className="min-h-screen flex flex-col ">
    <div className="p-6 pb-24"> 
      <div className="flex justify-between items-center mb-2 py-6">
        <button onClick={() => window.history.back()} className="text-white">
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
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold">Transactions History</h2>
        </div>
        <div>
          <button onClick={() => window.history.back()} className="text-white">
            <img src="../src/assets/Filter.svg" alt="Filter" />
          </button>
        </div>
      </div>

        <div className="text-gray-500 font-semibold">
          <h2> 20 October 2022</h2>
        </div>
        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img
                src="../src/assets/cardano.svg"
                alt="cardano"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Sell ADA</div>
              <div className="text-gray-500">04:00 PM</div>
            </div>
          </div>
          <div className="text-start">
            <div className=" text-red-500 font-semibold text-end">- 250</div>
            <div className="text-gray-500 text-end">$87.69</div>
          </div>
        </div>

        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img
                src="../src/assets/DAI.svg"
                alt="DAI"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Buy Day</div>
              <div className="text-gray-500">2:25 PM</div>
            </div>
          </div>
          <div className="text-start">
            <div className="text-white font-semibold text-end">+ 150</div>
            <div className="text-gray-500 text-end">$ 149.98</div>
          </div>
        </div>

        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 0 rounded-full mr-4">
              <img
                src="../src/assets/btc-usdt.svg"
                alt="btc-usdt"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold flex">USDT <img src="../src/assets/refresh-circle.svg"></img> BTC</div>
              <div className="text-gray-500">10:30 AM</div>
            </div>
          </div>
          <div className="text-start">
            <div className="text-white font-semibold text-end">0.500</div>
            <div className="text-gray-500 text-end">9.594</div>
          </div>
        </div>

        <div className="text-gray-500 font-semibold">
          <h2> 12 may 2023</h2>
        </div>
        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full mr-4">
              <img
                src="../src/assets/usd.svg"
                alt="usd"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Deposit (USD)</div>
              <div className="text-gray-500">07:00 PM</div>
            </div>
          </div>
          <div className="text-start">
            <div className="text-green-300 font-semibold text-end">+ $234.00</div>
            
          </div>
        </div>

        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10  rounded-full mr-4">
              <img
                src="../src/assets/SOL.svg"
                alt="Sol"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Buy SOL</div>
              <div className="text-gray-500">04:00 PM</div>
            </div>
          </div>
          <div className="text-start">
            <div className="text-white font-semibold text-end">+ 7.00</div>
            <div className="text-gray-500 text-end">$196.47</div>
          </div>
        </div>
        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img
                src="../src/assets/cardano.svg"
                alt="cardano"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Buy ADA</div>
              <div className="text-gray-500">02:34</div>
            </div>
          </div>
          <div className="text-start">
            <div className="text-white font-semibold text-end">+ 1.000</div>
            <div className="text-gray-500 text-end">350,62</div>
          </div>
        </div>

        <div className="w-full border-2 degrade my-3 border-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img
                src="../src/assets/cardano.svg"
                alt="cardano"
                className="w-full h-full"
              />
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Buy ADA</div>
              <div className="text-gray-500">02:34</div>
            </div>
          </div>
          <div className="text-start">
            <div className="text-white font-semibold text-end">+ 1.000</div>
            <div className="text-gray-500 text-end">350,62</div>
          </div>
        </div>
        <div
        className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none">

      </div>
       
      </div>
    </div>
  );
};

export default HistoryCrypto;
