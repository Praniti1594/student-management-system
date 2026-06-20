const Student = require("../models/Student");
const generateAdmissionNumber = require("../utils/admissionGenerator");
const { Op } = require("sequelize");

const ActivityLog =
require("../models/ActivityLog");

/*
====================================
CREATE STUDENT
====================================
*/
exports.createStudent = async (req, res) => {
  try {
    const {
      name,
      course,
      year,
      dob,
      email,
      mobile,
      gender,
      address,
    } = req.body;

    if (
      !name ||
      !course ||
      !year ||
      !dob ||
      !email ||
      !mobile
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const student = await Student.create({
      admission_number:
        generateAdmissionNumber(),
      name,
      course,
      year,
      dob,
      email,
      mobile,
      gender,
      address,
      photo: req.file?.filename,
    });

    await ActivityLog.create({
  action: "Student Created",
  student_name: student.name,
});

    res.status(201).json(student);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/*
====================================
GET ALL STUDENTS
SEARCH + FILTER + PAGINATION
====================================
*/
exports.getStudents = async (req, res) => {
  try {

    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 5;

    const offset =
      (page - 1) * limit;

    const {
      search,
      course,
      year,
      gender,
    } = req.query;

    let where = {};

    if (search) {
      where.name = {
        [Op.iLike]: `%${search}%`,
      };
    }

    if (course) {
      where.course = course;
    }

    if (year) {
      where.year = Number(year);
    }

    if (
      gender &&
      gender !== ""
    ) {
      where.gender = gender;
    }

    const { count, rows } =
      await Student.findAndCountAll({
        where,
        limit,
        offset,
        order: [["id", "DESC"]],
      });

    res.json({
      students: rows,
      totalStudents: count,
      totalPages: Math.ceil(
        count / limit
      ),
      currentPage: page,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/*
====================================
GET SINGLE STUDENT
====================================
*/
exports.getStudent = async (req, res) => {
  try {

    const student =
      await Student.findByPk(
        req.params.id
      );

    if (!student) {
      return res.status(404).json({
        message:
          "Student not found",
      });
    }

    res.json(student);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/*
====================================
UPDATE STUDENT
====================================
*/
exports.updateStudent = async (req, res) => {
  try {

    const student =
      await Student.findByPk(
        req.params.id
      );

    if (!student) {
      return res.status(404).json({
        message:
          "Student not found",
      });
    }

    const updatedData = {
      name: req.body.name,
      course: req.body.course,
      year: req.body.year,
      dob: req.body.dob,
      email: req.body.email,
      mobile: req.body.mobile,
      gender: req.body.gender,
      address: req.body.address,
    };

    if (req.file) {
      updatedData.photo =
        req.file.filename;
    }

    await student.update(
      updatedData
    );

    await ActivityLog.create({
  action: "Student Updated",
  student_name: student.name,
});

    res.json({
      message:
        "Student Updated Successfully",
      student,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

/*
====================================
DELETE STUDENT
====================================
*/
exports.deleteStudent = async (req, res) => {
  try {

    const student =
      await Student.findByPk(
        req.params.id
      );

    if (!student) {
      return res.status(404).json({
        message:
          "Student not found",
      });
    }

  const studentName =
  student.name;

await student.destroy();

await ActivityLog.create({
  action: "Student Deleted",
  student_name: studentName,
});

    res.json({
      message:
        "Deleted Successfully",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};