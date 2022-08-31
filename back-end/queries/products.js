const db = require("../db/dbConfig.js");

//GET all products
const getAllProducts = async () => {
	try {
		const query = await db.any("SELECT * FROM products");
		return query;
	} catch (error) {
		return error;
	}
};

//GET one product by :id
const getProductById = async (id) => {
	try {
		const query = await db.one(`
      SELECT products.product_id as id, products.name, products.price, products.description, product_category.label, products.image_url, products.in_stock  
      FROM products 
      INNER JOIN product_category 
      ON product_category.category_id = products.category_id
      WHERE products.product_id=$1`, id);
		return query;
	} catch (error) {
		return error;
	}
};

module.exports = { getAllProducts, getProductById };