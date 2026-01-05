import { FaInstagram, FaFacebook } from "react-icons/fa6";
import './Footer.css';

function Footer() {
  return (
    <section
      className="footer"
      style={{ backgroundColor: "#405D72", color: "white" }}
    >
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-4">
          
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 noto-serif-font">
              © 2024 Fatih Kagan Emre – All Rights Reserved.
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex gap-3">
            <li>
              <a
                href="https://www.instagram.com/fatih.kagan/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaInstagram size={22} />
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/fatih.k.emre"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaFacebook size={22} />
              </a>
            </li>
          </ul>

        </footer>
      </div>
    </section>
  );
}

export default Footer;
