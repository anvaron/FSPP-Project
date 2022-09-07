const db = require("../db/dbConfig.js");

//GET all products
// const getAllProducts = async () => {
// 	try {
// 		const query = await db.any(`
// 			SELECT products.product_id as id, products.name, products.price, products.description, products.product_tags, product_category.name AS category, products.image_url, products.in_stock
// 			FROM products
// 			INNER JOIN product_category 
//       ON product_category.category_id = products.category_id
// 			ORDER BY product_id DESC`
// 			);
// 		return query;
// 	} catch (error) {
// 		return error;
// 	}
// };

//GET products by category
const getProductsByCategory = async (id) => {
	//console.log(category)
	try {
		const query = await db.any(`
			SELECT products.product_id as id, products.name, products.price, products.description, products.product_tags, product_category.name AS category, products.image_url, products.in_stock
			FROM products
			INNER JOIN product_category 
      ON product_category.category_id = products.category_id
			WHERE products.category_id=$1`, id
			);
			console.log(query)
		return query;
	} catch (error) {
		return error;
	}
};

//GET one product by :id
// const getProductById = async (id) => {
// 	try {
// 		const query = await db.one(`
//       SELECT products.product_id as id, products.name, products.price, products.description, products.product_tags, product_category.name AS category, products.image_url, products.in_stock  
//       FROM products 
//       INNER JOIN product_category 
//       ON product_category.category_id = products.category_id
//       WHERE products.product_id=$1`, id
//     );
// 		//console.log(query)
// 		return query;
// 	} catch (error) {
// 		return error;
// 	}
// };




module.exports = { 
	
	getProductsByCategory
};