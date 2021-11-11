import React from "react";
import selina from "../assets/selinaabout.jpg"
import "../App.css"

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${selina})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT SELINA</h1>
        <p>
          Selena was born in Texas in 1971 to a Mexican-American father and
          mother of Mexican-American and Cherokee ancestry. Selena's Tejano (or
          Tex-Mex) style blended American and Mexican influences that spoke to
          her multi-cultural upbringing in southern Texas. Considered one of the
          most important figures in Latin music with more than 60 million albums
          sold worldwide, in addition to being the first Latin woman to achieve
          a gold record for her album Ven Conmigo, the singer was a worldwide
          media sensation until her death in 1995 at just 23 years old.
          L'OFFICIEL remembers Selena and the impact she had on the music
          industry with these five must-know facts about the late icon.
        </p>
      </div>
    </div>
  );
}

export default About;
