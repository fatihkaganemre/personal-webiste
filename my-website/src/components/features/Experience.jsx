function Experience() {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1z" />
          <path d="M8 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
        </svg>
      </div>

      <div>
        <h3 className="fs-2 dm-serif-font">Experience</h3>

        <h6 className="dm-serif-font">
          William Hill — iOS Developer
        </h6>
        <p className="noto-serif-font">
          Aug 2024 – Present · Kraków  
          <br />
          Working as an iOS developer on production-scale applications.
        </p>

        <h6 className="dm-serif-font">
          N7 Mobile — iOS Developer
        </h6>
        <p className="noto-serif-font">
          Oct 2021 – May 2024 · Warsaw  
          <br />
          Banking application development using Combine, Firebase, MVVM, CI/CD.
        </p>

        <h6 className="dm-serif-font">
          AppUnite — iOS Developer
        </h6>
        <p className="noto-serif-font">
          May 2017 – Sept 2021 · Poznań  
          <br />
          Worked on booking, social media, e-commerce, and online learning apps.
        </p>
      </div>
    </div>
  );
}

export default Experience;
