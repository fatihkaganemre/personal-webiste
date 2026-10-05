import { useReveal } from "./useReveal";
import "./Experience.css";

const experiences = [
  {
    company: "William Hill",
    role: "iOS Developer",
    period: "Krakow, Poland | Aug 2024 – Present",
    description: [
      "Part of a 12-person iOS engineering organization, delivering in 2-week sprints with releases every 2 weeks.",
      "Contributed to unifying multiple applications under a single codebase to improve development efficiency and maintainability.",
      "Used Codex and GitHub Copilot for implementation and code review, including CLI-driven workflows for git history, branches, and pull requests.",
      "Work with SwiftUI and modular dependency management using Swift Package Manager.",
      "Support delivery workflows through Jira and GitLab CI, and maintain code quality through unit testing.",
    ],
  },
  {
    company: "N7 Mobile",
    role: "iOS Developer",
    period: "Warsaw, Poland | Oct 2021 – May 2024",
    description: [
      "Worked in a 7-person delivery team, coordinating with client stakeholders in weekly meetings and shipping releases every 2–3 weeks.",
      "Developed banking applications using MVVM and Coordinator-based architecture.",
      "Built reactive user interfaces with Combine and UIKit while supporting migration toward SwiftUI.",
      "Ensured application reliability through unit testing and streamlined release processes with Azure CI.",
      "Managed dependencies with CocoaPods and Swift Package Manager.",
    ],
  },
  {
    company: "AppUnite",
    role: "iOS Developer",
    period: "Poznan, Poland | May 2017 – Sep 2021",
    description: [
      "Collaborated in 9-person cross-functional squads across concurrent client projects, using Waterfall, Scrum, or Kanban as needed.",
      "Delivered mobile applications across e-commerce, booking, social media, education, and banking.",
      "Used reactive approaches with RxSwift and ReactiveSwift.",
      "Implemented unit, UI, snapshot, and end-to-end testing.",
      "Maintained CI/CD pipelines with GitLab CI and Circle CI, and managed dependencies with CocoaPods and Carthage.",
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
