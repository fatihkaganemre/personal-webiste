import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container my-5">
        <div className="p-5 text-center bg-body-secondary rounded-3">
          <h1 className="text-body-emphasis dm-serif-font">Portfolio</h1>
          <p className="lead noto-serif-font">
            I am currently working on two side projects to enhance my professional profile
          </p>
        </div>

        <div className="container mb-5">
          <div className="row justify-content-lg-center">
            <div className="col-lg-5 col-sm-12 mb-5">
              <h2 className="dm-serif-font">FPlanner</h2>
              <p className="noto-serif-font">
                This is a training planning application designed to facilitate the creation, editing, and execution of training sessions with multiple exercises. I developed this app to explore:
              </p>
              <ul className="noto-serif-font">
                <li>SwiftUI</li>
                <li>SwiftData </li>
                <li>Local Notifications</li>
              </ul>
              <img src="./assets/images/FPlanner1.png" alt="FPlanner app home view" className="portfolio-img"/>
              <img src="./assets/images/FPlanner2.png" alt="FPlanner app trainings view" className="portfolio-img"/> <br/>
            </div>
            <div className="col-lg-5 col-sm-12">
              <h2 className="dm-serif-font">FTuner</h2>
              <p className="noto-serif-font">
                This is an instrument tuning application that displays the pitch of detected sound signals, assisting you in tuning your instrument. It utilizes the YinYang algorithm to accurately detect the main frequency. I developed this app as part of my experimentation and skill development.
              </p>
              <ul className="noto-serif-font">
                <li>SwiftUI</li>
                <li>Charts</li>
                <li>AVFoundation</li>
              </ul>
              <img src="./assets/images/FTuner.png" alt="FTuner app home view" className="portfolio-img"/> <br/>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Portfolio;
