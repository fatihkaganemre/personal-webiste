import { useReveal } from "./useReveal";
import "./Education.css";

const schools = [
  {
    school: "Poznań University of Technology",
    degree: "MSc · Electronics & Telecommunications",
    years: "2015 – 2017 · Poland",
  },
  {
    school: "Białystok University of Technology",
    degree: "BSc (Erasmus) · Electrical Engineering",
    years: "2012 – 2013 · Poland",
  },
  {
    school: "Fırat University",
    degree: "BSc · Electrical & Electronics Engineering",
    years: "2009 – 2012 · Turkey",
  },
];

const EducationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
  </svg>
);

function Education() {
  const { ref, visible } = useReveal();

  return (
    <div className={`feature-card ${visible ? "revealed" : ""}`} ref={ref}>
      <div className="feature-card-title">
        <EducationIcon />
        Education
      </div>

      {schools.map(({ school, degree, years }, i) => (
        <div className="edu-item" key={i}>
          <div className="edu-school">{school}</div>
          <div className="edu-degree">{degree}</div>
          <span className="edu-years">{years}</span>
        </div>
      ))}

      <div className="edu-note">
        Graduated from a Polish university — full, unrestricted access to the Polish labour market.
      </div>
    </div>
  );
}

export default Education;
