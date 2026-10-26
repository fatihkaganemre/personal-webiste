import { useReveal } from "./useReveal";
import "./Experience.css";

const experiences = [
  {
    company: "William Hill",
    role: "Senior iOS Developer",
    period: "Krakow, Poland | Aug 2024 – Present",
    description: [
      "Own My Account and Intents features from research and planning through implementation, analytics, QA handoff, and resolution of QA findings, collaborating with product managers, architects, and engineers.",
      "Improve CI workflows and refactor critical code; present this work in two internal talks while helping unify multiple apps in a shared codebase.",
      "Build modular iOS features with SwiftUI and Swift Package Manager across the Vegas, ES, and UK apps.",
      "Serve as release captain for multiple releases, coordinating scope and readiness with developers and product managers and managing the CI release process.",
      "Deliver features as part of a 12-person iOS team.",
      "Use Codex, GitHub Copilot, and role-based multi-agent workflows for implementation, testing, and reviews; manage branches with GitLab CLI, verify AI output, and independently review teammates' code.",
    ],
  },
  {
    company: "N7 Mobile",
    role: "Senior iOS Developer",
    period: "Warsaw, Poland | Oct 2021 – May 2024",
    description: [
      "Independently delivered key Viva.com app features, including IRIS payments and service payments.",
      "Proposed and helped drive a focused modernization of networking and authentication, aligning engineers on architecture, patterns, and frameworks; the team refactored most of the legacy app within a year.",
      "Increased unit-test coverage from 0% to 60% in one year with XCTest and introduced tests for each feature delivered.",
      "Introduced modern iOS technologies including Combine and SwiftUI while maintaining a 98–99% crash-free rate.",
      "Shipped releases every 2–3 weeks as part of a 7-person team using Azure CI, coordinating with client stakeholders, designers, and backend developers.",
    ],
  },
  {
    company: "AppUnite",
    role: "iOS Developer",
    period: "Poznan, Poland | May 2017 – Sep 2021",
    description: [
      "Progressed from junior developer fixing e-commerce bugs and migrating Objective-C to Swift to owning complex production features across Zumba, MGM Rewards, and KingsChat.",
      "Implemented the MGM Rewards Bluetooth digital key, allowing guests to unlock hotel doors with their phones; applied knowledge from an electronics and telecommunications engineering background.",
      "Took full responsibility for KingsPay within a shared codebase serving KingsChat, KingsPay, and KingsConference; implemented its payment SDK and additional features, gaining experience in modularization and scalability.",
      "Delivered features and unit, UI, and end-to-end tests across cross-functional client teams.",
      "Managed iOS dependencies and CI/CD workflows using CocoaPods and Carthage.",
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
