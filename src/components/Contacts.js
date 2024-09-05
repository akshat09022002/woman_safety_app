import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPhone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contacts() {
  const [isAddContactOpen, setIsAddContactOpen] = useState(false);
  const [contacts, setContacts] = useState([]);
  const maxContacts = 10;

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  const toggleAddContact = () => {
    setIsAddContactOpen(!isAddContactOpen);
  };

  const saveContact = (newContact) => {
    if (contacts.length >= maxContacts) {
      toast.error("Maximum number of contacts reached!");
      return;
    }
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    toggleAddContact();
    const remainingContacts = maxContacts - updatedContacts.length;
    toast.success(`Contact saved! ${remainingContacts} ${remainingContacts === 1 ? 'slot' : 'slots'} remaining.`);
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    const remainingContacts = maxContacts - updatedContacts.length;
    toast.success(`Contact deleted! ${remainingContacts} ${remainingContacts === 1 ? 'slot' : 'slots'} remaining.`);
  };

  return (
    <div className="relative min-h-screen bg-pink-200 flex items-center justify-center">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">Contacts</h1>
        <button
          className="bg-pink-500 text-white p-2 rounded mt-4 flex items-center"
          onClick={toggleAddContact}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Add Contact
        </button>

        <ul className="mt-4 space-y-4">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="bg-green-100 p-4 rounded-lg shadow-md text-gray-700 text-lg flex justify-between items-center"
            >
              <div>
                <div>{contact.name}</div>
                <div>{contact.phone}</div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleCall(contact.phone)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isAddContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <AddContact toggleAddContact={toggleAddContact} saveContact={saveContact} />
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Contacts;
