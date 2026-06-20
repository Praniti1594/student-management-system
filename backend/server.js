require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./src/config/db");
const studentRoutes = require("./src/routes/studentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/students", studentRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(
      process.env.PORT,
      () => {
        console.log(
          "Server Running"
        );
      }
    );
  });