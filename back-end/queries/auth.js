const db = require("../db/dbConfig.js");

// // CREATE: one user
const registerUser = async (user) => {
	try {
		const { email, password, username } = user;
		const query = await db.one(`
			INSERT INTO users (
        email, password, username
      ) 
      VALUES (
        $1, $2, $3
      ) 
      RETURNING *`,
			[email, password, username]
		);
    return query;
	} catch (error) {
		return error;
	}
};




//GET all Users
// const getAllUsers = async () => {
// 	try {
// 		const query = await db.any(`
// 			SELECT user_id AS id, username, password, fullname, email 
// 			FROM users`
// 		);
// 		return query;
// 	} catch (error) {
// 		return error;
// 	}
// };




// // UPDATE: one product by :id
// const updateProduct = async (id, product) => {
// 	const { name, price, description, category_id, image_url, in_stock } = product;
	
//   try {
// 		const query = await db.one(`
// 			UPDATE products
//       SET name=$1, price=$2, description=$3, category_id=$4, image_url=$5, in_stock=$6
//       WHERE product_id=$7 
//       RETURNING *`,
// 			[name, price, description, category_id, image_url, in_stock, id]
// 		);
//     return query;
// 	} catch (error) {
// 		return error;
// 	}
// };

// //DELETE one product by :id
// const deleteProduct = async (id) => {
// 	try {
// 		return await db.one(`
//       DELETE FROM products WHERE products.product_id=$1 
//       RETURNING *`, id
//     );
// 	} catch (error) {
// 		return error;
// 	}
// };

module.exports = { 
	registerUser, 
	//loginUser, 
	//getUserById, 
	// updateProduct, 
	// createProduct, 
	// deleteProduct 
};