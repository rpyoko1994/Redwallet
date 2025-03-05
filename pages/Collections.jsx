import React, { useState, useEffect } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const Collections = () => {
  const [count, setCount] = useState(0.5);
  const [timeLeft, setTimeLeft] = useState({
    days: 31,
    hours: 0,
    minutes: 2,
    seconds: 21,
  });

  // Función para manejar el contador regresivo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        // Lógica para decrementar el tiempo
        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
                minutes = 59;
                seconds = 59;
              } else {
                clearInterval(interval); // Detener el contador cuando llegue a 0
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  const increment = () => {
    setCount((prevCount) => prevCount + 0.1);
  };

  const decrement = () => {
    if (count > 0.1) {
      setCount((prevCount) => prevCount - 0.1);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white min-h-screen">
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
            <h2 className="text-white text-lg font-semibold">Place Bid</h2>
          </div>
          <div>
            <button className="text-white">
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
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor de la imagen con el contador regresivo */}
      <div className="border border-gray-700 rounded-lg p-3">
        <div className="nft w-full h-66 rounded-xl p-4 relative flex justify-between items-end">
          {/* Contador regresivo superpuesto en la parte inferior */}
          <div className="h-20 bg-gray-700 opacity-70 w-full p-2 flex justify-between rounded-2xl items-center">
            <span className="text-lg text-gray-50">Ends in:</span>
            <span className="text-lg text-gray-50">
              {timeLeft.days}d:{timeLeft.hours}h:{timeLeft.minutes}m:
              {timeLeft.seconds}s
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <span className="text-sm text-gray-400">Nemus Genesis</span>
        <img
          src="../src/assets/verificado.svg"
          alt="Verified"
          className="ml-2 h-4 w-4"
        />
      </div>

      {/* Título y párrafo con botón "Read more" */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Nemus Genesis</h2>
        <p className="text-sm text-gray-300 py-2">
          Unique invocations of this algorithm consist of any number of several
          core components including waves that rise and fall, a flow field
          powered mist.
          <button className="text-violet-600 text-sm ml-1"> Read more</button>
        </p>
      </div>

      {/* Contenedor con botones de incremento y decremento */}
      <div className="flex items-center justify-between mt-6 p-4 bg-gray-700 rounded-lg">
        <button
          onClick={decrement}
          className="text-3xl p-2 bg-gray-800 rounded-lg text-white flex justify-center items-center w-10 h-10"
        >
          -
        </button>
        <div className="flex items-center">
          <img
            src="../src/assets/Ethereum.svg"
            alt="ETH"
            className="w-8 h-8 mr-4"
          />
          <span className="text-xl font-semibold">{count.toFixed(3)} ETH</span>
        </div>
        <button
          onClick={increment}
          className="p-2 text-3xl bg-violet-600 rounded-lg text-white flex justify-center items-center w-10 h-10"
        >
          +
        </button>
      </div>

      {/* Título debajo del contenedor */}
      <h3 className="text-lg font-semibold mt-6">History of Bid</h3>

      {/* Contenedor con imagen, título, subtítulo y texto */}
      <div className="border border-gray-700 rounded-lg p-4 mt-4">
        <div className="flex items-center">
          <img
            src="../src/assets/avatar2.svg"
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <h4 className="text-sm font-semibold">Krishna Barbe</h4>
            <p className="text-sm text-gray-400">0.450 ETH</p>
          </div>
          <span className="ml-auto text-sm text-gray-400">2 days ago</span>
        </div>
      </div>

      {/* Botón "Confirm" centrado en la parte inferior */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800">
        <div className="flex justify-center">
          <button className="w-full max-w-md bg-violet-600 text-white font-bold py-2 h-14 rounded-lg hover:bg-violet-800 transition">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
