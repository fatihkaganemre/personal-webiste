function Education() {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
          <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
        </svg>
      </div>

      <div>
        <h3 className="fs-2 dm-serif-font">Education</h3>

        <h6 className="dm-serif-font">Poznań University of Technology</h6>
        <p className="noto-serif-font">
          MSc · Electronics & Telecommunications  
          <br />
          2015 – 2017 · Poland
        </p>

        <h6 className="dm-serif-font">Białystok University of Technology</h6>
        <p className="noto-serif-font">
          BSc (Erasmus) · Electrical Engineering  
          <br />
          2012 – 2013 · Poland
        </p>

        <h6 className="dm-serif-font">Fırat University</h6>
        <p className="noto-serif-font">
          BSc · Electrical & Electronics Engineering  
          <br />
          2009 – 2012 · Turkey
        </p>

        <p className="warning noto-serif-font mt-3">
          Graduated from a Polish university — free access to the Polish labor market.
        </p>
      </div>
    </div>
  );
}

export default Education;
