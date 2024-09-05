import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if the credentials match
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 w-full border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 w-full border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <span
            className="text-pink-700 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
