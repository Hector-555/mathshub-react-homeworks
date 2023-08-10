import React from "react";
import "./TableResults.css";

function TableResults() {
    return (
        <div className="table-container">
            <div>
                <p>Год</p>
                <p>Общие накопления</p>
                <p>Накопления с процентами (в год)</p>
                <p>Всего с процентами</p>
                <p>Всего инвестировано</p>
            </div>
            <div>
                <p>2023</p>
                <p>$ 11 700</p>
                <p>$ 500</p>
                <p>$ 500</p>
                <p>$ 11 200</p>
            </div>
        </div>
    )
}

export default TableResults