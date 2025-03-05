import React, { useState } from "react";

const Navbar = () => (
  <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
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
    <h1 className="text-xl font-semibold">Activity</h1>
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
  <div className="flex items-center justify-between p-4 border-b border-gray-700">
    <div className="flex items-center">
      <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
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
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 1",
        leftSubtitle: "0.450 ETH",
        rightTitle: "Sales",
        rightSubtitle: "23 sec ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 2",
        leftSubtitle: "0.029 ETH",
        rightTitle: "Listing",
        rightSubtitle: "1m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 3",
        leftSubtitle: "0.009 ETH",
        rightTitle: "Collection offer",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 4",
        leftSubtitle: "0.190 ETH",
        rightTitle: "Sales",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 5",
        leftSubtitle: "0.190 ETH",
        rightTitle: "Offer",
        rightSubtitle: "3m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 6",
        leftSubtitle: "0.100 ETH",
        rightTitle: "Sales",
        rightSubtitle: "5m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Ranking 7",
        leftSubtitle: "0.200 ETH",
        rightTitle: "Listing",
        rightSubtitle: "10m ago",
      },
    ],
    Activity: [
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 1",
        leftSubtitle: "0.300 ETH",
        rightTitle: "Offer",
        rightSubtitle: "2m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 2",
        leftSubtitle: "0.400 ETH",
        rightTitle: "Sales",
        rightSubtitle: "4m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 3",
        leftSubtitle: "0.500 ETH",
        rightTitle: "Listing",
        rightSubtitle: "6m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 4",
        leftSubtitle: "0.600 ETH",
        rightTitle: "Offer",
        rightSubtitle: "8m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 5",
        leftSubtitle: "0.700 ETH",
        rightTitle: "Sales",
        rightSubtitle: "10m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 6",
        leftSubtitle: "0.800 ETH",
        rightTitle: "Listing",
        rightSubtitle: "12m ago",
      },
      {
        avatar: "https://via.placeholder.com/40",
        leftTitle: "Activity 7",
        leftSubtitle: "0.900 ETH",
        rightTitle: "Offer",
        rightSubtitle: "14m ago",
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
              ? "border-b-2 border-blue-500 text-white"
              : "text-gray-400"
          }`}
        >
          Ranking
        </button>
        <button
          onClick={() => setActiveTab("Activity")}
          className={`py-2 text-center ${
            activeTab === "Activity"
              ? "border-b-2 border-blue-500 text-white"
              : "text-gray-400"
          }`}
        >
          Activity
        </button>
      </div>

      <div className="flex overflow-x-auto p-4 space-x-2">
        {["Filter 1", "Filter 2", "Filter 3", "Filter 4"].map(
          (filter, index) => (
            <button
              key={index}
              className={`flex-none px-4 py-2 rounded-lg ${
                index < 2 ? "w-1/2" : "w-1/5"
              } bg-gray-700 text-white`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      <ActivityList activities={tabs[activeTab]} />
    </div>
  );
};

export default Activity;
