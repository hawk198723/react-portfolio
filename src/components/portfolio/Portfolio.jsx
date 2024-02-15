import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Smart bidding on social media!",
    github: "https://github.com/imposters3/bid_up_kjr",
    demo: "https://radiant-island-32845.herokuapp.com/",
  },
  // {
  //   id: 2,
  //   image: IMG2,
  //   title: "Crypto Currency Charts & Financial Visulaization",
  //   github: "https://github.com/hawk198723/coinbase",
  //   demo: "https://www.highcharts.com/demo/sand-signika",
  // },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Eclipse - Figma dashboard UI kit for data design web apps",
  //   github: "https://github.com",
  //   demo: "https://www.figma.com/file/FBQs8w1dIGTP32AaFPC5nR/Eclipse-%E2%9C%A6-Desktop-%26-Mobile-UI-kit?node-id=868%3A18114",
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Eclipse - Figma dashboard UI kit for data design web apps",
  //   github: "https://github.com",
  //   demo: "https://www.figma.com/file/FBQs8w1dIGTP32AaFPC5nR/Eclipse-%E2%9C%A6-Desktop-%26-Mobile-UI-kit?node-id=868%3A18114",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Orion UI kit - Charts templates & infographics in Figma",
  //   github: "https://github.com",
  //   demo: "https://setproduct.com/orion",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Eclipse - Figma dashboard UI kit for data design web apps",
  //   github: "https://github.com",
  //   demo: "https://www.figma.com/file/FBQs8w1dIGTP32AaFPC5nR/Eclipse-%E2%9C%A6-Desktop-%26-Mobile-UI-kit?node-id=868%3A18114",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Personal Projects</h2>

      <div className="container portfolio__container">
        {/* {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })} */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <a
              href="https://movieflix-zeta.vercel.app/"
              target="_blank"
            >
              <img src={IMG2} alt="" className="photo" />
            </a>
          </div>
          <h3 className="h3">MoonFlix</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hawk198723/movie-app-fullstack"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://movieflix-zeta.vercel.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <a
              href="https://react-portfolio-seven-topaz.vercel.app/"
              target="_blank"
            >
              <img src={IMG3} alt="" className="photo" />
            </a>
          </div>
          <h3 className="h3">React Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hawk198723/react-portfolio"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://react-portfolio-seven-topaz.vercel.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
            <article className="portfolio__item">
          <div className="portfolio__item-image">
            <a
              href="https://jasonxw.com/portfolio/index.html"
              target="_blank"
            >
              <img src={IMG4} alt="" className="photo" />
            </a>
          </div>
          <h3 className="h3">Portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/hawk198723/myPortfolio"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jasonxw.com/portfolio/index.html"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
