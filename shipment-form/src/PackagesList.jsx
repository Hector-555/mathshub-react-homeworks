import React from "react";
import "./PackagesList.css";

function PackagesList() {
  return (
    <>
      <div className="packages-list-wrapper">
        <div className="package-item-wrapper">
          <h4>От</h4>
          <p>Имя:</p>
          <p>Телефон</p>
          <p>Адрес</p>
        </div>
        <div className="package-item-wrapper">
          <h4>Кому</h4>
          <p>Имя</p>
          <p>Телефон</p>
          <p>Адрес</p>
        </div>
        <div className="package-item-wrapper">
          <p>Страховка</p>
          <p>Отправление</p>
          <p>Вес (кг)</p>
          <p>Д х Ш х В (см)</p>
        </div>
      </div>
    </>
  );
}

export default PackagesList;
