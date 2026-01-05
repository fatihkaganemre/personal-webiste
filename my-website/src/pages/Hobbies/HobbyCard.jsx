import React from "react";

function HobbyCard({ image, title, description, link }) {
  return (
    <div className="hobby-card">
      <img src={image} alt={title} />
      <div className="hobby-card-body">
        <h5 className="dm-serif-font">{title}</h5>
        <p className="noto-serif-font">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="hobby-btn"
          >
            Read more
          </a>
        )}
      </div>
    </div>
  );
}

export default HobbyCard;
