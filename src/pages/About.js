import React from "react";
import AboutImage from "../assets/About.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Initially, the name was <strong>Lit_Photography</strong>, started by a young boy with an eye for art in every odd spot. His curiosity and passion for capturing moments grew stronger with every click, and over the years, he mastered various forms and styles of photography — from street scenes to intimate portraits.
        </p>
        <p>
          In 2024, reflecting a new chapter and a refined focus, the name evolved to <strong>UrbexAltair</strong>, symbolizing the spirit of urban exploration and the beauty found in forgotten places. UrbexAltair embodies the philosophy of seeking stillness amidst chaos, capturing hidden stories in the noise of everyday life.
        </p>
        <p>
          Our motto, <em>"Stillness caught in noise,"</em> is a reminder to find calm and meaning in the hustle, preserving fleeting moments through the lens. We believe every photograph tells a story, and our goal is to share those stories with authenticity and creativity.
        </p>
        <p>
          Come with us on this path of exploration- where art meets adventure, and every click uncovers something extraordinary.
        </p>
      </div>
    </div>
  );
}

export default About;
