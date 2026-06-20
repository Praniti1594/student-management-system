import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          🎓 SMS
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <div className="navbar-nav ms-auto">

            <Link
              className="nav-link"
              to="/"
            >
              Home
            </Link>

            <Link
              className="nav-link"
              to="/add-student"
            >
              Add Student
            </Link>

            <Link
              className="nav-link"
              to="/students"
            >
              Students
            </Link>

            <Link
              className="nav-link"
              to="/analytics"
            >
              Analytics
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;