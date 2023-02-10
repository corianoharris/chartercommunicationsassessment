import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      await fetch("http://localhost:3000/mockData.json")
        .then((res) => res.json())
        .then((data) => setRecords(data));
    };
    getAPI();
  }, [records]);

  return (
    <div className="App">
      <h1>Transcation Records</h1>{" "}
      {records.map((record) => (
        <div key={record.id} className="records">
          UserId: {record.id} || Date: {record.transcationDate}
          {"  "} || Price: {record.price}
          {"  "} || Reward:
          {record.price > 50 && record.price <= 100
            ? record.price - 50
            : record.price > 100
            ? 2 * (record.price - 100)
            : 0}
        </div>
      ))}
    </div>
  );
};

export default App;
