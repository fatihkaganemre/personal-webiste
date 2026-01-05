import React from "react";
import { Link } from "react-router-dom";
import HobbyCard from "./HobbyCard";
import "./Hobbies.css";

function Hobbies() {
  return (
    <div className="hobbies-page">
      <div className="container">
        <Link to="/" className="back-btn">← Back to Home</Link>

        <h1 className="dm-serif-font text-center">Hobbies</h1>
        <hr />

        <div className="hobbies-grid">
          <HobbyCard
            image="/images/Karate.JPG"
            title="Karate"
            description="I began practicing Karate as a child at Sertdemir Karate Club in Istanbul. Since then, it has become a central part of my life. I am now a black belt and a coach at Goats Karate Team in Poznań."
            link="https://medium.com/@fatihkaganemre/an-insightful-approach-to-kumite-training-e0f2209558a0"
          />

          <HobbyCard
            image="/images/Dance.jpg"
            title="Dance"
            description="I met dancing thanks to my fiancée. We love dancing bachata, salsa and kizomba."
          />

          <HobbyCard
            image="/images/Baglama.jpg"
            title="Music"
            description="I play bağlama, a traditional instrument. Music is how I disconnect and recharge."
          />
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
