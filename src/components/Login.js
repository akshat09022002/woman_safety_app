import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // WebSocket and location update handler
  const handleWebSocketAndLocation = (userId) => {
    // Connect to the WebSocket server
    const socket = new WebSocket("ws://localhost:5173?userId=data._id");

    // Handle WebSocket connection open event
    socket.onopen = () => {
      console.log("Connected to WebSocket server");

      // Function to fetch location and emit to the socket
      const fetchAndSendLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;


              // Emit location data and userId to the WebSocket server
              const locationData = { latitude, longitude, userId };
              socket.send(JSON.stringify(locationData));

              console.log("Location sent:", { latitude, longitude });

              setTimeout(fetchAndSendLocation, 30000); // 30 seconds
            },
            (error) => {
              console.error("Error fetching location:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      };

      // Start fetching and sending location
      fetchAndSendLocation();
    };

    // Handle WebSocket error event
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        // Send login request to the backend using axios
        const response = await axios.post("http://localhost:5000/api/v1/user/login", {
          email,
          password,
        });

        const data = response.data;
        console.log(data);
        
        if (response.status === 201) {
          // Store login state and userId in local storage
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userId", data.userId);

          // Connect to WebSocket and send location data
          handleWebSocketAndLocation(data.userId);

          // Redirect to home page
          navigate("/home");
        } else {
          alert(data.error || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred during login");
      }
    } else {
      alert("Please fill in all fields");
    }
  };


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-pink-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white text-lg font-bold py-2 px-4 rounded-md shadow-md hover:bg-pink-700"
          >
            Login
          </button>
        </form>
        <p className="text-center text-pink-700 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-pink-500 underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;