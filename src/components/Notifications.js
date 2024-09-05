import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notifications = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/panic");
  };

  const handleIgnore = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200">
      <div className="bg-white h-[556px] w-[272px] rounded-tl-3xl rounded-br-3xl shadow-lg p-6">  
      {notifications.length === 0 ? (
        <div className="bg-red-100 rounded-lg shadow-lg p-6 max-w-md w-full mb-4"
          >
            <h2 className="text-xl font-bold mb-2">No new notifications</h2>
            <p className="text-gray-700 mb-4"></p>
            </div>
      ) : (
        notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-red-100 rounded-lg shadow-lg p-6 max-w-md w-full mb-4"
          >
            <h2 className="text-xl font-bold mb-2">Help Required</h2>
            <p className="text-gray-700 mb-4">
            Urgent: Immediate Assistance Required for "Girlsname"
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleAccept}
                className="bg-green-500 text-white p-2 rounded-lg"
              >
                Accept
              </button>
              <button
                onClick={handleIgnore}
                className="bg-gray-500 text-white p-2 rounded-lg"
              >
                Ignore
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

export default Notifications;
