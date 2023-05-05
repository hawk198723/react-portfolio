import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub, SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="foot__logo">
        Jason Wang
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/hawk_wang/">
          <SiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jason-x-wang/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/hawk198723">
          <SiGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>2023 &copy;Jason Wang & All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
