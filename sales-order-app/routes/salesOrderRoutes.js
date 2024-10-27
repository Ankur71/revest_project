const express = require('express');
const { createSalesOrder, getSalesOrders } = require('../controllers/salesOrderController');
const router = express.Router();

router.post('/', createSalesOrder);
router.get('/', getSalesOrders);

module.exports = router;
