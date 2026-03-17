import { NavLink } from "react-router-dom";

function LinksBar() {
  const linkStyle = { color: "#57b5f8" };

  return (
    <section
      className="links-bar"
      style={{ backgroundColor: "#405D72", color: "white" }}
    >
      <div className="container">
        <ul className="nav justify-content-lg-center justify-content-sm-left dm-serif-font">
          <li className="nav-item">
            <a
              className="nav-link mb-2"
              href="https://www.linkedin.com/in/fatih-ka%C4%9Fan-emre-b551667b/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Linkedin
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link mb-2"
              href="https://github.com/fatihkaganemre"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Github
            </a>
          </li>

          <li className="nav-item">
            <NavLink
              to="/hobbies"
              className="nav-link mb-2"
              style={linkStyle}
            >
              Hobbies
            </NavLink>
          </li>

        </ul>
      </div>
    </section>
  );
}

export default LinksBar;
