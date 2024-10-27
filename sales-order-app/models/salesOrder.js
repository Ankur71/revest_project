// models/salesOrder.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product");

const SalesOrder = sequelize.define("SalesOrder", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  customerName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  mobileNumber: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  orderDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

SalesOrder.belongsToMany(Product, { through: "SalesOrderProducts" });
Product.belongsToMany(SalesOrder, { through: "SalesOrderProducts" });

module.exports = SalesOrder;
