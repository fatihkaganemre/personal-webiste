import React from "react";
import { Link } from "react-router-dom";
import HobbyCard from "./HobbyCard";
import "./Hobbies.css";

const hobbies = [
  {
    image: "/images/Karate.JPG",
    title: "Karate",
    description: (
      <>
        I began practicing Karate as a child at Sertdemir Karate Club in
        Istanbul, and it has stayed with me ever since. Today I am a black belt
        and coach at{" "}
        <a
          href="https://www.goatskarate.pl/"
          target="_blank"
          rel="noreferrer"
          className="hobby-inline-link"
        >
          Goats Karate Team
        </a>
        {" "}
        in Poznan. I regularly take part in international tournaments, coach
        both kids and athletes, and I have been fortunate to share a few
        international-level medal moments with the team.
      </>
    ),
    link: "https://medium.com/@fatihkaganemre/an-insightful-approach-to-kumite-training-e0f2209558a0",
  },
  {
    image: "/images/Dance.jpg",
    title: "Dance",
    description:
      "I got into dancing thanks to my wife. We love spending time together dancing bachata, salsa, and kizomba, and we really enjoy going to festivals like Bachaturo, BachaMeMore, and others.",
  },
  {
    image: "/images/Baglama.jpg",
    title: "Music",
    description:
      "I play baglama, a traditional instrument. I love meeting my friends, singing, and making music together. It is one of my favorite ways to enjoy life.",
  },
];

function Hobbies() {
  return (
    <div className="hobbies-page">
      <div className="container">
        <Link to="/" className="back-btn">← Back to Home</Link>

        <h1 className="dm-serif-font text-center">Hobbies</h1>
        <hr />

        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.title} {...hobby} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
