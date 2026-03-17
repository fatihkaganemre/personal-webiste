import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ─────────────────────────────────────────────────────────────
// Replace these three constants with your EmailJS credentials.
// Dashboard → https://www.emailjs.com/
//   SERVICE_ID  : Email Services  → your service ID
//   TEMPLATE_ID : Email Templates → your template ID
//   PUBLIC_KEY  : Account → API Keys → Public Key
// ─────────────────────────────────────────────────────────────
const SERVICE_ID  = import.meta.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.EMAILJS_PUBLIC_KEY;

const SendIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5 1.5L1.5 5.5L5.5 7.5M11.5 1.5L7.5 11.5L5.5 7.5M11.5 1.5L5.5 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 8L6 11.5L13.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("[EmailJS] error:", err);
      setStatus("error");
      setErrorMsg("Failed to send. Please try again or email me directly.");
    }
  };

  const isLoading = status === "loading";

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-hero">
          <h1 className="dm-serif-font">Get in Touch</h1>
          <p className="noto-serif-font">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left — info */}
          <div className="contact-info">
            <div className="info-block">
              <span className="info-label">Response time</span>
              <span className="info-value noto-serif-font">Usually within 24 hours</span>
            </div>
            <div className="info-block">
              <span className="info-label">Availability</span>
              <span className="info-value noto-serif-font">Open to new projects</span>
            </div>
            <div className="info-divider" />
            <p className="info-note noto-serif-font">
              Whether it's a full-stack web app, an iOS project, or something in between —
              feel free to reach out.
            </p>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {status === "success" ? (
              <div className="contact-success">
                <div className="success-icon">
                  <CheckIcon />
                </div>
                <h3 className="dm-serif-font">Message sent!</h3>
                <p className="noto-serif-font">Thanks for reaching out. I'll get back to you soon.</p>
                <button className="contact-btn" onClick={() => setStatus("idle")}>
                  Send another
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>

                {status === "error" && (
                  <p className="form-error noto-serif-font">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  className={`contact-btn${isLoading ? " contact-btn--loading" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="btn-spinner" />
                  ) : (
                    <>Send message <SendIcon /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;