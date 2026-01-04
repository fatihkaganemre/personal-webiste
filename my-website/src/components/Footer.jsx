import React from "react";

function Footer() {
  return (
    <section className="footer" style={{ backgroundColor: "#405D72", color: "white" }}>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 noto-serif-font">© 2024 Fatih Kagan Emre - All Rights Reserved.</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.instagram.com/fatih.kagan/">Instagram</a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://x.com/smkaan">X</a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="https://www.facebook.com/fatih.k.emre">Facebook</a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
