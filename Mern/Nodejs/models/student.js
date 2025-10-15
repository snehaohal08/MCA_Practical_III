const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [1, "Age must be at least 1"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);


db.employees.insertMany([
  {
    name: "Sneha",
    department: "HR",
    email: "sneha@example.com",
    salary: 50000,
    address: { street: "MG Road", city: "Pune", zip: 411001 }
  },
  {
    name: "Mosin",
    department: "IT",
    email: "mosin@example.com",
    salary: 70000,
    address: { street: "Baner", city: "Pune", zip: 411045 }
  },
  {
    name: "Akshata",
    department: "Finance",
    email: "akshata@gmail.com",
    salary: 80000,
    address: { street: "Laxmi Road", city: "Mumbai", zip: 400001 }
  },
  {
    name: "Rahul",
    department: "Sales",
    email: "rahul@gmail.com",
    salary: 60000,
    address: { street: "Kharadi", city: "Pune", zip: 411014 }
  },
  {
    name: "Rohit",
    department: "IT",
    email: "rohit@example.com",
    salary: 80000,
    address: { street: "FC Road", city: "Delhi", zip: 110001 }
  },
  
])
