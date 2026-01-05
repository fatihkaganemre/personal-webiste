import React from "react";
import './Portfolio.css';

const projects = [
  {
    title: "FPlanner",
    description: "This is a training planning application designed to facilitate the creation, editing, and execution of training sessions with multiple exercises. I developed this app to explore:",
    tech: ["SwiftUI", "SwiftData", "Local Notifications"],
    images: ["./images/FPlanner1.png", "./images/FPlanner2.png"],
    link: null,
    colClass: "col-lg-5 col-sm-12"
  },
  {
    title: "FTuner",
    description: "This is an instrument tuning application that displays the pitch of detected sound signals, assisting you in tuning your instrument. I developed this app as part of my experimentation and skill development.",
    tech: ["SwiftUI", "Charts", "AVFoundation"],
    images: ["./images/FTuner.png"],
    link: null,
    colClass: "col-lg-5 col-sm-12"
  },
  {
    title: "Goats Karate Team Poznan - Official Website",
    description: "A professional website for Goats Karate Team Poznań, showcasing classes, schedules, and online registration. Developed with a clean, responsive design to provide an easy navigation experience.",
    tech: ["React", "Node.js & Express", "Google Cloud Storage", "Firebase", "Bootstrap / CSS"],
    images: [],
    link: "https://www.goatskarate.pl/",
    colClass: "col-lg-10 col-sm-12"
  }
];

function PortfolioCard({ project }) {
  return (
    <div className={`${project.colClass} mb-5 portfolio-card`}>
      <h2 className="dm-serif-font">{project.title}</h2>
      <p className="noto-serif-font">{project.description}</p>
      <ul className="noto-serif-font">
        {project.tech.map((techItem, idx) => (
          <li key={idx}>{techItem}</li>
        ))}
      </ul>
      {project.images.map((img, idx) => (
        <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} className="portfolio-img" />
      ))}
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-btn"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container my-5">
        <div className="p-5 text-center bg-body-secondary rounded-3">
          <h1 className="text-body-emphasis dm-serif-font">Portfolio</h1>
          <p className="lead noto-serif-font">
            A selection of my work highlighting responsive design, modern frameworks, and full-stack development expertise.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-lg-center">
          {projects.map((project, idx) => (
            <PortfolioCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
