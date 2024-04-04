// components/Table.js
"use client";
import React, { useState, useEffect } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    fetch("http://localhost:8144/api/user/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const handleUpdate = (id) => {
    // Implement update functionality here
    console.log("Update row with ID:", id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality here
    console.log("Delete row with ID:", id);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          ></th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Phone Number
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Email
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Hobbies
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row) => (
          <tr key={row.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <input type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.phoneNo}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.hobby}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleUpdate(row.id)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(row.id)}
                className="text-red-600 hover:text-red-900 ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
