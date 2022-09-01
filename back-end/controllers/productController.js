//
const express = require("express");

const {
	getAllProducts,
	getProductById,
	updateProduct,
	createProduct,
	deleteProduct,
} = require("../queries/products");

//const { nameFormatter } = require("../validations/snacksCheck");
const productController = express();

// GET
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

// GET :id
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

// POST
productController.post("/", async (request, response) => {
	try {
		const product = await createProduct(request.body);
		response.json({
			success: true,
			payload: product,
		});
	} catch (error) {
		return error;
	}
});

// PUT
productController.put("/:id", async (request, response) => {
	try {
		const { id } = request.params;
		const product = await updateProduct(id, request.body);
		response.json({
			success: true,
			payload: product,
		});
	} catch (error) {
		return error;
	}
});

// DELETE
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