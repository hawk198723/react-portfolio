import React from "react";
import "./about.css";
import ME from "../../assets/aboutme.png";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>

            <article className="about__card">
              <GiGraduateCap className="about_icon" />
              <h5>Major</h5>
              <small>Software Engineering</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>4+Personal Projects</small>
            </article>
          </div>
          <p>
            Hi, I'm Jason. As a Full-Stack Developer, I'm passionate about
            problem-solving and teamwork. I'm actively seeking opportunities in
            web development and full-stack engineering to expand my skills, I
            excel at leading cross-functional teams in the fast-paced world of
            software development.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
