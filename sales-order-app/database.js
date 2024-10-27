const sequelize = require("./config/database");
const Product = require("./models/product");
const SalesOrder = require("./models/salesOrder");

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});
