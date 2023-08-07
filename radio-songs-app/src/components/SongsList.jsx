import React from "react";
import SongItem from "./SongItem";

function SongsList({ songs }) {
  return (
    <div className="songs-list__container">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          name={song.name}
          group={song.group}
          genre={song.genre}
        />
      ))}
    </div>
  );
}

export default SongsList;
