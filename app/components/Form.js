// components/Form.js
"use client";
import { stringify } from "postcss";
import { useState } from "react";

const Form = ({ handleFlag }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      let response = await fetch("http://localhost:8144/api/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          phoneNo: phoneNumber,
          email: email,
          hobby: hobbies,
        }),
      });
      // response=await response.json;
      // localStorage.setItem("user",stringify(response));

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      console.log("User added successfully");
      handleFlag(false)
      // Optionally, you can reset the form fields here
      setName("");
      setPhoneNumber("");
      setEmail("");
      setHobbies("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 centre align-form ">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
        <div className="sm:col-span-3 size">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:col-span-4 size">
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <input
              id="number"
              name="phone_number"
              type="number"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:col-span-4 size">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:col-span-4 size">
          <label
            htmlFor="hobbies"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Hobbies
          </label>
          <div className="mt-2">
            <input
              id="hobbies"
              name="hobbies"
              type="text"
              autoComplete="hobbies"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
        <button
          onClick={() => handleFlag(false)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-5"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
