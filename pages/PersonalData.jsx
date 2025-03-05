import React, { useState } from "react";

const PersonalData = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Jerry Thomas",
    phone: "+1 234 567 890",
    email: "utuxseju@gmail.com",
    avatar: "../src/assets/Avatar.svg", // Ruta inicial del avatar
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen text-white  p-4">
      {/* Header con botones y título */}
      <div className="flex items-center justify-between mb-12">
        {/* Botón de retroceder con SVG */}
        <button
          onClick={() => window.history.back()}
          className="text-gray-400 hover:text-white flex items-center"
        >
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
        </button>
        <h1 className="text-xl font-bold">Personal Data</h1>
        <button
          onClick={handleEdit}
          className="text-red-500 hover:text-red-400 flex items-center"
        >
          {isEditing ? (
            <>
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center my-6">
        <div className="w-32 h-32 rounded-full flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={userData.avatar}
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Botón para cambiar el avatar (solo en modo edición) */}
        {isEditing && (
          <div className="flex items-end">
            <label className="foto text-white h-10 ml-10 negativo px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
            </label>
          </div>
        )}

        {/* Información del usuario */}
        <div className="flex flex-col p-4 rounded-2xl w-full">
          {isEditing ? (
            <>
              <span className="py-4">Full name</span>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="flex items-center bg-gray-800 p-4 rounded-2xl w-full"
              />
              <span className="py-4">Phone Number</span>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="flex items-center bg-gray-800 p-4 rounded-2xl w-full"
              />
              <span className="py-4">Email</span>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="flex items-center bg-gray-800 p-4 rounded-2xl w-full"
              />
              <div className="fixed bottom-0 left-0 right-0 p-4">
                <button
                  onClick={handleEdit}
                  className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition"
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <h2 className="text-start text-sm py-4">Full name</h2>
                <div className="flex items-center bg-gray-800 p-4 rounded-2xl w-full">
                  <p className="text-xl font-semibold">{userData.name}</p>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-start text-sm py-4">Phone number</h2>
                <div className="flex items-center bg-gray-800 p-4 rounded-2xl w-full">
                  <p className="text-gray-400">{userData.phone}</p>
                </div>
              </div>
              <div className="w-full">
                <h2 className="text-start text-sm py-4">Email</h2>
                <div className="flex items-center bg-gray-800 p-4 rounded-2xl w-full">
                  <p className="text-gray-400">{userData.email}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalData;