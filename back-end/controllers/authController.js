//
const express = require("express");

const {
	registerUser,
	//loginUser,
	//getUserById,
	// updateProduct,
	// createProduct,
	// deleteProduct,
} = require("../queries/auth");

//const { nameFormatter } = require("../validations/snacksCheck");
const authController = express();

// POST
authController.post("/signup", async (request, response) => {
	try {
		const user = await registerUser(request.body);
		response.json({
			success: true,
			payload: user,
		});
	} catch (error) {
		return error;
	}
});

// POST
authController.post("/signin", async (request, response) => {
	try {
		const user = await loginUser(request.body);
		console.log(user)
		// response.json({
		// 	success: true,
		// 	payload: user,
		// });
	} catch (error) {
		return error;
	}
});

// GET :id
// authController.get("/:id", async (request, response) => {
// 	const { id } = request.params;
// 	const data = await getUserById(id);
// 	if (product.id) {
// 		response.status(200).json({
// 			success: true,
// 			payload: data,
// 		});
// 	} else {
// 		response.status(404).json({
// 			success: false,
// 			id: id,
// 			payload: `not found: no user is listed with id=${id}`,
// 		});
// 	}
// });



// GET
// userController.get("/", async (request, response) => {
// 	const data = await getAllUsers();
// 	if (data[0]) {
// 	// 	response.status(200).json(
// 			response.set('Access-Control-Expose-Headers', 'X-Total-Count'),
// 			response.set('Content-Range', `users 0-10/${data.length}`);
// 			response.set('Access-Control-Expose-Headers', 'Content-Range');
//       response.set('X-Total-Count', data.length),
//       response.status(200).json(data)
// 			//data
// 		//{
// 			// success: true,
// 			// payload: data,
// 		//}
// 		// );
// 	} else {
// 		response.status(500).json();
// 	}
// });

// GET :id
// userController.get("/:id", async (request, response) => {
// 	const { id } = request.params;
// 	const data = await getUserById(id);
// 	if (product.id) {
// 		response.status(200).json({
// 			success: true,
// 			payload: data,
// 		});
// 	} else {
// 		response.status(404).json({
// 			success: false,
// 			id: id,
// 			payload: `not found: no user is listed with id=${id}`,
// 		});
// 	}
// });


// // PUT
// productController.put("/:id", async (request, response) => {
// 	try {
// 		const { id } = request.params;
// 		const product = await updateProduct(id, request.body);
// 		response.json({
// 			success: true,
// 			payload: product,
// 		});
// 	} catch (error) {
// 		return error;
// 	}
// });

// // DELETE
// productController.delete("/:id", async (request, response) => {
// 	const { id } = request.params;
// 	const product = await deleteProduct(id);
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

module.exports = authController;