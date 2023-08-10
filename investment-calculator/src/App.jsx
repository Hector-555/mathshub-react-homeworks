import React from "react";
import "./App.css";
import AddData from "./components/FormData/AddData";
import TableResults from "./components/TableResults/TableResults";

function App() {
  return (
    <div className="main-container">
      <h1>Калькулятор инвестиций</h1>
      <AddData />
      <TableResults />
    </div>
  );
}

export default App;
