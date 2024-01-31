import React from "react";
import "./HomeMain.css";
import { Link } from "react-router-dom";
import disppic from "../../asset/disppic.jpg";

function HomeMain() {
  return (
    <div className="home-main-contain">
      <div className="h-m-txt">
        <h1>David Ladipo</h1>
        <h1>Front-end Developer</h1>
        <p>
          Welcome to my website! I am a Web Developer with a passion for
          creating beautiful and responsive websites.
          <br />
          <br />
          As a Front-end Developer, I specialize in the client-facing side of
          web development, ensuring that websites are both visually appealing
          and user-friendly. I use a combination of HTML, CSS, JavaScript, and
          Reactjs with its popular tooling to create dynamic, interactive
          websites that engage users and deliver results.
        </p>
        <Link to="mailto:ladipodavid13@gmail.com" className="h-m-btn">
          Lets Talk 😁
        </Link>
      </div>
      <div className="h-m-img">
        <div className="dispic-container">
          <img src={disppic} alt="" className="h-img" />
        </div>
        <div className="floaters f1"></div>
        <div className="floaters f2"></div>
      </div>
    </div>
  );
}

export default HomeMain;
