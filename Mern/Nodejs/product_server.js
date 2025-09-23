const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/product_Routes"); // check the exact name!

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/product", productRoutes);

mongoose
  .connect(process.env.MONGO_URI2)
  .then(() => {
    console.log("mongodb connected successfully...");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed:", err);
  });
