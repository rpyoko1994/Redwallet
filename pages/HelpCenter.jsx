import React from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const HelpCenter = () => {
  return (
    <div className="min-h-screen">
      <div className="degradado-rojo h-2/5">
        <div className="lineas w-full">
          <NavbarRetroceso />
          <div className="max-w-4xl mx-auto  p-6">
            <h1 className="text-2xl text-white font-bold  mb-6">
              Hi, how can we help?
            </h1>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Q Search..."
                className="w-full p-4 border text-gray-800 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 bg-gray-800 rounded-2xl px-4 h-24 mx-4 my-6 flex items-center">
        <div className="mr-2">
          <img
            src="../src/assets/interrogacion.svg"
            alt="Question"
            className="h-14 w-16"
          />
        </div>
        <div className="ml-6 w-full">
          <h2 className="font-semibold text-white ">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm">
            Find all the answers to questions
          </p>
        </div>
      </div>

      <div className="mb-8 pl-4 pr-2">
        <h2 className="text-lg font-semibold text-white mb-4">Community</h2>
        <p className="text-gray-400 text-sm">
          Connect with thousands of the Financial users to discuss and share
          about investment knowledge.
        </p>
      </div>
      <button className="w-full px-4">
        <div className="w-full border-2 rounded-2xl border-gray-500 p-4 flex items-center justify-between mb-4">
          <div className="mr-4 w-1/2">
            <img
              src="../src/assets/discord.svg"
              alt="Discord"
              className="w-12 h-12 rounded-full "
            />
          </div>
          <div className="text-start w-full">
            <div className="text-white font-semibold">Discord</div>
            <div className="text-gray-500">Discord Oficial</div>
          </div>
          <div className="flex justify-end w-full">
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
      <button className="w-full px-4">
        <div className="w-full border-2 rounded-2xl border-gray-500 p-4 flex items-center justify-between mb-4">
          <div className="mr-4 w-28">
            <img
              src="../src/assets/telegram.svg"
              alt="telegram"
              className="w-12 h-12 rounded-full "
            />
          </div>
          <div className="text-start w-full">
            <div className="text-white font-semibold">Telegram</div>
            <div className="text-gray-500">Telegram Oficial</div>
          </div>
          <div className="flex justify-end w-full">
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

      <div className="flex float-end items-center justify-end">
        <button className="rounded-full bg-rojo flex justify-center items-center h-14 w-14 mr-4 mt-4">
          <img src="../src/assets/headset.svg" className="h-7 w-7" />
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
