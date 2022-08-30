// // DEPENDENCIES
// const cors = require("cors");
// const express = require("express");

// // CONFIGURATION
// const app = express();

// // MIDDLEWARE
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON

// // ROUTES
// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// /////////////////////////////////////
// // REMOVE AFTER SUCCESSFUL DEPLOYMENT
// /////////////////////////////////////
// const db = require("./db/dbConfig.js");

// app.get("/test", async (req, res) => {
//   try {
//     const allDays = await db.any("SELECT * FROM test");
//     res.json(allDays);
//   } catch (err) {
//     res.json(err);
//   }
// });

// /////////////////////////////////////
// // REMOVE AFTER SUCCESSFUL DEPLOYMENT
// /////////////////////////////////////

// // EXPORT
// module.exports = app;

// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const productController = require("./controllers/productController");

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
app.get("*", (request, response) => {
	response.status(404).send("Route error.");
});

// EXPORT
module.exports = app;