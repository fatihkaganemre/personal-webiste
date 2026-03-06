import { useReveal } from "./useReveal";
import "./Skills.css";

const skillGroups = [
  { label: "Core",            items: ["Swift", "Xcode", "UIKit", "SwiftUI"] },
  { label: "Reactive",        items: ["Async/Await", "Combine", "RxSwift", "ReactiveSwift"] },
  { label: "Architecture",    items: ["MVVM", "VIPER", "TCA", "MVC", "MVP"] },
  { label: "Testing",         items: ["Unit", "Integration", "Snapshot", "UI Testing"] },
  { label: "CI / CD",         items: ["GitLab CI", "GitHub Actions", "Azure", "Fastlane", "Circle CI"] },
  { label: "Version Control", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  { label: "FullStack",       items: ["React", "Node.js", "PostgreSQL", "HTML/CSS", "ExpressJS", "TypeScript", "JavaScript"] },
];

const SkillsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5v7A2.5 2.5 0 0 1 11.5 14v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0"/>
  </svg>
);

function Skills() {
  const { ref, visible } = useReveal();

  return (
    <div className={`feature-card ${visible ? "revealed" : ""}`} ref={ref}>
      <div className="feature-card-title">
        <SkillsIcon />
        Skills
      </div>

      {skillGroups.map(({ label, items }) => (
        <div className="skill-group" key={label}>
          <div className="skill-group-label">{label}</div>
          <ul className="tag-list">
            {items.map(item => (
              <li key={item} className="tag">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Skills;
