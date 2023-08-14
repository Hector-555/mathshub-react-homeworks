import React from "react";
import "./FinanceList.css";
import Card from "../UI/Card";

function FinanceList({ financeList }) {
  return (
    <Card className="users">
      <div className="table-container">
        <div>
          <p>Всего лет</p>
          <p>Общие накопления</p>
          <p>Накопления с процентов (в год)</p>
          <p>Всего с процентов</p>
          <p>Всего инвестировано</p>
        </div>

        {financeList.map((finance) => (
          <div>
            <p key={finance.id}>{finance.duration}</p>
            <p key={finance.id}>$ {(+finance.capital + +finance.investment) * finance.procent / 100 + (+finance.capital + +finance.investment)}</p>
            <p key={finance.id}>$ {(+finance.capital + +finance.investment) * finance.procent / 100}</p>
            <p key={finance.id}>$ {(+finance.capital + +finance.investment) * finance.procent / 100}</p>
            <p key={finance.id}>$ {+finance.capital + +finance.investment}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default FinanceList;
