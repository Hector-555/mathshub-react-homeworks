import React from "react";
import './SongItem.css'

function SongItem({name, group, genre}) {
  return (
    <div className="song-item__container">
      <div>{name}</div>
      <div>{group}</div>
      <div>{genre}</div>
    </div>
  );
}

export default SongItem;
