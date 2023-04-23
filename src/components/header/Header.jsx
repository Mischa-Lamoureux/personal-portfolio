import React from "react";
import "./header.css";
import CTA from "./CTA";
import MISCHA from "../../assets/mischa-lamoureux.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  const shuffleArray = () => {
    const originalArray = [
      "Developer",
      "Hiker",
      "Biker",
      "Climber",
      "Bookworm",
      "Tech Enthusiast",
    ];
    const shuffledArray = [...originalArray];

    // remove 'Developer' from the array
    const index = shuffledArray.indexOf("Developer");
    if (index !== -1) {
      shuffledArray.splice(index, 1);
    }

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    // add 'Developer' back to the beginning of the array
    shuffledArray.unshift("Developer");

    return shuffledArray;
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mischa Lamoureux</h1>
        <h5 className="header__typewriter">
          I am a&nbsp;
          <Typewriter
            options={{
              strings: shuffleArray(),
              autoStart: true,
              loop: true,
            }}
          />
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={MISCHA} alt="me" />
        </div>

        <a href="#about" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
