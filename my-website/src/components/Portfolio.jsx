import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "FPlanner",
    description:
      "A training planning application designed for creating, editing, and executing sessions with multiple exercises. Built to explore SwiftUI data persistence and local notification scheduling.",
    tech: ["SwiftUI", "SwiftData", "Local Notifications"],
    images: ["./images/FPlanner1.png", "./images/FPlanner2.png"],
    link: null,
    wide: false,
    aiAssisted: false,
  },
  {
    title: "FTuner",
    description:
      "An instrument tuning app that visualises detected pitch in real time, helping musicians tune accurately. Developed as a deep-dive into audio processing and SwiftUI charting.",
    tech: ["SwiftUI", "Charts", "AVFoundation"],
    images: ["./images/FTuner.png"],
    link: null,
    wide: false,
    aiAssisted: false,
  },
  {
    title: "Goats Karate Team Poznań",
    description:
      "Official website for Goats Karate Team Poznań — showcasing classes, schedules, and online registration. Clean, responsive design built for easy navigation and content management.",
    tech: ["React", "Node.js & Express", "Google Cloud Storage", "Firebase", "Bootstrap / CSS"],
    images: ["./images/GoatsLogo.png"],
    link: "https://www.goatskarate.pl/",
    wide: true,
    aiAssisted: false,
  },
  {
    title: "Trader Ece",
    description:
      "Professional website for Trader Ece, designed for a clean and responsive experience across all devices. Component architecture and design system developed with AI assistance.",
    tech: ["React", "TypeScript", "Bootstrap / CSS"],
    images: ["./images/TraderEceLogo.png"],
    link: "https://www.trader-ece.com/",
    wide: true,
    aiAssisted: true,
  },
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function PortfolioCard({ project }) {
  const { title, description, tech, images, link, wide, aiAssisted } = project;

  return (
    <div className={`portfolio-card${wide ? " card-wide" : ""}`}>
      {/* Images */}
      <div className="portfolio-images">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} screenshot ${idx + 1}`}
            className="portfolio-img"
          />
        ))}
      </div>

      {/* Content */}
      <div className="card-body">
        {aiAssisted && (
          <span className="ai-badge">Built with AI assistance</span>
        )}

        <h2 className="card-title dm-serif-font">{title}</h2>
        <p className="card-desc noto-serif-font">{description}</p>

        <ul className="tech-list">
          {tech.map((item, idx) => (
            <li key={idx} className="tech-tag">{item}</li>
          ))}
        </ul>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            Visit Website <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-hero">
          <h1 className="dm-serif-font">Portfolio</h1>
          <p className="noto-serif-font">
            A selection of my work — iOS applications, full-stack web projects,
            and responsive design implementations.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, idx) => (
            <PortfolioCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;