const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// Create a student
router.post("/", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});
// Read all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    next(err);
  }
});
// Delete  students
router.delete("/:id", async (req, res, next) => {
  try {
    const students = await Student.findByIdAndDelete(req.params.id);
    if (!students)
      return res.status(404).json({ message: "student not found" });
    res.status(200).json({ message: "student deleted successfully" });
  } catch (err) {
    next(err);
  }
});
// Update student
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent)
      return res.status(404).json({ message: "Student not found" });
    res.json({ data: updatedStudent, message: "Updated successfully" });
  } catch (err) {
    res.status(400).json({ message: "Bad Request", error: err.message });
  }
});


module.exports = router;
