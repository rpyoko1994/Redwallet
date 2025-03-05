import React, { useState } from "react";

const ExchangeCrypto = () => {
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("ETH");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [showFromCryptoList, setShowFromCryptoList] = useState(false);
  const [showToCryptoList, setShowToCryptoList] = useState(false);

  const cryptoOptions = [
    { symbol: "BTC", name: "Bitcoin", image: "../src/assets/Bitcoin.svg" },
    { symbol: "ETH", name: "Ethereum", image: "../src/assets/Ethereum.svg" },
    {
      symbol: "LTC",
      name: "Litecoin",
      image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    },
    {
      symbol: "XRP",
      name: "Ripple",
      image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    },
    {
      symbol: "ADA",
      name: "Cardano",
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    },
  ];

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    const tempAmount = fromAmount;
    setFromAmount(toAmount);
    setToAmount(tempAmount);
  };

  const handleConvert = () => {
    const conversionRate = 2; // Tasa de conversión ficticia
    setToAmount(fromAmount * conversionRate);
  };

  const handleNumberClick = (number) => {
    if (number === "delete") {
      setFromAmount((prev) => prev.slice(0, -1));
    } else {
      setFromAmount((prev) => prev + number);
    }
  };

  const handleFromCryptoSelect = (crypto) => {
    setFromCurrency(crypto.symbol);
    setShowFromCryptoList(false);
  };

  const handleToCryptoSelect = (crypto) => {
    setToCurrency(crypto.symbol);
    setShowToCryptoList(false);
  };

  const getCryptoImage = (symbol) => {
    const crypto = cryptoOptions.find((c) => c.symbol === symbol);
    return crypto ? crypto.image : "";
  };

  return (
    <div className="p-4 lineas text-white">
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
          <h2 className="text-white text-lg font-semibold">Exchange Crypto</h2>
        </div>
        <div>
          <button className="text-white">
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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {/* Bitcoin Balance */}
        <div className="text-center py-8 mb-4">
          <h2 className="text-medium font-semibold">Bitcoin balance</h2>
          <p className="text-5xl font-semibold">$13,029.46</p>
        </div>

        {/* Conversor de Criptomonedas */}
        <div className="space-y-4 mt-8 relative">
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute left-4 top-2 text-sm text-gray-400">
                From
              </div>
              <input
                type="text"
                value={fromAmount}
                readOnly
                className="w-full p-4 pt-8 rounded-xl bg-gray-800 text-lg"
                placeholder="Amount"
              />
              <button
                onClick={() => setShowFromCryptoList(!showFromCryptoList)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-4 rounded-lg hover:bg-red-500 flex items-center"
              >
                <img
                  src={getCryptoImage(fromCurrency)}
                  alt={fromCurrency}
                  className="w-5 h-5 mr-2"
                />
                {fromCurrency}
              </button>
              {showFromCryptoList && (
                <div className="absolute right-0 bottom-10 mb-2 w-32 bg-gray-800 border rounded-lg shadow-lg">
                  {cryptoOptions.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => handleFromCryptoSelect(crypto)}
                      className="w-full text-left px-2 py-1 flex hover:bg-gray-100 items-center"
                    >
                      <img
                        src={crypto.image}
                        alt={crypto.symbol}
                        className="w-5 h-5 mr-2"
                      />
                      {crypto.symbol}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Botón de intercambio superpuesto */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleSwap}
              className="p-2 bg-gray-800 border-gray-500 border text-white rounded-full hover:bg-red-600 rotate-90"
            >
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
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
          </div>

          {/* Input de destino */}
          <div className="flex items-center">
            <div className="relative w-full">
              <div className="absolute left-4 top-2 text-sm text-gray-400">
                To
              </div>
              <input
                type="text"
                value={toAmount}
                readOnly
                className="w-full p-4 pt-8 rounded-lg bg-gray-800 text-lg"
                placeholder="Amount"
              />
              <button
                onClick={() => setShowToCryptoList(!showToCryptoList)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-4 rounded-lg hover:bg-red-600 flex items-center"
              >
                <img
                  src={getCryptoImage(toCurrency)}
                  alt={toCurrency}
                  className="w-5 h-5 mr-2"
                />
                {toCurrency}
              </button>
              {showToCryptoList && (
                <div className="absolute right-0 top-10 mt-2 w-32 bg-gray-800 border rounded-lg shadow-lg">
                  {cryptoOptions.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => handleToCryptoSelect(crypto)}
                      className="w-full text-left px-2 py-1 hover:bg-gray-100 flex items-center"
                    >
                      <img
                        src={crypto.image}
                        alt={crypto.symbol}
                        className="w-5 h-5 mr-2"
                      />
                      {crypto.symbol}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Teclado numérico */}
        <div className="grid grid-cols-3 gap-2 my-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "delete"].map((item) => (
            <button
              key={item}
              onClick={() => handleNumberClick(item)}
              className={`p-3 rounded-lg shadow text-center font-bold text-2xl ${
                item === "delete" ? "text-white" : ""
              }`}
            >
              {item === "delete" ? "⌫" : item}
            </button>
          ))}
        </div>
      </div>

      {/* Botón de conversión al final de la página */}
      <button
        onClick={handleConvert}
        className="w-full mt-4 bg-rojo text-white text-lg py-4 rounded-lg hover:bg-red-600"
      >
        Convert
      </button>
    </div>
  );
};

export default ExchangeCrypto;