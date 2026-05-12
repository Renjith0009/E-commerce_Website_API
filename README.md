HEAD
# Order API Project (Node.js + Express + MySQL)

A simple RESTful API built using Node.js, Express.js, and MySQL to manage e-commerce orders with user and product relationships.

---

## Features

- Get all orders with full details (user + product + order info)
- Get single order by ID
- MySQL relational joins (users, products, orders, order_details)
- REST API using Express Router
- Clean MVC-style structure

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- Nodemon (development)

---

## Project Structure

order-api-project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── orderController.js
│
├── routes/
│   └── orderRoutes.js
│
├── node_modules/
│
├── server.js
├── package.json
└── README.md

---

## Installation & Setup

### 1. Clone the project
git clone <your-repo-url>
cd order-api-project

---

### 2. Install dependencies
npm install

---

### 3. Setup MySQL database

Create database and tables:

CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255),
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total_amount DECIMAL(10,2),
    payment_method VARCHAR(50),
    order_status VARCHAR(50),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_details (
    detail_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10,2)
);

---

### 4. Configure database connection

Update config/db.js:

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "ecommerce_db"
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = connection;

---

### 5. Start server

npm start

---

### 6. Server runs on

http://localhost:5000

---

## API Endpoints

### Get all orders
GET /orders

### Get order by ID
GET /orders/:id

---

## Example Response

[
  {
    "order_id": 1,
    "username": "John",
    "product_name": "Laptop",
    "quantity": 2,
    "subtotal": 1200,
    "total_amount": 1200,
    "payment_method": "COD",
    "order_status": "Placed",
    "order_date": "2026-05-12T10:00:00.000Z"
  }
]

---

## Author

Author: Ranjith R
Role: Aspiring Full Stack Developer (MERN Stack)
Location: Chennai, India

---

## Notes

- Make sure MySQL server is running
- Ensure database name is ecommerce_db
- Restart server after code changes


# E-commerce_Website_API
E-commerce Order API provides a robust foundation for managing order data efficiently, ensuring high performance, scalability, and ease of integration in real-world e-commerce applications.
 8326163fcb4472d7991bfe778c3d69dbd75fdd91
