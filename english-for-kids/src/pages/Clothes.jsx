import React from "react";
import Card from "../components/UI/Card";
import clothes from "../data/clothes/clothes";
import rotate from "../components/UI/icons/rotate-btn.png";

function Clothes() {
  return (
    <div className="main-container">
      {clothes.map((thing) => (
        <Card>
          <div className="card-container">
            <div className="card-side card-side-front">
              <img src={thing.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{thing.title}</h3>
              <button type="button" className="card-container__btn">
                <img src={rotate} alt="rotate" />
              </button>
            </div>

            <div className="card-side card-side-back">
              <img src={thing.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{thing.titleRus}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Clothes;
