import "bootstrap/dist/css/bootstrap.css";
import "../Styles/Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="centered-container">
      <h2 className="centered-container">DALLAS AUTO SPA</h2>
      <h5 className="centered-container">
        Welcome to Dallas Auto Spa. From Vinyl Wraps to Ceramic Coatings, We
        Elivate Your Vehicle's Look and Preserve Its Value.
      </h5>
      <button type="button" className="btn btn-dark">
        <Link to="/Services" className="nav-link">
          See Our Services
        </Link>
      </button>
    </div>
  );
}

export default Welcome;
