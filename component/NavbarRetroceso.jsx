import React from "react";

function NavbarRetroceso(props) {
    return (
        <div className="p-6">
        <div className="flex justify-between items-center mb-2">
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
            <h2 className="text-white text-lg font-semibold" style={{ color: 'white' }}>
            {props.title}
            </h2>
          </div>
          <div></div>
        </div>
        </div>
    );
  }
  
  export default NavbarRetroceso;