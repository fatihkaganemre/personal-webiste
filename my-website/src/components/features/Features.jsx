import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

function Features() {
  return (
    <section className="features">
      <div className="container py-5">
        <div className="row g-4 row-cols-1 row-cols-lg-3">
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  );
}

export default Features;
