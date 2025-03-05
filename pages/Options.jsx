import React from "react";

const Options  = () => {
    return (
    <div className="min-h-screen">
        <div className="w-full mt-12 px-6 py-4">
          <h2 className="font-semibold text-white ">
          Add / Connect Wallet
          </h2>
        </div>

      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-800 p-4 flex items-center justify-between mb-4">
            <div className="mr-4">
              <img src="../src/assets/user.svg" alt="Discord" className="w-12 h-12 rounded-full " />
            </div>
            <div className="text-start w-60">
              <div className="text-white font-semibold">Create New Account</div>
              <div className="text-gray-500 text-xs">Add a new multi-chain account</div>
            </div>
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
        </div>
      </button>
      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-800 p-4 flex items-center justify-between mb-4">
            <div className="mr-4">
              <img src="../src/assets/papel.svg" alt="Discord" className="w-12 h-12 rounded-full " />
            </div>
            <div className="text-start w-60">
              <div className="text-white font-semibold">Import Recovery Phrase</div>
              <div className="text-gray-500 text-xs">Import accounts from another wallet</div>
            </div>
            <div className="flex justify-end ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
        </div>
      </button>
      <button className="w-full px-6">
        <div className="w-full border-2 rounded-2xl border-gray-800 p-4 flex items-center justify-between mb-4">
            <div className="mr-4">
              <img src="../src/assets/papel.svg" alt="Discord" className="w-12 h-12 rounded-full " />
            </div>
            <div className="text-start w-60">
              <div className="text-white font-semibold">Import Private Key</div>
              <div className="text-gray-500">Import a single-chain account</div>
            </div>
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
        </div>
      </button>

    </div>
);
};

export default Options;
