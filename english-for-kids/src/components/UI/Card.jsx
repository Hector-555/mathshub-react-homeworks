import React from "react";
import "./Card.css";
import rotate from "./icons/rotate-btn.png";
import testImg from "./icons/cat.jpg";

function Card() {
  return (
    <div className="card-container">
      <div className="card-side card-side-front">
        <img src={testImg} alt="" className="card-container__img" />
        <h3 className="card-container__title">Cat</h3>
        <button type="button" className="card-container__btn">
          <img src={rotate} alt="rotate" />
        </button>
      </div>
      <div className="card-side card-side-back">
        <img src={testImg} alt="" className="card-container__img" />
        <h3 className="card-container__title">Кот</h3>
      </div>
    </div>
  );
}

export default Card;
