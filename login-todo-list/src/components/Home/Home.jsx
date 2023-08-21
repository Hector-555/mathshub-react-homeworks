import React from 'react';
import './Home.css';
import TodoWrapper from "../TodoWrapper/TodoWrapper";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Список задач</h1>
      </div>
      <TodoWrapper />
    </>
  );
}

export default Home;