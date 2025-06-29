import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/Navbar.css";

function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // scrolling down
      setShow(false);
    } else {
      // scrolling up
      setShow(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-bg-dark p-3 fixed-top ${
        show ? "navbar-visible" : "navbar-hidden"
      }`}
    >
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
