import React from "react";
import "./Experience.css";

function ExperienceItem({ company, role, period, description }) {
  return (
    <>
      <h6 className="dm-serif-font">
        {company} — {role}
      </h6>
      <p className="noto-serif-font">
        <i className="date-text">{period}</i>
        <br />
        {description}
      </p>
    </>
  );
}

function Experience() {
    const experiences = [
        {
            company: "William Hill",
            role: "iOS Developer",
            period: "Aug 2024 – Present · Kraków",
            description:
            "Working as an iOS developer on production-scale applications.",
        },
        {
            company: "N7 Mobile",
            role: "iOS Developer",
            period: "Oct 2021 – May 2024 · Warsaw",
            description:
            "I worked on a banking application using a variety of tools and frameworks. \
        The primary tools included Xcode, Azure CI, SonarCloud, SPM, Jira, and Figma. \
        The frameworks utilized were Combine, Firebase, Lottie, AppAuth, Intercom and so on. \
        The application follows a version of the MVVM architectural pattern and includes unit tests for business logic.",
        },
        {
            company: "AppUnite",
            role: "iOS Developer",
            period: "May 2017 – Sept 2021 · Poznań",
            description:
            "I have worked on a variety of applications across different fields including booking, social media, online classes, and online shopping. \
        I have written numerous tests and utilized various frameworks, several of which are highlighted in the Skills section.",
        },
    ];

    return (
        <div className="col d-flex align-items-start experience">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                >
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1z" />
                <path d="M8 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                </svg>
            </div>

            <div>
                <h3 className="fs-2 dm-serif-font">Experience</h3>

                {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
