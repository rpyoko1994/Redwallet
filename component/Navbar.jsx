import React from "react";

function Navbar({ progressBar }) {
  return (
    <nav className="">
      <div className="flex flex-col">
        <button
          onClick={() => window.history.back()}
          className="text-white font-semibold p-6"
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Barra de progreso*/}
        {progressBar && <div className="w-full">{progressBar}</div>}
      </div>
    </nav>
  );
}

export default Navbar;