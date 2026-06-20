import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">

      {/* Hero Section */}

      <div className="text-center mb-5">

        <h1 className="display-3 fw-bold text-primary">
          Student Management System
        </h1>

        <p className="lead text-muted mt-3">
          Efficiently manage student records,
          track academic information,
          and organize student data in one place.
        </p>

        <div className="mt-4">

          <Link
            to="/add-student"
            className="btn btn-primary btn-lg me-3"
          >
            Add Student
          </Link>

          <Link
            to="/students"
            className="btn btn-outline-primary btn-lg"
          >
            View Students
          </Link>

        </div>

      </div>

      {/* Feature Cards */}

      <div className="row g-4">

        <div className="col-md-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <h3>📋</h3>

              <h5 className="mt-3">
                Student Records
              </h5>

              <p className="text-muted">
                Add, update and manage
                complete student details.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <h3>📷</h3>

              <h5 className="mt-3">
                Photo Management
              </h5>

              <p className="text-muted">
                Upload and update
                student profile photos.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <h3>📊</h3>

              <h5 className="mt-3">
                Analytics Dashboard
              </h5>

              <p className="text-muted">
                View statistics and
                student distribution reports.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <h3>🔍</h3>

              <h5 className="mt-3">
                Search & Filter
              </h5>

              <p className="text-muted">
                Quickly find students using
                search and advanced filters.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <h3>🆔</h3>

              <h5 className="mt-3">
                Unique Admission Number
              </h5>

              <p className="text-muted">
                Automatically generated
                admission numbers.
              </p>

            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div className="card shadow border-0 h-100">

            <div className="card-body text-center">

              <h3>🗄️</h3>

              <h5 className="mt-3">
                PostgreSQL Database
              </h5>

              <p className="text-muted">
                Secure and scalable
                student data storage.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;