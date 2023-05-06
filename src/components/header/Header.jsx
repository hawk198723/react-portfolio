import React from "react";
import "./header.css";
// import CTA from "./CTA";
// import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <p className="Intro__LineOne">
          Hey there, I'm <span className="JASON">JASON</span>!
        </p>
        <p className="Intro__LineOne">I am a developer who:</p>
        <div className="header__list-container">
          <ol className="header__list">
            <li className="header__list-item">
              ❖ works hard at effective communication
            </li>
            <li className="header__list-item">
              ❖ actively engages in continuing my education
            </li>
            <li className="header__list-item">
              ❖ never turns someone away who needs a little guidance
            </li>
            <li className="header__list-item">
              ❖ gets results by putting the utmost respect into each project
            </li>
          </ol>
        </div>

        <HeaderSocial />

        <a href="#contact" className="scroll__down">
          Talk to me ➡
        </a>
      </div>
    </header>
  );
};

export default Header;
