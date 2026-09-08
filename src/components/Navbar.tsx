import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <strong>DANNY HUASCO</strong>&nbsp;<small>Web Developer</small>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
            <NavLink to="/project-gallery" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Project Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
            <NavLink to="/privacy" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Privacy
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
