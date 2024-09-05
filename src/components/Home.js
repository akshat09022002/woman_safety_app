// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faExclamationTriangle,
  faMapMarkerAlt,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css"; // Assuming styles are handled here

function Home() {
  const navigate = useNavigate();

  const handleParentsClick = () => {
    navigate("/parents-options");
  };

  const handleLocationClick = () => {
    navigate("/location-options");
  };

  const handlePanicClick = () => {
    navigate("/panic-loader"); // Navigate to the loader screen when panic button is clicked
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">She Raksha</h1>
        <div className="mb-6">
          <img
            src="https://morbiupdate.com/wp-content/uploads/2022/04/women-protection-black-glyph-icon-protect-girls-against-violence-female-empowerment-women-safety-gender-equality-provide-security-silhouette-symbol-on-white-space-isolated-illustration-vector.png"
            alt="Group holding hands"
            className="w-full h-auto mb-4"
          />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <button className="button bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-pink-600">
            <FontAwesomeIcon icon={faAddressBook} className="text-3xl mb-2" />{" "}
            Contacts
          </button>
          <button
            onClick={() => navigate("/alert-options")}
            className="button bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-pink-600"
          >
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="text-3xl mb-2"
            />{" "}
            Alert
          </button>
          <button
            onClick={handleLocationClick}
            className="button bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-pink-600"
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl mb-2" />{" "}
            Location
          </button>
          <button
            onClick={handleParentsClick}
            className="button bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-pink-600"
          >
            <FontAwesomeIcon icon={faShieldAlt} className="text-3xl mb-2" />{" "}
            Safety
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handlePanicClick}
            className="button bg-pink-500 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg"
          >
            PANIC
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
