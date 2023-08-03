import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Counter from "./components/counter/Counter";

function App() {
  const userData = {
    title: "Личный профиль",
    name: "Сергей Михальченко",
    bio: "Всем привет! Я студент курса по Frontend-разработке. Продолжаю совершенствоваться в изучении HTML, CSS и JS. Пока не все получается, но я не сдаюсь и продолжаю улучшать свои навыки. Сейчас мы приступили к изучению React. И это моя первая страница, созданная с помощью React",
    cite: "Все мы гении. Но если вы будете судить рыбу по её способности взбираться на дерево, она проживёт всю жизнь, считая себя дурой",
    hobby: "А еще я люблю читать, заниматься спортом и путешествовать",
    photo:
      "https://www.comschool.com.br/wp-content/uploads/2023/02/25-Curso-de-Google-Tag-Manager.jpg",
  };

  return (
    <div>
      <Profile userData={userData} />
      <Counter />
    </div>
  );
}

export default App;
