//
const express = require("express");
// const { default: Category } = require("../../front-end/src/components/Category");

const {
	getAllProducts,
	getProductById,
	getProductsByCategory,
	updateProductById,
	createProduct,
  deleteProduct,
} = require("../queries/products");

//const { nameFormatter } = require("../validations/snacksCheck");
const productController = express();

// GET: All products
productController.get("/", async (request, response) => {
	const category  = request.query.category;
	// console.log('productsxCategory:', request.params)
	console.log('productsxCategory:', category)
	const data = await getAllProducts(category);
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
// productController.get("/:categoryId", async (request, response) => {
// 	const { categoryId } = request.params;
// 	console.log('category', categoryId)
// 	//const { cat } = request.params;
// 	//console.log(request.params)
// 	const data = await getAllProducts();
// 	if (data[0]) {
// 		response.status(200).json({
// 			success: true,
// 			payload: data,
// 		});
// 	} else {
// 		response.status(500).json();
// 	}
// });

// GET: product by id
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

// POST: create product
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

// PUT: update product
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

productController.delete('/:id', async (request, response) => {
  const { id } = request.params
  const product = await deleteProduct(id)
  if (product.id) {
    response.status(200).json({ success: true, payload: product })
  } else {
    response.status(404).json({ success: false, payload: id })
  }
})

module.exports = productController;