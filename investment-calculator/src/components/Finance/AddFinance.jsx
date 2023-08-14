/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from "react";
import "./AddFinance.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddFinance({ onAddFinance }) {
  const capitalInputRef = useRef();
  const investmentInputRef = useRef();
  const procentInputRef = useRef();
  const durationInputRef = useRef();

  const [error, setError] = useState(null);

  const addFinanceHandler = (event) => {
    const capital = capitalInputRef.current.value;
    const investment = investmentInputRef.current.value;
    const procent = procentInputRef.current.value;
    const duration = durationInputRef.current.value;
    event.preventDefault();

    if (
      capital.trim().length === 0 ||
      investment.trim().length === 0 ||
      procent.trim().length === 0 ||
      duration.trim().length === 0
    ) {
      setError({
        title: "Ошибка в заполнении формы",
        message: "Пожалуйста, заполните все поля формы!",
      });
      return;
    }

    if (capital < 0 || investment < 0 || procent < 0 || duration < 0) {
      setError({
        title: "Ошибка в заполнении формы",
        message: "Введенные значения не могут быть отрицательными!",
      });
      return;
    }

    onAddFinance(capital, investment, procent, duration);
    capitalInputRef.current.value = capital;
    investmentInputRef.current.value = investment;
    procentInputRef.current.value = procent;
    durationInputRef.current.value = duration;
  };

  const errorHandler = () => {
    setError(null);
    capitalInputRef.current.value = "";
    investmentInputRef.current.value = "";
    procentInputRef.current.value = "";
    durationInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card>
        <form action="" className="form-container" onSubmit={addFinanceHandler}>
          <div className="input-container">
            <div>
              <label htmlFor="capital">Ваши текущие накопления ($)</label>
              <input type="number" id="capital" ref={capitalInputRef} />
            </div>
            <div>
              <label htmlFor="investment">Сколько отложите за год ($)</label>
              <input type="number" id="investment" ref={investmentInputRef} />
            </div>
            <div>
              <label htmlFor="procent">Ожидаемый процент (%, в год)</label>
              <input type="number" id="procent" ref={procentInputRef} />
            </div>
            <div>
              <label htmlFor="duration">
                Продолжительность инвестирования (лет)
              </label>
              <input type="number" id="duration" ref={durationInputRef} />
            </div>
          </div>
          <div className="btn-container">
            <Button type="reset" className="reset-btn">
              Сбросить
            </Button>
            <Button type="submit" className="submit-btn">
              Рассчитать
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default AddFinance;
