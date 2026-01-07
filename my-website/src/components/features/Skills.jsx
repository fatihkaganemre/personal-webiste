function Skills() {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5v7A2.5 2.5 0 0 1 11.5 14v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0" />
        </svg>
      </div>

      <div>
        <h3 className="fs-2 dm-serif-font">Skills</h3>

        <ul className="noto-serif-font">
          <li>Swift, Xcode, UIKit, SwiftUI</li>
          <li>Git, GitLab, GitHub, Bitbucket</li>
          <li>RxSwift, ReactiveSwift, Combine, Async/Await</li>
          <li>MVC, MVVM , VIPER, MVP, TCA</li>
          <li>Unit, Integration, Snapshot, UI Testing</li>
          <li>CI/CD (GitLab CI, Travis, Github Actions, Circle CI, Azure, Fastlane)</li>
          <li>REST APIs, Alamofire, URLSession</li>
          <li>SPM, Cocoapods, Carthage</li>
          <li>SwiftData, Charts</li>
        </ul>

        <h5 className="dm-serif-font mt-3">Others</h5>
        <ul className="noto-serif-font">
          <li>HTML, CSS, JavaScript, React</li>
          <li>Node.js, Express</li>
          <li>PostgreSQL, SQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
