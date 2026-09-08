function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <div className="container">
        <ul className="list-inline mb-0 d-flex gap-3 justify-content-center">
          <li className="list-inline-item">
            <p className="mb-2">&copy; 2025 Danny Huasco | Software Engineer. All rights reserved.</p>
          </li>
          <li className="list-inline-item">
            <a href="#/privacy" className="btn btn-outline-primary btn-sm text-decoration-none">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#/contact" className="btn btn-outline-primary btn-sm text-decoration-none">
              Contact Me
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#/project-gallery" className="btn btn-outline-primary btn-sm text-decoration-none">
              Project Gallery
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
