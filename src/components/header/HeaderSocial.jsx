import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub, SiInstagram } from "react-icons/si";
// import { SiInstagram } from "react-icons/si";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/jason-x-wang/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/hawk198723" target="_blank">
        <SiGithub />
      </a>
      <a href="https://www.instagram.com/hawk_wang/" target="_blank">
        <SiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
