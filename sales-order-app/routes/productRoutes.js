// routes/productRoutes.js
const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");

const router = express.Router();
router.post("/", createProduct); // Internal & External Product Creation
router.get("/", getAllProducts); // Get All Products

module.exports = router;
