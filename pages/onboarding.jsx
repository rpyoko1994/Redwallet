import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  return (
    <div className="relative h-screen w-full overflow-hidden manrope">
      {/* Carrusel con Swiper */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Clase personalizada para la paginación
        }}
        loop={true}
        className="absolute h-full w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {/* Primer carrusel */}
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute inset-0">
            <img src="../src/assets/chica.png" alt="Chica" className="w-full" />
          </div>
          <div className="absolute top-6 w-full flex justify-end p-4">
            <button className="border rounded-xl border-white w-20 h-10 text-white">
              Skip
            </button>
          </div>
          <div className="absolute bg-black bottom-0 left-0 w-full h-1/2 shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl text-white pl-4 pr-10 mb-4">
                Follow your favorite creators
              </h2>
              <p className="text-gray-600 mb-4 pr-24 pl-4">
                Stay informed of their publications and don't miss any updates.
              </p>
            </div>
            {/* Contenedor de la paginación */}
            <div className="custom-pagination flex items-start"></div>
            {/* Contenedor de los botones (al final del contenedor) */}
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-full bg-rojo text-white font-bold py-4 rounded-lg hover:bg-red-400 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("")}
                className="w-full rojo font-bold py-4 rounded-lg hover:bg-gray-700 transition"
              >
                Browse Assets
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Segundo carrusel */}
        <SwiperSlide className="relative h-full w-full">
          <div className="absolute inset-0">
            <img
              src="../src/assets/moneda.png"
              alt="Paisaje 2"
              className="w-full h-1/2"
            />
          </div>
          <div className="absolute top-6 w-full flex justify-end p-4">
            <button className="border rounded-xl border-white w-20 h-10 text-white">
              Skip
            </button>
          </div>
          <div className="absolute bg-black bottom-0 left-0 w-full h-1/2 shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl text-white pl-4 pr-4 mb-4">
                Your crypto wallet on Polygon
              </h2>
              <p className="text-gray-600 mb-4 pl-4 pr-10">
                Monitor, send and receive cryptocurrencies safely and quickly in
                RedWallet.
              </p>
            </div>
            {/* Contenedor de la paginación */}
            <div className="custom-pagination flex items-start"></div>
            {/* Contenedor de los botones (al final del contenedor) */}
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-full bg-rojo text-white font-bold py-4 rounded-lg hover:bg-red-400 transition"
              >
                Get Started
              </button>
              <button
                onClick={() => navigate("")}
                className="w-full rojo font-bold py-4 rounded-lg hover:bg-gray-700 transition"
              >
                Browse Assets
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Onboarding;
