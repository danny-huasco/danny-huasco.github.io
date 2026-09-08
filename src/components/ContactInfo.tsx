function ContactInfo() {
  return (
    <div className="card mb-3 mt-3">
      <div className="card-body">
        <h5 className="card-title">Contact Information</h5>
        <p className="card-text">
          <strong>Email:</strong> d.huascomiranda@gmail.com
        </p>
        <p className="card-text">
          <strong>Phone:</strong> (904) 707-1627
        </p>
        <p className="card-text">
          <strong>Social Media:</strong>
          <a
            type="button"
            className="btn btn-primary ms-2"
            href="https://www.linkedin.com/in/danielhuascomiranda/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            type="button"
            className="btn btn-dark ms-2"
            href="https://www.github.com/danny-huasco"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
