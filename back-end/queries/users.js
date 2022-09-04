const db = require("../db/dbConfig.js");

//GET all Users
const getAllUsers = async () => {
	try {
		const query = await db.any(`
			SELECT user_id AS id, username, password, fullname, email 
			FROM users`
		);
		return query;
	} catch (error) {
		return error;
	}
};

//GET one user by :id
const getUserById = async (id) => {
	try {
		const query = await db.one(`
      SELECT user_id as id, username, password, fullname, email  
      FROM users
      WHERE user_id=$1`, id
    );
		return query;
	} catch (error) {
		return error;
	}
};

// // CREATE: one product
// const createProduct = async (product) => {
// 	try {
// 		const { name, price, description, category_id, image_url, in_stock } = product;
// 		const query = await db.one(`
// 			INSERT INTO products (
//         name, price, description, category_id, image_url, in_stock
//       ) 
//       VALUES (
//         $1, $2, $3, $4, $5, $6
//       ) 
//       RETURNING *`,
// 			[name, price, description, category_id, image_url, in_stock]
// 		);
//     return query;
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
	getAllUsers, 
	getUserById, 
	// updateProduct, 
	// createProduct, 
	// deleteProduct 
};