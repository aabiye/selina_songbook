import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

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
      <div className="App">
        <h1 className="memberstitle">SELINA'S SONGBOOK</h1>
        <br />
        <div className="cards-container">
          {songs.map((song, index) => (
            <div className="card">
              <div key={song.id}>
                <img className="song-img" src={song.image} />
                <p className="card__title">{song.name}</p>
                <p className="card_text">{song.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Songs;
