import React, { useState } from "react";
import "./App.css";
import FinanceList from "./components/Finance/FinanceList";
import AddFinance from "./components/Finance/AddFinance";

function App() {
  const [financeList, setFinanceList] = useState([]);

  const addFinanceHandler = (
    financeCapital,
    financeInvestment,
    financeProcent,
    financeDuration
  ) => {
    setFinanceList(() => [
      {
        capital: financeCapital,
        investment: financeInvestment,
        procent: financeProcent,
        duration: financeDuration,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <div className="main-container">
      <h1>Калькулятор инвестиций</h1>
      <AddFinance onAddFinance={addFinanceHandler} />
      <FinanceList financeList={financeList} />
    </div>
  );
}

export default App;
