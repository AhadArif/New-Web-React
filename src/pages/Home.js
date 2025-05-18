import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Cam.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Urbex Photography</h1>
        <p>STILLNESS CAUGHT IN NOISE</p>
        <Link to="/menu">
          <button>CLICK YOURS NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
