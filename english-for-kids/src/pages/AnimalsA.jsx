import React from "react";
import Card from "../components/UI/Card";
import animalsA from "../data/animalsA/animalsA";
import rotate from "../components/UI/icons/rotate-btn.png";

function AnimalsA() {
  return (
    <div className="main-container">
      {animalsA.map((animals) => (
        <Card>
          <div className="card-container">
            <div className="card-side card-side-front">
              <img src={animals.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{animals.title}</h3>
              <button type="button" className="card-container__btn">
                <img src={rotate} alt="rotate" />
              </button>
            </div>

            <div className="card-side card-side-back">
              <img src={animals.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{animals.titleRus}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default AnimalsA;
