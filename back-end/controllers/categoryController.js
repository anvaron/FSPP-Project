//
const express = require("express");

const {
	getCategories,
	// getProductById,
	// updateProductById,
	// createProduct,
  // deleteProductById,
} = require("../queries/categories");

const categoryController = express();

// GET
categoryController.get("/", async (request, response) => {
	const data = await getCategories();
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
// categoryController.get("/:id", async (request, response) => {
// 	const { id } = request.params;
// 	const product = await getProductById(id);
// 	if (product.id) {
// 		response.status(200).json({
// 			success: true,
// 			payload: product,
// 		});
// 	} else {
// 		response.status(404).json({
// 			success: false,
// 			id: id,
// 			payload: `not found: no product is listed with id=${id}`,
// 		});
// 	}
// });

// // POST
// categoryController.post("/", async (request, response) => {
// 	try {
// 		const product = await createProduct(request.body);
// 		console.log(product)
// 		response.json({
// 			success: true,
// 			payload: product,
// 		});
// 	} catch (error) {
// 		return error;
// 	}
// });

// // PUT
// categoryController.put("/:id", async (request, response) => {
// 	try {
// 		const { id } = request.params;
// 		const product = await updateProductById(id, request.body);
// 		response.json({
// 			success: true,
// 			payload: product,
// 		});
// 	} catch (error) {
// 		return error;
// 	}
// });

// // DELETE
// categoryController.delete("/:id", async (request, response) => {
// 	const { id } = request.params;
// 	const product = await deleteProductById(id);
// 	if (product) {
// 		if (product.id) {
// 			response.status(200).json({
// 				success: true,
// 				payload: product,
// 			});
// 		} else {
// 			response.status(404).json({
// 				success: false,
// 				payload: product,
// 			});
// 		}
// 	} else {
// 		response.status(500).json({
// 			success: false,
// 			payload: product,
// 		});
// 	}
// });

module.exports = categoryController;