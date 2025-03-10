import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const Send = () => {
  const [selected, setSelected] = useState(null);
  const [isCryptoDropdownOpen, setIsCryptoDropdownOpen] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState({
    code: "BTC",
    name: "Bitcoin",
    image: "../src/assets/Bitcoin.svg",
  });
  const [amount, setAmount] = useState("");
  const [sentTo, setSentTo] = useState("");

  const handleSelect = (index) => {
    setSelected(index);
  };

  const cryptos = [
    { code: "BTC", name: "Bitcoin", image: "../src/assets/Bitcoin.svg" },
    { code: "ETH", name: "Ethereum", image: "../src/assets/Ethereum.svg" },
    {
      code: "LTC",
      name: "Litecoin",
      image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    },
    {
      code: "XRP",
      name: "Ripple",
      image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    },
    {
      code: "BCH",
      name: "Bitcoin Cash",
      image: "../src/assets/Bitcoin-Cash.svg",
    },
  ];

  const buttons = [
    {
      title: "Username1",
      subtitle: "tF76Y.....IBB7ygj",
      image: "../src/assets/image-1.svg",
    },
    {
      title: "Username2",
      subtitle: "tF76Y.....IBB7ygj",
      image: "../src/assets/image-2.svg",
    },
    {
      title: "Username3",
      subtitle: "tF76Y.....IBB7ygj",
      image: "../src/assets/image-3.svg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-white">
      <NavbarRetroceso title="Send To" />
      <div className="rounded-lg shadow-lg w-full max-w-md mt-10">
        <div className="mb-4 p-4">
          <div className="relative w-full">
            <div className="absolute left-4 top-2 text-sm text-gray-400">
              Amount
            </div>{" "}
            <input
              value={amount} // Valor controlado por el estado
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 pt-8 rounded-xl bg-gray-800 text-lg border-2 border-gray-500 hover:border-red-500 focus:border-red-500"
              placeholder="0.8796"
              type="text"
            />
            <button
              onClick={() => setIsCryptoDropdownOpen(!isCryptoDropdownOpen)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-4 rounded-lg hover:bg-red-500 flex items-center"
            >
              <img
                src={selectedCrypto.image}
                alt="Crypto Icon"
                className="w-5 h-5 mr-2"
              />
              <span>{selectedCrypto.code}</span>
            </button>
            {isCryptoDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {cryptos.map((crypto, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCrypto(crypto); // Guarda el objeto completo de la criptomoneda
                        setIsCryptoDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-1 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      <div className="flex items-center">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="w-5 h-5 mr-2"
                        />
                        <span>{crypto.code}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Segundo Input sin Botón de Cripto */}
        <div className="mb-4 mt-6 px-4">
          <label className="block text-lg font-medium text-white pt-8 pb-2">
            Send to Wallet
          </label>
          <div className="relative w-full">
            <div className="absolute left-4 top-2 text-sm text-gray-400">
              Sent to
            </div>{" "}
            {/* Texto descriptivo arriba */}
            <input
              value={sentTo} // Valor controlado por el estado
              onChange={(e) => setSentTo(e.target.value)} // Permite editar el valor
              className="w-full px-4 py-2 pt-8 rounded-xl bg-gray-800 text-lg border-2 border-gray-500 hover:border-red-500 focus:border-red-500"
              placeholder="wfasGD..."
              type="text"
            />
          </div>
        </div>

        {/* Botones con Imágenes y Check */}
        <div className="mb-2 px-4">
          <label className="block text-lg py-4 font-medium">Or send to</label>
          <div className="mt-1 space-y-4">
            {buttons.map((button, index) => (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`flex items-center p-4 border rounded-2xl cursor-pointer ${
                  selected === index ? "border-red-500" : "border-gray-300"
                }`}
              >
                <img
                  src={button.image}
                  alt={button.title}
                  className="h-10 w-10 rounded-full"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-700">
                    {button.title}
                  </div>
                  <div className="text-sm text-gray-500">{button.subtitle}</div>
                </div>
                <div className="ml-auto">
                  <div
                    className={`h-5 w-5 rounded-full border ${
                      selected === index
                        ? "bg-red-500 border-red-500"
                        : "border-gray-300"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto w-full degradado py-5 px-4 flex items-center h-24">
        <button className="w-full bg-rojo text-white font-semibold p-4 rounded-lg hover:bg-red-600 transition duration-300">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Send;
