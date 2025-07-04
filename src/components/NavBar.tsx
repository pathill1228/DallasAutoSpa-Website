import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg-dark p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="/DASLogo.png" alt="Dallas Auto Spa Logo" height="55" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
