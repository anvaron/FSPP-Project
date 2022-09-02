// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");

// CONFIGURATION
const app = express();
app.use(express.json());
app.use(cors());

// MIDDLEWARE

// ROUTES
app.get("/", async (request, response) => {
	response.send("Ecommerce Store");
});

app.use("/products", productController);
app.use("/users", userController);

app.get("*", (request, response) => {
	response.status(404).send("Route error.");
});

// EXPORT
module.exports = app;