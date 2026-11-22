import React from "react";
import './Header.css';

function Header() {
  return (
    <section className="header">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 dm-serif-font">
              Fatih Kağan Emre
            </h1>
            <p className="lead noto-serif-font">
              I’m a software developer who enjoys turning thoughtful ideas into reliable, human-friendly products. From native iOS apps to web experiments and ML projects, I care about clean architecture, careful details, curiosity, and making complex technology feel simple.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="./images/Profile.jpg"
              className="d-block mx-lg-auto img-fluid header-profile-img"
              alt="Profile"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
