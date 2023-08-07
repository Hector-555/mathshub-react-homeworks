import React from "react";
import "./SelectGenre.css";

function SelectGenre({ onChangeFilter }) {
  const dropDownOnChangeHandler = (event) => {
    onChangeFilter(event.target.select);
  };

  return (
    <div>
      <select onSelect={dropDownOnChangeHandler}>
        <option value="Поп">Поп</option>
        <option value="Рок">Рок</option>
        <option value="Блюз">Блюз</option>
        <option value="Джаз">Джаз</option>
        <option value="Рэп">Рэп</option>
      </select>
    </div>
  );
}

export default SelectGenre;
