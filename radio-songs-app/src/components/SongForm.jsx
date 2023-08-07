/* eslint-disable no-global-assign */
import React, { useState } from "react";
import "./SongForm.css";

function SongForm({ onSaveSong }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredGroup, setEnteredGroup] = useState("");
  const [enteredGenre, setEnteredGenre] = useState("");

  const songChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const groupChangeHandler = (event) => {
    setEnteredGroup(event.target.value);
  };

  const genreChangeHandler = (event) => {
    setEnteredGenre(event.target.select);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const songData = {
      name: enteredName,
      group: enteredGroup,
      genre: enteredGenre,
    };

    onSaveSong(songData);
    setEnteredName("");
    setEnteredGroup("");
    setEnteredGenre("");
  };

  return (
    <div className="add-new-song">
      <form onSubmit={submitHandler}>
        <div className="add-new-song__container">
          <div className="add-new-song__item">
            <label>Название песни</label>
            <input
              type="text"
              name="name"
              placeholder="Название песни"
              value={enteredName}
              onChange={songChangeHandler}
            />
          </div>
          <div className="add-new-song__item">
            <label>Исполнитель</label>
            <input
              type="text"
              name="group"
              placeholder="Исполнитель"
              value={enteredGroup}
              onChange={groupChangeHandler}
            />
          </div>
          <div className="add-new-song__item">
            <select id="add-new-song__select" name="genre" onChange={genreChangeHandler}>
              <option value="Поп" selected>Поп</option>
              <option value="Рок">Рок</option>
              <option value="Блюз">Блюз</option>
              <option value="Джаз">Джаз</option>
              <option value="Рэп">Рэп</option>
            </select>
          </div>
          <div className="add-new-song__button">
            <button type="submit">Отправить</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SongForm;
