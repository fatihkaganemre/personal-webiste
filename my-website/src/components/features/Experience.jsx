import { useReveal } from "./useReveal";
import "./Experience.css";

const experiences = [
  {
    company: "William Hill",
    role: "iOS Developer",
    period: "Krakow | Aug 2024 – Present",
    description: [
      "Working as an iOS developer on production-scale applications.",
      "Unified multiple applications under a single codebase to improve development efficiency.",
      "Worked with SwiftUI and managed modular dependencies with Swift Package Manager (SPM).",
      "Managed project workflows using Jira and automated delivery with GitLab CI.",
      "Maintained high code quality through the implementation of unit tests.",
    ],
  },
  {
    company: "N7 Mobile",
    role: "iOS Developer",
    period: "Warsaw | Oct 2021 – May 2024",
    description: [
      "Developed banking applications utilizing the MVVM + Coordinator pattern.",
      "Built reactive interfaces using Combine + UIKit while managing the transition to SwiftUI.",
      "Guaranteed application reliability through unit tests.",
      "Streamlined deployments using Azure CI and managed dependencies with CocoaPods and SPM.",
    ],
  },
  {
    company: "AppUnite",
    role: "iOS Developer",
    period: "Poznan | May 2017 – Sep 2021",
    description: [
      "Developed diverse applications across e-commerce, booking, social media, education, and banking sectors.",
      "Utilized reactive frameworks including RxSwift and ReactiveSwift.",
      "Implemented a comprehensive testing suite covering unit, UI, snapshot, and end-to-end testing.",
      "Managed CI/CD pipelines via GitLab CI and Circle CI and handled dependencies with CocoaPods and Carthage.",
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
