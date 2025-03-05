import React, { useState } from "react";

const Navbar = () => (
  <div className="flex justify-between items-center px-4 py-6 bg-gray-800 text-white">
    <button className="text-white">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
    <h1 className="text-xl font-semibold">Statistics</h1>
    <button className="text-white">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        ></path>
      </svg>
    </button>
  </div>
);

const ActivityItem = ({
  avatar,
  leftTitle,
  leftSubtitle,
  rightTitle,
  rightSubtitle,
}) => (
  <div className="flex items-center justify-between p-4 border mx-4 my-5 border-gray-700 rounded-2xl">
    <div className="flex items-center">
      <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
      <div className="ml-4">
        <h3 className="font-semibold text-white">{leftTitle}</h3>
        <p className="text-sm text-gray-400">{leftSubtitle}</p>
      </div>
    </div>
    <div className="text-right">
      <h3 className="font-semibold text-white">{rightTitle}</h3>
      <p className="text-sm text-gray-400">{rightSubtitle}</p>
    </div>
  </div>
);

const ActivityList = ({ activities }) => (
  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
    {activities.map((activity, index) => (
      <ActivityItem key={index} {...activity} />
    ))}
  </div>
);

const Activity = () => {
  const [activeTab, setActiveTab] = useState("Activity");

  const tabs = {
    Ranking: [
      {
        avatar: "../src/assets/avatar-01.svg",
        leftTitle: "Genesis Art...",
        leftSubtitle: "Sales",
        rightTitle: "0.450 ETH",
        rightSubtitle: "23 sec ago",
      },
      {
        avatar: "../src/assets/avatar-02.svg",
        leftTitle: "Genesis Arti...",
        leftSubtitle: "offer",
        rightTitle: "0.450 ETH",
        rightSubtitle: "1m ago",
      },
      {
        avatar: "../src/assets/avatar-03.svg",
        leftTitle: "Liquid Rumi...",
        leftSubtitle: "Listing",
        rightTitle: "0.028 ETH",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "../src/assets/avatar-04.svg",
        leftTitle: "Chypher #000",
        leftSubtitle: "Collection offer",
        rightTitle: "0.009 ETH",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "../src/assets/avatar-05.svg",
        leftTitle: "Ostored Go...",
        leftSubtitle: "Sales",
        rightTitle: "0.190 ETH",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "../src/assets/avatar-06.svg",
        leftTitle: "Moonbirds",
        leftSubtitle: "Sales",
        rightTitle: "0.190 ETH",
        rightSubtitle: "5m ago",
      },
      {
        avatar: "../src/assets/avatar-01.svg",
        leftTitle: "axies...",
        leftSubtitle: "Listing",
        rightTitle: "0.200 ETH",
        rightSubtitle: "10m ago",
      },
    ],
    Activity: [
      {
        avatar: "../src/assets/avatar-02.svg",
        leftTitle: "Genesis Arti...",
        leftSubtitle: "offer",
        rightTitle: "0.450 ETH",
        rightSubtitle: "1m ago",
      },
      {
        avatar: "../src/assets/avatar-01.svg",
        leftTitle: "Genesis Art...",
        leftSubtitle: "Sales",
        rightTitle: "0.450 ETH",
        rightSubtitle: "23 sec ago",
      },
      {
        avatar: "../src/assets/avatar-03.svg",
        leftTitle: "Liquid Rumi...",
        leftSubtitle: "Listing",
        rightTitle: "0.028 ETH",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "../src/assets/avatar-04.svg",
        leftTitle: "Chypher #000",
        leftSubtitle: "Collection offer",
        rightTitle: "0.009 ETH",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "../src/assets/avatar-05.svg",
        leftTitle: "Ostored Go...",
        leftSubtitle: "Sales",
        rightTitle: "0.190 ETH",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "../src/assets/avatar-06.svg",
        leftTitle: "Moonbirds",
        leftSubtitle: "Sales",
        rightTitle: "0.190 ETH",
        rightSubtitle: "5m ago",
      },
      {
        avatar: "../src/assets/avatar-01.svg",
        leftTitle: "axies...",
        leftSubtitle: "Listing",
        rightTitle: "0.200 ETH",
        rightSubtitle: "10m ago",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />

      <div className="grid grid-cols-2 gap-4 p-4">
        <button
          onClick={() => setActiveTab("Ranking")}
          className={`py-2 text-center ${
            activeTab === "Ranking"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
        >
          Ranking
        </button>
        <button
          onClick={() => setActiveTab("Activity")}
          className={`py-2 text-center ${
            activeTab === "Activity"
              ? "border-b-2 border-white text-white"
              : "text-gray-400"
          }`}
        >
          Activity
        </button>
      </div>

      {/* Carrusel de filtros */}
      <div className="flex overflow-x-auto p-4 space-x-2 no-scrollbar">
        {["Event Type", "Collections", "Filter 3", "Filter 4"].map(
          (filter, index) => (
            <button
              key={index}
              className="flex-none flex items-center justify-center px-4 py-2 rounded-lg bg-gray-700 text-gray-400 whitespace-nowrap"
              style={{ width: "calc(50% - 0.5rem)" }}
            >
              {filter}
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          )
        )}
      </div>

      <ActivityList activities={tabs[activeTab]} />
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Activity;
