//
const express = require("express");

const {
	getProductsByCategory,
	// updateProductById,
	// createProduct,
  // deleteProductById,
} = require("../queries/productsByCategory");

//const { nameFormatter } = require("../validations/snacksCheck");
const productByCatController = express();

// GET products by category
productByCatController.get("/", async (request, response) => {
	//const { cat } = request.params;
	console.log('/', request.params)
	// const data = await getProductsByCategory();
	// if (data[0]) {
	// 	response.status(200).json({
	// 		success: true,
	// 		payload: data,
	// 	});
	// } else {
	// 	response.status(500).json();
	// }
});

// GET products by id
productByCatController.get("/:id", async (request, response) => {
	const { id } = request.params;
	console.log('productByCat')
	console.log(request.params)
	const data = await getProductsByCategory(id);

	if (data[0]) {
		response.status(200).json({
			success: true,
			payload: data,
		});
	} else {
		response.status(500).json();
	}
});



module.exports = productByCatController;