const SalesOrder = require('../models/SalesOrder');
const Product = require('../models/product');
const axios = require('axios');
const { Op } = require('sequelize');


exports.createSalesOrder = async (req, res) => {
  try {
    const { products, ...orderData } = req.body;
    const order = await SalesOrder.create(orderData);
    
    // Attaching products to the order
    const productInstances = await Product.findAll({ where: { id: products } });
    await order.addProducts(productInstances);

    // Sending data to third-party API
    await axios.post('https://third-party-api.com/salesOrder', {
      ...order.dataValues,
      products: productInstances,
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      },
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSalesOrders = async (req, res) => {
  try {
    // Extract filter criteria from query parameters
    const { id, customerName, email, mobileNumber, status, orderDate, createdAt, updatedAt } = req.query;

    // Build the where clause dynamically based on the filters provided
    const whereClause = {};

    if (id) {
      whereClause.id = id;
    }
    if (customerName) {
      whereClause.customerName = { [Op.like]: `%${customerName}%` }; // For partial matches
    }
    if (email) {
      whereClause.email = { [Op.like]: `%${email}%` };
    }
    if (mobileNumber) {
      whereClause.mobileNumber = { [Op.like]: `%${mobileNumber}%` };
    }
    if (status) {
      whereClause.status = status;
    }
    if (orderDate) {
      whereClause.orderDate = orderDate; // Assume orderDate is in the correct format
    }
    if (createdAt) {
      whereClause.createdAt = { [Op.gte]: new Date(createdAt) }; // Filters for orders created after this date
    }
    if (updatedAt) {
      whereClause.updatedAt = { [Op.gte]: new Date(updatedAt) }; // Filters for orders updated after this date
    }

    // Fetch orders with the dynamically constructed where clause
    const orders = await SalesOrder.findAll({
      where: whereClause,
      include: Product,
    });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

