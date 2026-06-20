const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("Student", {
  admission_number: {
    type: DataTypes.STRING,
    unique: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  course: DataTypes.STRING,

  year: DataTypes.INTEGER,

  dob: DataTypes.DATEONLY,

  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  mobile: DataTypes.STRING,

  gender: DataTypes.STRING,

  address: DataTypes.TEXT,

  photo: DataTypes.STRING,
});

module.exports = Student;