import {
  useEffect,
  useState,
} from "react";

import API from "../api/studentApi";

import {
  Pie,
  Bar,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function Analytics() {

  const [students, setStudents] =
    useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {

      const res =
        await API.get(
          "/?limit=100"
        );

      setStudents(
        res.data.students
      );

    } catch (err) {
      console.log(err);
    }
  };

  const male =
    students.filter(
      (s) =>
        s.gender === "Male"
    ).length;

  const female =
    students.filter(
      (s) =>
        s.gender === "Female"
    ).length;

  const other =
    students.filter(
      (s) =>
        s.gender === "Other"
    ).length;

  const courses = {};

  students.forEach((student) => {
    courses[student.course] =
      (courses[student.course] || 0) + 1;
  });

  const pieData = {
    labels: [
      "Male",
      "Female",
      "Other",
    ],
    datasets: [
      {
        data: [
          male,
          female,
          other,
        ],
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
        ],
      },
    ],
  };

const barData = {
  labels: Object.keys(courses),

  datasets: [
    {
      label: "Students Per Course",

      data: Object.values(courses),

      backgroundColor: [
        "#0d6efd",
        "#198754",
        "#dc3545",
        "#ffc107",
        "#6f42c1",
        "#20c997",
        "#fd7e14",
      ],

      borderRadius: 8,
    },
  ],
};

  return (
    <div className="container py-5">

     <div className="text-center mb-5">

  <h1 className="display-5 fw-bold text-primary">
    Analytics Dashboard
  </h1>

  <p className="text-muted">
    Visual insights into student records
    and enrollment distribution.
  </p>

</div>

      <div className="row">

        <div className="col-md-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-body">

              <h5 className="text-center mb-4">
                Gender Distribution
              </h5>

              <div
  style={{
    width: "300px",
    height: "300px",
    margin: "0 auto",
  }}
>
  <Pie
    data={pieData}
    options={{
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    }}
  />
</div>

            </div>

          </div>

        </div>

        <div className="col-md-6 mb-4">

          <div className="card shadow border-0">

            <div className="card-body">

              <h5 className="text-center mb-4">
                Students By Course
              </h5>

              <Bar data={barData} />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;