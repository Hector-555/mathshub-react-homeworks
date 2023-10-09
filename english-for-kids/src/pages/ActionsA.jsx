import React from "react";
import Card from "../components/UI/Card";
import actionsA from "../data/actionsA/actionsA";
import rotate from "../components/UI/icons/rotate-btn.png";

function ActionsA() {
  return (
    <div className="main-container">
      {actionsA.map((action) => (
        <Card>
          <div className="card-container">
            <div className="card-side card-side-front">
              <img src={action.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{action.title}</h3>
              <button type="button" className="card-container__btn">
                <img src={rotate} alt="rotate" />
              </button>
            </div>

            <div className="card-side card-side-back">
              <img src={action.image} alt="" className="card-container__img" />
              <h3 className="card-container__title">{action.titleRus}</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ActionsA;
