import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Female");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Save the user's data in localStorage
    const user = { email, password, gender, mobile };
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to login page after successful signup
    alert("Sign-up successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <select
            className="mb-4 p-2 w-full border border-gray-300 rounded-md"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Mobile Number"
            className="mb-4 p-2 w-full border border-gray-300 rounded-md"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-pink-700 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
