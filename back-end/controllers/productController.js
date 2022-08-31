//
const express = require("express");

const {
	getAllProducts,
	getProductById,
	// updateSnack,
	// createSnack,
	deleteProduct,
} = require("../queries/products");

//const { nameFormatter } = require("../validations/snacksCheck");
const productController = express();

productController.get("/", async (request, response) => {
	const data = await getAllProducts();
	if (data[0]) {
		response.status(200).json({
			success: true,
			payload: data,
		});
	} else {
		response.status(500).json();
	}
});

productController.get("/:id", async (request, response) => {
	const { id } = request.params;
	const product = await getProductById(id);
	if (product.id) {
		response.status(200).json({
			success: true,
			payload: product,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `not found: no product is listed with id=${id}`,
		});
	}
});

productController.delete("/:id", async (request, response) => {
	const { id } = request.params;
	const product = await deleteProduct(id);
	if (product) {
		if (product.id) {
			response.status(200).json({
				success: true,
				payload: product,
			});
		} else {
			response.status(404).json({
				success: false,
				payload: product,
			});
		}
	} else {
		response.status(500).json({
			success: false,
			payload: product,
		});
	}
});



module.exports = productController;