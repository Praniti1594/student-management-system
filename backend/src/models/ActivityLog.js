const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ActivityLog = sequelize.define(
  "ActivityLog",
  {
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = ActivityLog;