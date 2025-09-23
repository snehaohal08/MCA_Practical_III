const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// ==================== GET ALL PRODUCTS ====================
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    
    // Print all products in console
    console.log("All Products:", products);
    
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});


// ==================== GET PRODUCT BY ID ====================
router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

// ==================== CREATE NEW PRODUCT ====================
router.post('/', async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

// ==================== UPDATE PRODUCT ====================
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // returns updated doc & validates fields
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
});

// ==================== DELETE PRODUCT ====================
router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
