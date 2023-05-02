import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiCodio,
  SiJava,
  SiMysql,
  SiRubyonrails,
  SiPostgresql,
  SiMongodb,
  SiSpring,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";

import { ImGit } from "react-icons/im";
import { DiNodejs } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiRedux className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <ImGit className="experience__details-icon" />
              <div>
                <h4>Git</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiCodio className="experience__details-icon" />
              <div>
                <h4>C </h4>
              </div>
            </article>

            <article className="experience__details">
              <SiRubyonrails className="experience__details-icon" />
              <div>
                <h4>Rails</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
              </div>
            </article>

            <article className="experience__details">
              <SiSpring className="experience__details-icon" />
              <div>
                <h4>Spring</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
