import React from "react";

function Features() {
  return (
    <section className="features">
      <div className="container mt-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

          {/* Skills */}
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              {/* SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-cpu" viewBox="0 0 16 16">
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
              </svg>
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis dm-serif-font">Skills</h3>
              <ul className="noto-serif-font">
                <li>Swift, Xcode, UIKit, SwiftUI</li>
                <li>Git, Gitlab, Github, BitBucket</li>
                <li>RxSwift, ReactiveSwift, Combine, Async/Await</li>
                <li>MVC, MVVM , VIPER, MVP, TCA</li>
                <li>Unit, Integration, Snapshot, UI Testing</li>
                <li>CI/CD Gitlab CI, Travis, Github Actions, Circle CI, Azure, Fastlane</li>
                <li>REST APIs, Alamofire, URLSession</li>
                <li>SPM, Cocoapods, Carthage</li>
                <li>SwiftData, Charts</li>
              </ul>
              <h5 className="dm-serif-font">Others</h5>
              <ul className="noto-serif-font">
                <li>HTML, CSS, Java Script, React</li>
                <li>NodeJS, ExpressJS, EJS</li>
                <li>SQL, PostgreSQL</li>
                <li>Python, Django</li>
              </ul>
            </div>
          </div>

          {/* Experience and Education components can be split similarly */}
          {/* For brevity, you can continue creating Experience.jsx and Education.jsx */}
        </div>
      </div>
    </section>
  );
}

export default Features;
