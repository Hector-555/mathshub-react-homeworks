import React from "react";
import Card from "../components/UI/Card";
import emotions from "../data/emotions/emotions";
import rotate from "../components/UI/icons/rotate-btn.png";

function Emotions() {
  return (
    <div className="main-container">
      {emotions.map((emotion) => (
        <Card>
          <div className="card-container">
            <div className="card-side card-side-front">
              <img src={emotion.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{emotion.title}</h3>
              <button type="button" className="card-container__btn">
                <img src={rotate} alt="rotate" />
              </button>
            </div>

            <div className="card-side card-side-back">
              <img src={emotion.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{emotion.titleRus}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Emotions;
