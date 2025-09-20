import { useState, useEffect, useRef } from "react";
import "./NewProjects.css";

const projectsData = [
  {
    id: 1,
    title: "Personal Blog",
    description:
      "A personal blog built with Next.js showcasing my writing and technical insights.",
    image: "./screemshoot.png",
    link: "https://next-personal-blog-nine.vercel.app/",
    technologies: ["Next.js", "JavaScript", "HTML", "CSS"],
  },
  // Add more projects here
  {
    id: 2,
    title: "Music Learning Platform",
    description:
      "An interactive platform for guitar students to access lessons and track progress.",
    image: "./underconstruction.png",
    link: "#",
    technologies: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive personal website showcasing my work as both a music tutor and developer.",
    image: "./underconstruction.png",
    link: "#",
    technologies: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A fully functional weather app built with React.js and OpenWeatherMap API.",
    image: "./weather-app-image.png",
    link: "https://github.com/plexistrat/weather-app-latest.git",
    technologies: ["React", "JavaScript", "HTML/CSS"],
  },

  {
    id: 6,
    title: "ΚΕ.ΜΕ.ΛΑΚ",
    description:
      "A modern and responsive website for a Greek folk museum, showcasing exhibits, events, and cultural heritage.",
    image: "./kemelak.png",
    link: "https://www.kemelak.gr/",
    technologies: ["Next.js", "JavaScript", "HTML/CSS"],
  },
];

export default function NewProjects({ scrollTo }) {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        <p className="projects-description">
          A collection of personal and collaborative projects where I've applied
          front-end technologies to bring ideas to life.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  // Intersection Observer για fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card ${isVisible ? "fade-in" : "hidden"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className={`project-image ${isHovered ? "image-zoomed" : ""}`}
        />

        {isHovered && (
          <div className="project-overlay">
            <div className="project-overlay-content">
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-link"
              >
                View Project →
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
}
