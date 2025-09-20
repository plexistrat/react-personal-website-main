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
          Hey, I’m Sakis Staikos — a musician turned aspiring front-end
          developer.
        </p>
        <p className="bio">
          For over 15 years, I’ve worked professionally as a guitarist and music
          theory tutor, performing on stage and helping students of all levels
          find their voice through music. One of the things I’m most proud of is
          seeing students who started with zero experience go on to become
          professional musicians themselves. That kind of growth and
          transformation really motivates me.
        </p>
        <p className="interests">
          Recently, I’ve found a new creative spark in front-end development. I
          love how coding blends logic with artistry — much like music. The
          process of building something from scratch, solving problems, and
          making things look and feel great just clicks with me. Right now, I’m
          focused on a HTML5, CSS3, React.js, React Native and Next.js, and I’m
          excited to keep learning and building.
        </p>
        <p className="closing">
          This site is part of that journey — thanks for stopping by.
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
