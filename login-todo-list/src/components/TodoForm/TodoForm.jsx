import React, { useState } from "react";
import './TodoForm.css'

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);

    setValue('')
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Новая задача"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="todo-btn">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;
