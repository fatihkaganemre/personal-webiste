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
    <div className="container mt-5">
      <h1 className="dm-serif-font">Contact</h1>
      <hr />

      <section className="noto-serif-font">
        <p>Milczańska, Poznań 61-131 / POLAND</p>
        <p>+48 791 650 862</p>
        <p>fatih.kagan.emre@gmail.com</p>
      </section>

      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-3"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          rows="10"
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
