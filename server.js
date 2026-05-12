const express = require("express");
const app = express();

const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());

console.log("Mounting order routes...");

// Routes
app.use("/", orderRoutes);

// TEST ROOT
app.get("/", (req, res) => {
    res.send("Server is working");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});