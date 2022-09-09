const db = require("../db/dbConfig.js");

//GET all products
const getAllProducts = async (category) => {
	let WHERE = '';
	(category) 
	?
		WHERE = `WHERE products.category_id=${category}`
	:
		null;

	try {
		const query = await db.any(`
			SELECT products.product_id as id, products.name, products.price, products.description, products.product_tags, product_category.name AS category, products.image_url, products.in_stock
			FROM products
			INNER JOIN product_category 
      ON product_category.category_id = products.category_id
			${WHERE}
			ORDER BY product_id DESC`
		);
		console.log(query)
		return query;
		
	} catch (error) {
		console.log('select*:', error.message || error)
		return error;
	}
};

//GET products by category
const getProductsByCategory = async (category) => {
	try {
		const query = await db.any(`
			SELECT products.product_id as id, products.name, products.price, products.description, products.condition, products.product_tags, product_category.name AS category, products.image_url, products.in_stock
			FROM products
			INNER JOIN product_category 
      ON product_category.category_id = products.category_id
			WHERE products.category_id=$1`, category
		);
		return query;
	} catch (error) {
		console.log('selectxCat:', error.message || error)
		return error;
	}
};

//GET one product by :id
const getProductById = async (id) => {
	try {
		const query = await db.one(`
      SELECT products.product_id as id, products.name, products.price, products.description, products.condition, products.product_tags, products.category_id, product_category.name AS category, products.image_url, products.in_stock  
      FROM products 
      INNER JOIN product_category 
      ON product_category.category_id = products.category_id
      WHERE products.product_id=$1`, id
    );
		//console.log(query)
		return query;
	} catch (error) {
		console.log('selectxId:', error.message || error)
		return error;
	}
};

// CREATE: one product
const createProduct = async (product) => {
	try {
		const { name, price, description, condition, category_id, image_url, in_stock, product_tags } = product;
		const query = await db.one(`
			INSERT INTO products (
        name, price, description, condition, category_id, image_url, in_stock, product_tags
      ) 
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8
      ) 
      RETURNING *`,
			[name, price, description, condition, category_id, image_url, in_stock, product_tags]
		);
    return query;
	} catch (error) {
		console.log('insert:', error.message || error)
		return error;
	}
};

// UPDATE: one product by :id
const updateProductById = async (id, product) => {
	const { name, price, description, condition, category_id, image_url, in_stock, product_tags } = product;
	
  try {
		const query = await db.one(`
			UPDATE products
      SET name=$1, price=$2, description=$3, condition=$4, category_id=$5, image_url=$6, in_stock=$7, product_tags=$8
      WHERE product_id=$9
      RETURNING *`,
			[name, price, description, condition, category_id, image_url, in_stock, product_tags, id]
		);
		console.log(query)
    return query;
	} catch (error) {
		console.log('update:', error.message || error)
		return error;
	}
};

//DELETE one product by :id
const deleteProduct = async (id) => {
	try {
		const query = await db.one(`
      DELETE FROM products WHERE products.product_id=$1 
      RETURNING *`, id
    );
		return query;
		console.log(query)
	} catch (error) {
		console.log('delete:', error.message || error)
		return error;
	}
};

module.exports = { 
	getAllProducts, 
	getProductById,
	getProductsByCategory, 
	updateProductById, 
	createProduct, 
	deleteProduct 
};