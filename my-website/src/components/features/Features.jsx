import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import "./features.css";

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  );
}

export default Features;
