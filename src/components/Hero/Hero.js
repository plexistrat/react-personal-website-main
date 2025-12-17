import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

// function downloadCv() {
//   const link = document.createElement("a");
//   link.href = "/NewCV.pdf";       
//   link.download = "NewCV.pdf";
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }


  return (
    <div className="hero-section">
      {/* Background elements */}
      <div className="hero-background">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
      </div>

      {/* Photo container */}
      <div className={`hero-photo-container ${isVisible ? "visible" : ""}`}>
        <img src="/mainPhoto.jpg" alt="Sakis Staikos" className="hero-photo" />
      </div>

      {/* Text content */}
      <div className={`hero-text-container ${isVisible ? "visible" : ""}`}>
        <div className="intro-text">
          <span className="intro-prefix">Hello, I'm</span>
          <h1 className="intro-name">Sakis Staikos</h1>
        </div>

        <div className="profession-container">
          <h2 className="profession-text">
            Frontend Developer
            <span className="profession-divider"></span>
            Guitar/Music Tutor
          </h2>
        </div>
              <a href="/CV.pdf" download className="download-button">
  <span>Download CV</span>
  <span className="button-arrow">→</span>
</a>


     
      </div>
    </div>
  );
}
