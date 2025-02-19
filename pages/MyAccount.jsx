import React from "react";

const MyAccount = () => {
  return (
    <div className="min-h-screen ">
      <div className="p-6 degradado-rojo">
        <div className="lineas">
          {/* Header con botones de back y editar */}
          <div className="flex justify-between items-center mb-6 ">
            <button onClick={() => window.history.back()} className="text-white">
              {/* Icono de back */}
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
            <button className="text-white">
                <a href="/personaldata" className="text-white">
            
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              </a>
            </button>
            
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
              <img src="../src/assets/Avatar.svg"></img>
            </div>
            <div className="text-white text-2xl font-bold">Jerry Thomas</div>
            <div className="text-gray-300">utuxseju@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="text-white text-xl font-semibold mb-4">
          Account Details
        </div>
        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img src="../src/assets/user.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Personal Details</div>
              <div className="text-gray-500">Your account information</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img src="../src/assets/identy.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">
                Identify Verification
              </div>
              <div className="text-gray-500">Your verification status</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img src="../src/assets/bank.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Bank Account</div>
              <div className="text-gray-500">Manage your bank account</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="px-6 pb-4">
        <div className="text-white text-xl font-semibold mb-4">Settings</div>

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img src="../src/assets/security.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Privacy & Security</div>
              <div className="text-gray-500">PIN & Biometric protection</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button className="w-full border-2 border-gray-800 rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full mr-4">
              <img
                src="../src/assets/notification.svg"
                className="w-full h-full"
              ></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Push Notifications</div>
              <div className="text-gray-500">Notification preferences</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <button className="w-full border-2 border-gray-800  rounded-2xl p-4 flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
              <img src="../src/assets/united-states.svg"></img>
            </div>
            <div className="text-start">
              <div className="text-white font-semibold">Languange</div>
              <div className="text-gray-500">English (USA)</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Menú inferior */}
      <div className="fixed bottom-0 left-0 right-0  degradado-pie p-4 flex justify-around items-center">
        <div className="flex flex-col items-center text-gray-500">
            <button className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Home</span>
          </button>
        </div>
        <div className="flex flex-col items-center text-gray-500">
            <button className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span>Market</span>
          </button>
        </div>
        <div className="flex flex-col items-center text-gray-500">
            <button className="flex flex-col items-center">
          <img src="../src/assets/logo-redondo.svg"></img>
          </button>
        </div>
        <div className="flex flex-col items-center text-gray-500">
            <button className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>

          <span>Portfolio</span>
          </button>
        </div>
        <div className="flex flex-col items-center text-white">
            <button className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
