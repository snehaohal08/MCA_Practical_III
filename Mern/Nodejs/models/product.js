const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    enum: ['electronics', 'clothing', 'food', 'other'],
    default: 'other'
  },
   inStock: {
    type: Boolean,
    default: true
  }
});
module.exports =mongoose.model('Product',productSchema)
