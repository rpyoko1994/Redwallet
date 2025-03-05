import React, { useState } from "react";
import Navbar from "../component/Navbar";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validar que la contraseña tenga al menos 8 caracteres
    if (password.length < 8) {
      setError("Your password is not strong enough. Your password is at least 8 characters.");
      return;
    }

    // Si las contraseñas coinciden y son válidas, continuar
    setError("");
    alert("Password reset successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-end justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-start text-white mb-4">Create New Password</h1>
          <p className="text-gray-500 text-start mb-6 pr-4">
            Your new password must be different from your previous password.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mt-10 ">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value.length < 8) {
                    setError("Your password is not strong enough. Your password is at least 8 characters.");
                  } else {
                    setError("");
                  }
                }}
                className="mt-1 block w-full px-4 py-4 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rojo"
                placeholder="Enter your new password"
                required
              />
              {/* Mensaje de error debajo del campo de contraseña */}
              {error && password.length < 8 && (
                <p className="text-rojo text-sm mt-2 px-4">{error}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-4 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rojo"
                placeholder="Confirm your new password"
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Botón "Go" al final de la página */}
      <div className="w-full max-w-md p-4 h-96 items-end flex">
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-rojo text-white rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;