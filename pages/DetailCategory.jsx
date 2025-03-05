import React, { useState } from "react";
import NavbarRetroceso from "../component/NavbarRetroceso";

const DetailCategory = () => {
  const [activeButton, setActiveButton] = useState("NFTs");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderBoxes = () => {
    const data = {
      NFTs: [
        {
          name: "Andromedia",
          subtitle: "Flower Chunky",
          leftTitle: "Price",
          leftSubtitle: "0.010ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.008ETH",
          image: "../src/assets/nft1.png",
        },
        {
          name: "Expressions",
          subtitle: "Reclaim",
          leftTitle: "Price",
          leftSubtitle: "0.025ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.010ETH",
          image: "../src/assets/nft2.png",
        },
        {
          name: "Crystal Doomed",
          subtitle: "Skeletal Doiple",
          leftTitle: "Price",
          leftSubtitle: "0.250ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.190ETH",
          image: "../src/assets/nft3.png",
        },
        {
          name: "Nemus Genesis",
          subtitle: "Genesis Artiku #01",
          leftTitle: "Price",
          leftSubtitle: "0.500ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.450ETH",
          image: "../src/assets/nft4.png",
        },
        {
          name: "NFT 5",
          subtitle: "Subtitle 5",
          leftTitle: "Price",
          leftSubtitle: "0.100ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.080ETH",
          image: "../src/assets/nft5.png",
        },
        {
          name: "NFT 6",
          subtitle: "Subtitle 6",
          leftTitle: "Price",
          leftSubtitle: "0.200ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.150ETH",
          image: "../src/assets/nft6.png",
        },
      ],
      Collections: [
        {
          name: "Collection 1",
          subtitle: "Subtitle 1",
          leftTitle: "Price",
          leftSubtitle: "0.100ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.080ETH",
          image: "../src/assets/nft2.png",
        },
        {
          name: "Collection 2",
          subtitle: "Subtitle 2",
          leftTitle: "Price",
          leftSubtitle: "0.200ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.150ETH",
          image: "../src/assets/nft1.png",
        },
        {
          name: "Collection 3",
          subtitle: "Subtitle 3",
          leftTitle: "Price",
          leftSubtitle: "0.300ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.250ETH",
          image: "../src/assets/nft3.png",
        },
        {
          name: "Collection 4",
          subtitle: "Subtitle 4",
          leftTitle: "Price",
          leftSubtitle: "0.400ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.350ETH",
          image: "../src/assets/nft4.png",
        },
        {
          name: "Collection 5",
          subtitle: "Subtitle 5",
          leftTitle: "Price",
          leftSubtitle: "0.500ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.450ETH",
          image: "../src/assets/nft5.png",
        },
        {
          name: "Collection 6",
          subtitle: "Subtitle 6",
          leftTitle: "Price",
          leftSubtitle: "0.600ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.550ETH",
          image: "../src/assets/nft6.png",
        },
      ],
      Creators: [
        {
          name: "Creator 1",
          subtitle: "Subtitle 1",
          leftTitle: "Price",
          leftSubtitle: "0.300ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.250ETH",
          image: "../src/assets/nft2.png",
        },
        {
          name: "Creator 2",
          subtitle: "Subtitle 2",
          leftTitle: "Price",
          leftSubtitle: "0.400ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.350ETH",
          image: "../src/assets/nft1.png",
        },
        {
          name: "Creator 3",
          subtitle: "Subtitle 3",
          leftTitle: "Price",
          leftSubtitle: "0.500ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.450ETH",
          image: "../src/assets/nft2.png",
        },
        {
          name: "Creator 4",
          subtitle: "Subtitle 4",
          leftTitle: "Price",
          leftSubtitle: "0.600ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.550ETH",
          image: "../src/assets/nft5.png",
        },
        {
          name: "Creator 5",
          subtitle: "Subtitle 5",
          leftTitle: "Price",
          leftSubtitle: "0.700ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.650ETH",
          image: "../src/assets/nft4.png",
        },
        {
          name: "Creator 6",
          subtitle: "Subtitle 6",
          leftTitle: "Price",
          leftSubtitle: "0.800ETH",
          rightTitle: "Current Bid",
          rightSubtitle: "0.750ETH",
          image: "../src/assets/nft1.png",
        },
      ],
    };

    return data[activeButton].map((item, index) => (
      <div key={index} className="bg-gray-800 p-2 rounded-lg border-2 border-gray-700">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-28 object-cover rounded-lg mb-2"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-sm text-gray-500 font-semibold">{item.name}</div>
            <div className=" rounded-full w-4 h-4 ml-2">
                <img src="../src/assets/verificado.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="text-lg text-white my-1">{item.subtitle}</div>
        <div className="mt-2 bg-gray-700 px-2 rounded-lg">
          <div className="flex justify-between my-2">
            <div>
              <div className="text-xs text-gray-400 mt-2">{item.leftTitle}</div>
              <div className="text-sm text-violet-600 mb-2">{item.leftSubtitle}</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mt-2">{item.rightTitle}</div>
              <div className="text-sm mb-2">{item.rightSubtitle}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
        <NavbarRetroceso title="Art"/>
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Q Search..."
          className="px-4 py-2 bg-gray-700 rounded-lg w-full mr-4"
        />
      </div>
      <div className="flex space-x-3 mb-6">
        <button
          className={`px-6 py-2 rounded-lg ${
            activeButton === "NFTs" ? "bg-violet-600" : "bg-gray-700"
          }`}
          onClick={() => handleButtonClick("NFTs")}
        >
          NFTs
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            activeButton === "Collections" ? "bg-violet-600" : "bg-gray-700"
          }`}
          onClick={() => handleButtonClick("Collections")}
        >
          Collections
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            activeButton === "Creators" ? "bg-violet-600" : "bg-gray-700"
          }`}
          onClick={() => handleButtonClick("Creators")}
        >
          Creators
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {renderBoxes()}
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default DetailCategory;
