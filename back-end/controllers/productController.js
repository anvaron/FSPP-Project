//
const express = require("express");

const {
	getAllProducts,
	getProductById,
	// updateSnack,
	// createSnack,
	// deleteSnack,
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
	const data = await getProductById(id);
  console.log(data)
	if (data.id) {
		response.status(200).json({
			success: true,
			payload: data,
		});
	} else {
		response.status(404).json({
			success: false,
			id: id,
			payload: `not found: no product is listed at id ${id}`,
		});
	}
});

// snackController.delete("/:id", async (request, response) => {
// 	const { id } = request.params;
// 	const deletedSnack = await deleteSnack(id);
// 	if (deletedSnack) {
// 		if (deletedSnack.id) {
// 			response.status(200).json({
// 				success: true,
// 				payload: deletedSnack,
// 			});
// 		} else {
// 			response.status(404).json({
// 				success: false,
// 				payload: deletedSnack,
// 			});
// 		}
// 	} else {
// 		response.status(500).json({
// 			success: false,
// 			payload: deletedSnack,
// 		});
// 	}
// });

// snackController.post("/", async (request, response) => {
// 	try {
// 		const obj = request.body;
// 		let { name } = obj;
// 		// console.log(name);
// 		// name = nameFormatter(name); //wtf
// 		// if (!obj.image) {
// 		// 	obj.image = `https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image`;
// 		// }
// 		const snack = await createSnack(obj);
// 		response.json({
// 			success: true,
// 			payload: snack,
// 		});
// 	} catch (error) {
// 		return error;
// 	}
// });

// snackController.post("/",  async (req, res) => {
// 	const newSnack = req.body;

// 	try {
// 		const postedSnack = await createSnack(newSnack);
// 		//use postedSnack[0] because postNewSnack will return an array and
// 		//the postedSnack[0] is the snack added into the database
// 		res.status(200).json({ success: true, payload: postedSnack[0] });
// 	} catch (error) {
// 		console.log(error);
// 		res.status(404).json({ success: false });
// 	}
// });

module.exports = productController;