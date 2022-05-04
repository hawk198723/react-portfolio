import React from "react";
import "./about.css";
import ME from "../../assets/aboutme.png";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
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
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <GiGraduateCap className="about_icon" />
              <h5>Major</h5>
              <small>Software Engineering</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            I'm currently a Full-Stack Web developer for Ripemetrics. I am passionate about
            problem-solving and team building as well as learning new material
            to further my knowledge in coding. I'm currently looking for
            software opportunities in web development and full-stack
            engineering. My current experience includes Javascript, Typescript,
            Ruby, React, Rails, CSS3, and HTML5. I am an innovative "doer"
            adept at leading cross-functional teams, with honed Agile and SCRUM
            experience.
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
