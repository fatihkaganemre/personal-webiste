import React from "react";

function Header() {
  return (
    <section id="header" style={{ backgroundColor: "#405D72", color: "white" }}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 dm-serif-font">
              Fatih Kağan Emre
            </h1>
            <p className="lead noto-serif-font">
              Hello, I am an iOS developer. I have a deep passion for technology and love creating high-quality mobile applications. I bring a mix of technical expertise and creativity to every project. Friendly and collaborative, I thrive in team settings. Let’s connect and chat about how I can help with your project needs!
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="./assets/images/Profile.jpg"
              className="d-block mx-lg-auto img-fluid profile-img"
              alt="Profile"
              width="300"
              height="300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
