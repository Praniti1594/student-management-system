import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/studentApi";

function StudentForm({
  triggerRefresh,
  studentId,
}) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    course: "",
    year: "",
    dob: "",
    email: "",
    mobile: "",
    gender: "",
    address: "",
    photo: null,
  });

  const [removePhoto, setRemovePhoto] =
    useState(false);

  useEffect(() => {
    if (studentId) {
      fetchStudent();
    }
  }, [studentId]);

  const fetchStudent = async () => {
    try {
      const res = await API.get(
        `/${studentId}`
      );

      setForm({
  name: res.data.name || "",
  course: res.data.course || "",
  year: res.data.year || "",
  dob: res.data.dob
    ? res.data.dob.split("T")[0]
    : "",
  email: res.data.email || "",
  mobile: res.data.mobile || "",
  gender: res.data.gender || "",
  address: res.data.address || "",
  photo: res.data.photo || "",
});
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (studentId) {
        const data = new FormData();

        data.append("name", form.name);
        data.append("course", form.course);
        data.append("year", form.year);
        data.append("dob", form.dob);
        data.append("email", form.email);
        data.append("mobile", form.mobile);
        data.append("gender", form.gender);
        data.append("address", form.address);

        if (
          form.photo &&
          typeof form.photo !== "string"
        ) {
          data.append(
            "photo",
            form.photo
          );
        }
        console.log("FORM DATA");
console.log(form);

        await API.put(
          `/${studentId}`,
          data,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        alert(
          "Student Updated Successfully"
        );

        navigate("/students");

      } else {
        const data = new FormData();

        data.append("name", form.name);
        data.append("course", form.course);
        data.append("year", form.year);
        data.append("dob", form.dob);
        data.append("email", form.email);
        data.append("mobile", form.mobile);
        data.append("gender", form.gender);
        data.append("address", form.address);
        data.append("photo", form.photo);

        await API.post("/", data);

        if (triggerRefresh) {
          triggerRefresh();
        }

        alert(
          "Student Added Successfully"
        );

        setForm({
          name: "",
          course: "",
          year: "",
          dob: "",
          email: "",
          mobile: "",
          gender: "",
          address: "",
          photo: null,
        });

        e.target.reset();
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="card shadow border-0">
      <div className="card-header bg-white">
        <h3 className="mb-0">
          {studentId
            ? "Edit Student"
            : "Add Student"}
        </h3>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Course
              </label>

              <input
                type="text"
                className="form-control"
                required
                value={form.course}
                onChange={(e) =>
                  setForm({
                    ...form,
                    course: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Year
              </label>

              <input
                type="number"
                className="form-control"
                min="1"
                max="4"
                required
                value={form.year}
                onChange={(e) =>
                  setForm({
                    ...form,
                    year: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Date of Birth
              </label>

              <input
                type="date"
                className="form-control"
                required
                value={form.dob}
                onChange={(e) =>
                  setForm({
                    ...form,
                    dob: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Mobile Number
              </label>

              <input
                type="text"
                className="form-control"
                pattern="[0-9]{10}"
                required
                value={form.mobile}
                onChange={(e) =>
                  setForm({
                    ...form,
                    mobile: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Gender
              </label>

              <select
                className="form-select"
                required
                value={form.gender}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gender: e.target.value,
                  })
                }
              >
                <option value="">
                  Select Gender
                </option>

                <option value="Male">
                  Male
                </option>

                <option value="Female">
                  Female
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="col-12 mb-3">
              <label className="form-label">
                Address
              </label>

              <textarea
                className="form-control"
                rows="3"
                required
                value={form.address}
                onChange={(e) =>
                  setForm({
                    ...form,
                    address: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-12 mb-3">
              <label className="form-label">
                Student Photo
              </label>

              {studentId &&
              form.photo &&
              !removePhoto &&
              typeof form.photo ===
                "string" ? (
                <div>
                  <img
                    src={`http://localhost:5000/uploads/${form.photo}`}
                    alt="student"
                    width="150"
                    className="rounded border d-block mb-2"
                  />

                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      setRemovePhoto(
                        true
                      );

                      setForm({
                        ...form,
                        photo: null,
                      });
                    }}
                  >
                    Remove Current Photo
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  required={!studentId}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      photo:
                        e.target.files[0],
                    })
                  }
                />
              )}
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                {studentId
                  ? "Update Student"
                  : "Add Student"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;