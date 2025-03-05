import React from "react";

function MenuInferior({ activeSection, setActiveSection }) {
  const menuItems = [
    {
      id: "home",
      icon: (
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
      ),
      label: "Home",
    },
    {
      id: "market",
      icon: (
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
      ),
      label: "Market",
    },
    {
      id: "logo",
      icon: <img src="../src/assets/logo-redondo.svg" alt="Logo" />,
      label: "",
    },
    {
      id: "portfolio",
      icon: (
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
      ),
      label: "Portfolio",
    },
    {
      id: "profile",
      icon: (
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
      ),
      label: "Profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 degradado-pie p-4 flex justify-around items-center">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center"
        >
          <button
            onClick={() => setActiveSection(item.id)} // Cambia la sección activa al hacer clic
            className={`flex flex-col items-center ${
              activeSection === item.id
                ? "text-white" // Estilo para la sección activa
                : "text-gray-500" // Estilo para las secciones inactivas
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default MenuInferior;