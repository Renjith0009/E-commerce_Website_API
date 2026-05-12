    const db = require("../config/db");


// GET ALL ORDERS
const getAllOrders = (req, res) => {

    const query = `
        SELECT
            orders.order_id,
            users.username,
            products.product_name,
            order_details.quantity,
            order_details.subtotal,
            orders.total_amount,
            orders.payment_method,
            orders.order_status,
            orders.order_date
        FROM order_details
        JOIN orders
            ON order_details.order_id = orders.order_id
        JOIN users
            ON orders.user_id = users.user_id
        JOIN products
            ON order_details.product_id = products.product_id
    `;

    db.query(query, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error fetching orders",
                error: err
            });
        }

        res.status(200).json(result);
    });
};



// GET ORDER BY ID
const getOrderById = (req, res) => {

    const orderId = req.params.id;

    const query = `
        SELECT
            orders.order_id,
            users.username,
            products.product_name,
            order_details.quantity,
            order_details.subtotal,
            orders.total_amount,
            orders.payment_method,
            orders.order_status,
            orders.order_date
        FROM order_details
        JOIN orders
            ON order_details.order_id = orders.order_id
        JOIN users
            ON orders.user_id = users.user_id
        JOIN products
            ON order_details.product_id = products.product_id
        WHERE orders.order_id = ?
    `;

    db.query(query, [orderId], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Error fetching order",
                error: err
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(result);
    });
};


module.exports = {
    getAllOrders,
    getOrderById
};