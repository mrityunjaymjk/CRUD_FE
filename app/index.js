// pages/index.js or any other page component
import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import Form from "./components/Form";

const Form = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    fetch("http://localhost:8144/api/user/all")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <Table userData={userData} />
    </div>
  );
};

export default Form;
