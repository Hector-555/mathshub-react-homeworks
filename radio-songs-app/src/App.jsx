import React, { useState } from "react";
import "./App.css";
import SongsList from "./components/SongsList";
import AddNewSong from "./components/AddNewSong";

const STOCK_SONGS = [
  {
    id: "1",
    name: "Bohemian Rhapsody",
    group: "Queen",
    genre: "Рок",
  },
  {
    id: "2",
    name: "Shape of You",
    group: "Ed Sheeran",
    genre: "Поп",
  },
  {
    id: "3",
    name: "Uptown Funk",
    group: "Mark Ronson ft. Bruno Mars",
    genre: "Поп",
  },
  {
    id: "4",
    name: "Rolling in the Deep",
    group: "Adele",
    genre: "Блюз",
  },
  {
    id: "5",
    name: "Blinding Lights",
    group: "The Weekend",
    genre: "Поп",
  },
];

function App() {
  const [songs, setSongs] = useState(STOCK_SONGS);

  const addSongHandler = (song) => {
    setSongs((prevSongs) => [song, ...prevSongs]);
  };

  return (
    <div className="App">
      <h1>Заявки на Радио</h1>
      <p className="App-descroption">
        Отправляйте заявку и мы сыграем вашу любимую песню!
      </p>
      <div className="App-main-content">
        <AddNewSong onAddSong={addSongHandler} />
        <div className="App-song-container">
          <SongsList songs={songs} />
        </div>
      </div>
    </div>
  );
}

export default App;
