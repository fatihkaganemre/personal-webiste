import { useReveal } from "./useReveal";
import "./Experience.css";

const experiences = [
  {
    company: "William Hill",
    role: "iOS Developer",
    period: "Aug 2024 – Present · Kraków",
    description: "Working as an iOS developer on production-scale applications.",
  },
  {
    company: "N7 Mobile",
    role: "iOS Developer",
    period: "Oct 2021 – May 2024 · Warsaw",
    description:
      "Banking application development using Xcode, Azure CI, SonarCloud, SPM, Jira, and Figma. Frameworks: Combine, Firebase, Lottie, AppAuth, Intercom. MVVM architecture with comprehensive unit test coverage.",
  },
  {
    company: "AppUnite",
    role: "iOS Developer",
    period: "May 2017 – Sept 2021 · Poznań",
    description:
      "Diverse portfolio spanning booking, social media, e-learning, and e-commerce. Authored extensive test suites across multiple frameworks.",
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
      <div className="exp-desc">{description}</div>
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
