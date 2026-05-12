const express = require("express");

const router = express.Router();

const {
    getAllOrders,
    getOrderById
} = require("../controllers/orderController");


// GET ALL ORDERS
router.get("/orders", getAllOrders);


// GET ORDER BY ID
router.get("/orders/:id", getOrderById);


module.exports = router;