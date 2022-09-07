// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const productController = require("./controllers/productController");
const productByCatController = require("./controllers/productByCatController");
const reviewController = require("./controllers/reviewController");
const categoryController = require("./controllers/categoryController");
const userController = require("./controllers/userController");
const authController = require("./controllers/authController");


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
app.use("/category", productByCatController);
app.use("/reviews", reviewController);
app.use("/categories", categoryController);
app.use("/users", userController);
app.use("/auth/signup", authController);
//app.use("/signin", authController);

app.get("*", (request, response) => {
	response.status(404).send("Route error.");
});

// EXPORT
module.exports = app;