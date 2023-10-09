import React from "react";
import Card from "../components/UI/Card";
import categories from "../data/categories/categories";
import testImg from "../components/UI/icons/cat.jpg";
import rotate from "../components/UI/icons/rotate-btn.png";

function Categories() {
  return (
    <div className="main-container">
      {categories.map((category) => (
        <Card>
          <div className="card-container">
            <div className="card-side card-side-front">
              <img src={testImg} alt="" className="card-container__img" />
              <h3 className="card-container__title">{category.title}</h3>
              <button type="button" className="card-container__btn">
                <img src={rotate} alt="rotate" />
              </button>
            </div>

            <div className="card-side card-side-back">
              <img src={testImg} alt="" className="card-container__img" />
              <h3 className="card-container__title">Кот</h3>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Categories;
