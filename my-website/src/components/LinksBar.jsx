import React from "react";

function LinksBar() {
  return (
    <section className="links-bar" style={{ backgroundColor: "#405D72", color: "white" }}>
      <div className="container">
        <ul className="nav justify-content-lg-center justify-content-sm-left dm-serif-font">
          <li className="nav-item">
            <a className="nav-link active mb-2" href="./public/contact.html" style={{ color: "#57b5f8" }}>Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-2" href="https://www.linkedin.com/in/fatih-ka%C4%9Fan-emre-b551667b/" style={{ color: "#57b5f8" }}>Linkedin</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-2" href="https://github.com/fatihkaganemre" style={{ color: "#57b5f8" }}>Github</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mb-2" href="./public/hobbies.html" style={{ color: "#57b5f8" }}>Hobbies</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default LinksBar;
