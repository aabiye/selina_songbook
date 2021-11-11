import React, { useState, useEffect } from "react";
import axios from "axios";

function Songs() {
  const [songs, getSongs] = useState([]);

  const getAllSongs = () =>
    axios
      .get("./songs/")
      .then((response) => {
        const allSongs = response.data.songs;
        console.log(response);
        getSongs(allSongs);
      })
      .catch((error) => console.error("Error"));

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    <>
      <div className="cards-container"></div>
      {songs.map((song, index) => (
        <div className="card">
          <div key={song.id}>
            <p className="card__title">{song.name}</p>
            <p className="card_text">{song.year}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Songs;
