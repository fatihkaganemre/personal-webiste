import { useReveal } from "./useReveal";
import "./Experience.css";

const experiences = [
  {
    company: "William Hill",
    role: "Senior iOS Developer",
    period: "Krakow, Poland | Aug 2024 – Present",
    description: [
      "Part of a 12-person iOS team shipping features across Vegas, ES, and UK apps.",
      "Make key refactorings and CI improvements and present them in two internal presentations.",
      "Unify multiple applications under a single codebase.",
      "Support delivery workflows through Jira and GitLab CI.",
      "Work in 2-week sprints with daily standups.",
      "Build modular features with SwiftUI and Swift Package Manager.",
      "Use AI coding agents (Codex, GitHub Copilot) for implementation and code review.",
    ],
  },
  {
    company: "N7 Mobile",
    role: "Senior iOS Developer",
    period: "Warsaw, Poland | Oct 2021 – May 2024",
    description: [
      "Senior iOS developer on Viva Wallet, a banking app, involved in key technical decisions.",
      "Developed banking apps using MVVM and Coordinator-based architecture.",
      "Implemented service payments for utility bills and IRIS payment support.",
      "Built reactive user interfaces with Combine and UIKit while migrating toward SwiftUI.",
      "Shipped releases every 2–3 weeks in a 7-person team, using Azure CI.",
      "Raised unit test coverage from 0% to 60% in one year with XCTest while refactoring most of a legacy codebase.",
      "Coordinated with client stakeholders in weekly meetings.",
    ],
  },
  {
    company: "AppUnite",
    role: "iOS Developer",
    period: "Poznan, Poland | May 2017 – Sep 2021",
    description: [
      "Started as a junior developer on an e-commerce app and grew to mid-level across KingsChat, the MGM Hotels app, and a Zumba fitness app.",
      "Owned the KingsPay app as a mid-level developer.",
      "Collaborated in 9-person cross-functional squads across concurrent client projects, using Waterfall, Scrum, or Kanban as needed.",
      "Shipped the MGM Bluetooth digital key, letting guests check in and open hotel doors from the app.",
      "Maintained CI/CD pipelines and tested across unit, UI, snapshot, and end-to-end levels.",
      "Managed dependencies with CocoaPods and Carthage.",
    ],
  },
];

const ExperienceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1z"/>
    <path d="M8 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  </svg>
);

function ExperienceItem({ company, role, period, description }) {
  return (
    <div className="exp-item">
      <div className="exp-header">
        <span className="exp-company">{company}</span>
        <span className="exp-period">{period}</span>
      </div>
      <div className="exp-role">{role}</div>
      <ul className="exp-desc-list">
        {description.map((item) => (
          <li key={item} className="exp-desc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const { ref, visible } = useReveal();

  return (
    <div className={`feature-card ${visible ? "revealed" : ""}`} ref={ref}>
      <div className="feature-card-title">
        <ExperienceIcon />
        Experience
      </div>

      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
}

export default Experience;
