import React from "react";
import "./About.css";

const cards = [
  {
    image: "./html.png",
    title: "HTML5",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image: "./css-icon.png",
    title: "CSS3",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image: "./js.svg",
    title: "JS",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: "./react.svg",
    title: "React.js",
    link: "https://react.dev/",
  },
  {
    image: "./next.svg",
    title: "Next.js",
    link: "https://nextjs.org/",
  },
  {
    image: "./react.svg", // Replace with your actual
    title: "React Native",
    link: "https://reactnative.dev/",
  },
];

const About = ({ scrollTo }) => {
  return (
    <div className="about" id="About">
      <div className="aboutcontent">
        <h1> About</h1>
        <p className="intro">
          Hey, I’m Sakis Staikos — a front-end developer with a creative
          background in music.
        </p>
        <p className="bio">
          After more than a decade working as a professional guitarist and music
          educator, I discovered a new passion for front-end development. What
          started as curiosity about how interfaces work quickly grew into a
          deep appreciation for clean design, interactive experiences, and the
          blend of logic and creativity that front-end development offers.
        </p>
        <p className="interests">
          I’ve been focused on mastering HTML5, CSS3, JavaScript, React.js,
          Next.js, and React Native, creating responsive, user-centered projects
          that look good and perform smoothly across platforms.
        </p>
        <p className="closing">
          My goal is to keep growing as a developer — learning, experimenting,
          and building meaningful digital experiences that connect with people
          the same way music does.
        </p>
        <p className="closing">
          Thanks for stopping by — and welcome to my journey into front-end
          development.
        </p>
      </div>
      <div className="skillscontainer">
        <div className="skills">
          <h2>My Skills</h2>
        </div>
        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.title}>
              <a href={card.link}>
                <img src={card.image} alt={card.title} />
                {card.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
