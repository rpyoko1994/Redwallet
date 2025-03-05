import React, { useState } from 'react';
import NavbarRetroceso from '../component/NavbarRetroceso';

const PushNotification = () => {
  const [notifications, setNotifications] = useState({
    news: true,
    promotion: false,
    community: false,
    telegram: true,
    email: true,
    whatsapp: true,
  });

  const handleToggle = (name) => {
    setNotifications({
      ...notifications,
      [name]: !notifications[name],
    });
  };

  const notificationItems = [
    {
      id: 'news',
      image: '../src/assets/news.svg',
      title: 'News',
      subtitle: 'Receive notification for news',
    },
    {
      id: 'promotion',
      image: '../src/assets/ticket.svg',
      title: 'Promotion',
      subtitle: 'Receive notification for promotion',
    },
    {
      id: 'community',
      image: '../src/assets/user.svg',
      title: 'Community',
      subtitle: 'Receive notification for community',
    },
    {
      id: 'telegram',
      image: '../src/assets/telegram2.svg',
      title: 'Telegram',
      subtitle: 'Get notified from Telegram chat',
    },
    {
      id: 'email',
      image: '../src/assets/mail.svg',
      title: 'Email',
      subtitle: 'Get notified from Email',
    },
    {
      id: 'whatsapp',
      image: '../src/assets/whatsapp.svg',
      title: 'Whatsapp',
      subtitle: 'Get notified from Whatsapp',
    },
  ];

  return (
    <div className="p-4 text-white">
        <NavbarRetroceso title="Notification"/>
      <div className="space-y-5 py-4">
        {notificationItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-gray-500 border-2 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-xs text-gray-600">{item.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => handleToggle(item.id)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                notifications[item.id] ? 'bg-rojo' : 'bg-gray-800'
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                  notifications[item.id] ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PushNotification;