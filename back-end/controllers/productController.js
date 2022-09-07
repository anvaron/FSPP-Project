//
const express = require("express");

const {
	getAllProducts,
	getProductById,
	getProductsByCategory,
	updateProductById,
	createProduct,
  deleteProductById,
} = require("../queries/products");

//const { nameFormatter } = require("../validations/snacksCheck");
const productController = express();

// GET All products
productController.get("/", async (request, response) => {
	console.log('get')
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

// GET products by category
productController.get("/", async (request, response) => {
	//const { cat } = request.params;
	console.log(request.params)
	const data = await getProductsByCategory();
	if (data[0]) {
		response.status(200).json({
			success: true,
			payload: data,
		});
	} else {
		response.status(500).json();
	}
});

// GET products by id
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

// POST create entry
productController.post("/", async (request, response) => {
	try {
		const product = await createProduct(request.body);
		console.log(product)
		response.json({
			success: true,
			payload: product,
		});
	} catch (error) {
		return error;
	}
});

// PUT update entry
productController.put("/:id", async (request, response) => {
	try {
		const { id } = request.params;
		console.log(id)
		console.log(request.body)
		const product = await updateProductById(id, request.body);
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
	const product = await deleteProductById(id);
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