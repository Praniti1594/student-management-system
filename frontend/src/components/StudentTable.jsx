import { useEffect, useState } from "react";
import API from "../api/studentApi";
import { useNavigate } from "react-router-dom";

function StudentTable({ refresh }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
const [course, setCourse] = useState("");
const [year, setYear] = useState("");
const [gender, setGender] = useState("");
const [page, setPage] = useState(1);
const [totalPages, setTotalPages] =
  useState(1);
  

  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
 const res = await API.get(
  `/?search=${search}&course=${course}&year=${year}&gender=${gender}&page=${page}&limit=5`
);

setStudents(res.data.students);

setTotalPages(
  res.data.totalPages
);
      
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {
  fetchStudents();
}, [
  refresh,
  search,
  course,
  year,
  gender,
  page,
]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);

      fetchStudents();

      alert("Student Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const courses = [
  ...new Set(
    students.map((s) => s.course)
  ),
];

const years = [
  ...new Set(
    students.map((s) => s.year)
  ),
];

const genders = [
  ...new Set(
    students.map((s) => s.gender)
  ),
];

  return (
    <div className="card shadow border-0 mt-4">
      <div className="card-header bg-white">
        <h3 className="mb-0">
          Student List
        </h3>
      </div>

      <div className="card-body">

        {/* SEARCH + FILTER */}

      <div className="row mb-4">

  <div className="col-md-12 mb-3">
    <input
      type="text"
      className="form-control"
      placeholder="Search Student..."
      value={search}
    onChange={(e) => {
  setSearch(e.target.value);
  setPage(1);
}}
    />
  </div>

  <div className="col-md-3">

    <select
      className="form-select"
      value={course}
    onChange={(e) => {
  setCourse(e.target.value);
  setPage(1);
}}
    >
      <option value="">
        All Courses
      </option>

      {courses.map((course) => (
        <option
          key={course}
          value={course}
        >
          {course}
        </option>
      ))}
    </select>

  </div>

  <div className="col-md-3">

    <select
      className="form-select"
      value={year}
      onChange={(e) => {
  setYear(e.target.value);
  setPage(1);
}}
    >
      <option value="">
        All Years
      </option>

      {years.map((year) => (
        <option
          key={year}
          value={year}
        >
          Year {year}
        </option>
      ))}
    </select>

  </div>

  <div className="col-md-3">

    <select
      className="form-select"
      value={gender}
      onChange={(e) => {
  setGender(e.target.value);
  setPage(1);
}}
    >
      <option value="">
        All Genders
      </option>

      {genders.map((gender) => (
        <option
          key={gender}
          value={gender}
        >
          {gender}
        </option>
      ))}
    </select>

  </div>

  <div className="col-md-3">

    <button
      className="btn btn-secondary w-100"
      onClick={() => {
        setSearch("");
        setCourse("");
        setYear("");
        setGender("");
      }}
    >
      Reset Filters
    </button>

  </div>

</div>

        <div className="table-responsive">

          <table className="table table-striped table-hover align-middle">

            <thead>
              <tr>
                <th>Photo</th>
                <th>Admission No</th>
                <th>Name</th>
                <th>Course</th>
                <th>Year</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>

                    <td>
                     <img
  src={`https://student-management-system-b4ut.onrender.com/uploads/${student.photo}`}
  alt={student.name}
  width="60"
  height="60"
  className="rounded-circle"
/>
                    </td>

                    <td>
                      {student.admission_number}
                    </td>

                    <td>{student.name}</td>

                    <td>{student.course}</td>

                    <td>{student.year}</td>

                    <td>{student.email}</td>

                    <td>{student.mobile}</td>

                    <td>{student.gender}</td>

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                          navigate(
                            `/edit-student/${student.id}`
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          handleDelete(student.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center"
                  >
                    No Students Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">

  <button
    className="btn btn-outline-primary"
    disabled={page === 1}
    onClick={() =>
      setPage(page - 1)
    }
  >
    Previous
  </button>

  <span>
    Page {page} of {totalPages}
  </span>

  <button
    className="btn btn-outline-primary"
    disabled={
      page === totalPages
    }
    onClick={() =>
      setPage(page + 1)
    }
  >
    Next
  </button>

</div>
      </div>
    </div>
  );
}

export default StudentTable;
