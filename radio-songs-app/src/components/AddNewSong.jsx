/* eslint-disable no-unused-vars */
import React from "react";
import SongForm from './SongForm'
import "./AddNewSong.css";

function AddNewSong({onAddSong}) {
  const saveSongDataHandler = (enteredSongData) => {
    const songData = {
      ...enteredSongData,
      id: Math.random().toString(),
    }
    onAddSong(songData)
  }

  return (
    <div>
      <SongForm onSaveSong={saveSongDataHandler} />
    </div>
  )
}

export default AddNewSong;
