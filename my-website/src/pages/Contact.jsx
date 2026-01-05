import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const myMail = "fatih.kagan.emre@gmail.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;

    const mailtoLink = `mailto:${myMail}?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(content)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <Link to="/" className="back-btn">← Back to Home</Link>

        <h1 className="dm-serif-font text-center">Contact</h1>
        <hr />

        <section className="contact-info noto-serif-font">
          <p>Milczańska, Poznań 61-131 / POLAND</p>
          <p>+48 791 650 862</p>
          <p>fatih.kagan.emre@gmail.com</p>
        </section>

        <form className="contact-form noto-serif-font" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required
          />

          <textarea
            name="content"
            placeholder="Content"
            rows="8"
            required
          />

          <button type="submit">Send email</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;