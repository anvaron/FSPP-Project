//
const express = require("express");

const {
	getReviews,
	getReviewsByProduct,
	createReview,
  
} = require("../queries/reviews");

//const { nameFormatter } = require("../validations/snacksCheck");
const reviewController = express();

// GET All products
reviewController.get("/", async (request, response) => {
	const data = await getReviews();
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
reviewController.get("/:id", async (request, response) => {
	const { id } = request.params;
	const data = await getReviewsByProduct(id);
	console.log(data);
	if (data[0]) {
		response.status(200).json({
			success: true,
			payload: data,
		});
	} else {
		response.status(500).json();
	}
	// if (review.id) {
	// 	response.status(200).json({
	// 		success: true,
	// 		payload: review,
	// 	});
	// } else {
	// 	response.status(404).json({
	// 		success: false,
	// 		id: id,
	// 		payload: `not found: no reviews are listed with product id=${id}`,
	// 	});
	// }
});

// POST create entry
reviewController.post("/", async (request, response) => {
	try {
		const data = await createReview(request.body);
		//console.log(data)
		response.json({
			success: true,
			payload: data,
		});
	} catch (error) {
		return error;
	}
});

// PUT update entry
// productController.put("/:id", async (request, response) => {
// 	try {
// 		const { id } = request.params;
// 		console.log(id)
// 		console.log(request.body)
// 		const product = await updateProductById(id, request.body);
// 		response.json({
// 			success: true,
// 			payload: product,
// 		});
// 	} catch (error) {
// 		return error;
// 	}
// });

// DELETE
// productController.delete("/:id", async (request, response) => {
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

module.exports = reviewController;