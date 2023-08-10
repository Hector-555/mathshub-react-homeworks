/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./AddData.css";

function AddData() {
  return (
    <form action="" className="form-container">
      <div className="input-container">
        <div>
          <label htmlFor="capital">Ваши текущие накопления ($)</label>
          <input type="number" id="capital" />
        </div>
        <div>
          <label htmlFor="investment">Сколько отложите за год ($)</label>
          <input type="number" id="investment" />
        </div>
        <div>
          <label htmlFor="procent">Ожидаемый процент (%, в год)</label>
          <input type="number" id="procent" />
        </div>
        <div>
          <label htmlFor="duration">
            Продолжительность инвестирования (лет)
          </label>
          <input type="number" id="duration" />
        </div>
      </div>
      <div className="btn-container">
        <button type="reset" className="reset-btn">Сбросить</button>
        <button type="submit" className="submit-btn">Рассчитать</button>
      </div>
    </form>
  );
}

export default AddData;
