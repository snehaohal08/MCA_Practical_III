const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Create a student
router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});

// Read all students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const students = await Student.findByIdAndDelete(req.params.id);
    if (!students) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
});


module.exports = router;
