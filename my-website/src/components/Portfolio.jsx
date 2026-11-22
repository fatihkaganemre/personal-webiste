import React from "react";
import "./Portfolio.css";

const projects = [
  {
    title: "BaglamaSoundML",
    category: "ai",
    description:
      "An experimental ML and audio-synthesis project for generating bağlama sounds, detecting open-string tuning from microphone recordings, and comparing synthesized audio with recordings. Includes a Python playground and a reusable Swift 6 package.",
    tech: ["Python", "NumPy", "PyTorch", "Swift 6", "Machine Learning", "Audio DSP", "Vite"],
    images: ["./images/BaglamaSoundML.png"],
    imageAlt: "BaglamaSoundML playground tools overview",
    imageClass: "portfolio-img-project",
    link: "https://github.com/fatihkaganemre/BaglamaSoundML",
    linkLabel: "View on GitHub",
    wide: true,
    aiAssisted: true,
  },
  {
    title: "Baglamator",
    category: "mobile",
    description:
      "An iOS tuner for bağlama players with real-time note detection and visual feedback in cents. I use Codex alongside five custom GitHub Copilot agents for planning, design, architecture, implementation, and QA, with documented handoffs and build and test results.",
    tech: ["Swift 6", "SwiftUI", "MVVM", "AVFoundation", "Accelerate", "Swift Concurrency", "OpenAI Codex", "GitHub Copilot"],
    images: ["./images/Baglamator.jpg"],
    imageAlt: "Baglamator app icon",
    link: "https://apps.apple.com/us/app/baglamator/id6826222131",
    linkLabel: "View on App Store",
    wide: true,
    aiAssisted: true,
  },
  {
    title: "Oscar Wong — Pianist",
    description:
      "An editorial-style website for pianist Oscar Wong, featuring his biography, concerts, and a contact form. Responsive design and development completed with AI assistance.",
    tech: ["React", "TypeScript", "Vite", "Node.js & Express", "EmailJS", "CSS"],
    images: ["./images/OscarWong.jpeg"],
    imageAlt: "Portrait of pianist Oscar Wong",
    imageClass: "portfolio-img-portrait",
    link: "https://www.oscarwongpianist.com/",
    wide: true,
    aiAssisted: true,
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

const projectSections = [
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Native iOS experiences, built around everyday needs.",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Research projects spanning audio synthesis, machine learning, and developer tools.",
  },
  {
    id: "web",
    title: "Web & Full-Stack Projects",
    description: "From personal websites to platforms that connect communities.",
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
          <div className="portfolio-icon-glass" key={idx}>
          <img
            src={img}
            alt={project.imageAlt || `${title} screenshot ${idx + 1}`}
            className={`portfolio-img${project.imageClass ? ` ${project.imageClass}` : ""}`}
          />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="card-body">
        {aiAssisted && (
          <span className="ai-badge">Built with AI assistance</span>
        )}

        <h3 className="card-title dm-serif-font">{title}</h3>
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
            {project.linkLabel || "Visit Website"} <ArrowIcon />
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
            A collection of products and experiments I’ve created across iOS,
            web, and machine learning, shaped by curiosity, thoughtful design,
            and a love for making technology useful.
          </p>
        </div>

        {projectSections.map((section) => (
          <section className="portfolio-category" key={section.id} aria-labelledby={`portfolio-${section.id}`}>
            <div className="portfolio-category-heading">
              <h2 id={`portfolio-${section.id}`} className="dm-serif-font">{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="portfolio-grid">
              {projects
                .filter((project) => (project.category || "web") === section.id)
                .map((project) => <PortfolioCard key={project.title} project={project} />)}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
