// pages/index.js
"use client";
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const HomePage = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">CRUD </h1>
      {!flag && (
        <div className="w-100 flex">
          <button
            className="centre text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setFlag(true)}
          >
            Add New Data
          </button>
        </div>
      )}
      {flag ? <Form handleFlag={setFlag} /> : <Table />}
    </div>
  );
};

export default HomePage;
