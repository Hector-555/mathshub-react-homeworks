/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import "./SendingForm.css";

function SendingForm() {

  return (
    
      <form className="form">
        <div className="package-sides-container">
          <div className="sender-container">
            <h2>Отправитель</h2>
            <div className="label-wrapper">
              <label htmlFor="senderName">Имя</label>
              <input
                type="text"
                name="senderName"
                id="senderName"
              />
            </div>
            <div className="label-wrapper">
              <label htmlFor="senderPhone">Телефон</label>
              <input
                type="number"
                name="senderPhone"
                id="senderPhone"
              />
            </div>
            <div className="label-wrapper">
              <label htmlFor="senderAddress">Адрес</label>
              <input
                type="text"
                name="senderAddress"
                id="senderAddress"
              />
            </div>
          </div>

          <div className="addressee-wrapper">
            <h2>Адресат</h2>
            <div className="label-wrapper">
              <label htmlFor="addresseeName">Имя</label>
              <input
                type="text"
                name="addresseeName"
                id="addresseeName"
              />
            </div>
            <div className="label-wrapper">
              <label htmlFor="addresseePhone">Телефон</label>
              <input
                type="number"
                name="addresseePhone"
                id="addresseePhone"
              />
            </div>
            <div className="label-wrapper">
              <label htmlFor="addresseeAddress">Адрес</label>
              <input
                type="text"
                name="addresseeAddress"
                id="addresseeAddress"
              />
            </div>
          </div>
        </div>

        <div>
          <h2>Посылка</h2>
          <div className="package-wrapper">
            <div>
              <h3>Габариты</h3>
              <div className="label-wrapper">
                <label htmlFor="length">Длина (см)</label>
                <input
                  type="number"
                  name="length"
                  id="length"
                />
              </div>
              <div className="label-wrapper">
                <label htmlFor="width">Ширина (см)</label>
                <input
                  type="number"
                  name="width"
                  id="width"
                />
              </div>
              <div className="label-wrapper">
                <label htmlFor="height">Высота (см)</label>
                <input
                  type="number"
                  name="height"
                  id="height"
                />
              </div>
            </div>

            <div>
              <h3>Дополнительно</h3>
              <div className="label-wrapper">
                <label htmlFor="weight">Вес (кг)</label>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                />
              </div>
              <div className="checkbox-wrapper">
                <input type="checkbox" name="insurance" id="insurance" />
                <label htmlFor="insurance">Страхование</label>
              </div>
              <div>
                <label className="list-wrapper">Тип отправления</label>
                <select className="type-of-send">
                  <option>Обычное</option>
                  <option>Заказное</option>
                  <option>Срочное</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn">
          Отправить
        </button>
      </form>
    
  );
}

export default SendingForm;
