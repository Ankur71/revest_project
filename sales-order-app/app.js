const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");
const salesOrderRoutes = require("./routes/salesOrderRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/sales-orders", salesOrderRoutes);

const PORT = process.env.NODE_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
