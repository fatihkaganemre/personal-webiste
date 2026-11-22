import { useReveal } from "./useReveal";
import "./Skills.css";

const skillGroups = [
  { label: "Core",            items: ["Swift", "Xcode", "UIKit", "SwiftUI"] },
  { label: "Reactive",        items: ["Async/Await", "Combine", "RxSwift", "ReactiveSwift"] },
  { label: "Architecture",    items: ["MVVM", "VIPER", "TCA", "MVC", "MVP"] },
  { label: "Testing",         items: ["Unit", "Integration", "Snapshot", "UI Testing"] },
  { label: "CI / CD",         items: ["GitLab CI", "GitHub Actions", "Azure", "Fastlane", "Circle CI"] },
  {
    label: "AI-assisted development",
    items: ["OpenAI Codex", "GitHub Copilot Custom Agents", "Repository Instructions", "Agent Handoffs", "AI-assisted Code Review", "Test Planning"],
  },
  { label: "Version Control", items: ["Git", "GitHub", "GitLab", "Bitbucket"] },
  { label: "FullStack",       items: ["React", "Node.js", "PostgreSQL", "HTML/CSS", "ExpressJS", "TypeScript", "JavaScript"] },
];

function Skills() {
  const { ref, visible } = useReveal();

  return (
    <div className={`feature-card ${visible ? "revealed" : ""}`} ref={ref}>
      <h2 className="feature-card-title">Skills</h2>

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
