import karateImg from "../assets/images/Karate.JPG";
import danceImg from "../assets/images/Dance.JPG";
import baglamaImg from "../assets/images/Baglama.jpg";

function Hobbies() {
  return (
    <div className="container text-white mt-5">
      <h1 className="dm-serif-font">Hobbies</h1>
      <hr />

      <div className="d-flex gap-4 flex-wrap">
        <div className="card" style={{ width: "18rem" }}>
          <img src={karateImg} className="card-img-top" />
          <div className="card-body">
            <h5 className="dm-serif-font">Karate</h5>
            <p className="noto-serif-font">
              I started Karate when I was child... I am a karate coach in Kuzi Sport.
            </p>
            <a
              href="https://medium.com/@fatihkaganemre/an-insightful-approach-to-kumite-training-e0f2209558a0"
              className="btn btn-primary"
            >
              Checkout my kumite article
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={danceImg} className="card-img-top" />
          <div className="card-body">
            <h5 className="dm-serif-font">Dance</h5>
            <p className="noto-serif-font">
              We love dancing bachata, salsa, kizomba.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={baglamaImg} className="card-img-top" />
          <div className="card-body">
            <h5 className="dm-serif-font">Music</h5>
            <p className="noto-serif-font">
              I play bağlama, a traditional instrument.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
