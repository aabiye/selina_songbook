import React from "react";
import { Link, Router } from "react-router-dom";
import selina from "../assets/selinahome.jpg";
import "../App.css";

function Home() {
  return (
    <div className="bkimage" style={{ backgroundImage: `url(${selina})` }}>
      <div className="headerContainer">
        <h2 className="hometitle">
          SELENA QUINTANILLA-PEREZ
          <br />
          Queen of Tejano Music
        </h2>
        <Link to="/member">
          <button> SONGS </button>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
