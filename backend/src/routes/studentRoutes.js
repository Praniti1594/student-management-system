const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const controller = require("../controllers/studentController");

router.get("/", controller.getStudents);

router.get("/:id", controller.getStudent);

router.post(
  "/",
  upload.single("photo"),
  controller.createStudent
);

router.put(
  "/:id",
  upload.single("photo"),
  controller.updateStudent
);

router.delete("/:id", controller.deleteStudent);

module.exports = router;