function Contact() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-6">
        <div className="card mb-3 mt-3">
          <div className="card-body">
            <h5 className="card-title">Describe what you're looking for!</h5>
            <small className="text-muted">
              Make sure to include all details that can be transformed into functional software
            </small>
            <form className="mt-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Project Proposal
                </label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
