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

function Education() {
  const { ref, visible } = useReveal();

  return (
    <div className={`feature-card ${visible ? "revealed" : ""}`} ref={ref}>
      <h2 className="feature-card-title">Education</h2>

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
