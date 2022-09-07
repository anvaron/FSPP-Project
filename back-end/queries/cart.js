const db = require("../db/dbConfig.js");

//GET all products
const getCart = async () => {
	try {
		const query = await db.any(`
			SELECT products.product_id as id, products.name, products.price, products.description, products.product_tags, product_category.label AS category, products.image_url, products.in_stock
			FROM products
			INNER JOIN product_category 
      ON product_category.category_id = products.category_id`
			);
		return query;
	} catch (error) {
		return error;
	}
};



// CREATE: one product
const createProduct = async (product) => {
	try {
		const { name, price, description, category_id, image_url, in_stock } = product;
		const query = await db.one(`
			INSERT INTO products (
        name, price, description, category_id, image_url, in_stock
      ) 
      VALUES (
        $1, $2, $3, $4, $5, $6
      ) 
      RETURNING *`,
			[name, price, description, category_id, image_url, in_stock]
		);
    return query;
	} catch (error) {
		return error;
	}
};

// UPDATE: one product by :id
const updateProductById = async (id, product) => {
	const { name, price, description, category_id, image_url, in_stock } = product;
	
  try {
		const query = await db.one(`
			UPDATE products
      SET name=$1, price=$2, description=$3, category_id=$4, image_url=$5, in_stock=$6
      WHERE product_id=$7 
      RETURNING *`,
			[name, price, description, category_id, image_url, in_stock, id]
		);
    return query;
	} catch (error) {
		return error;
	}
};

//DELETE one product by :id
const deleteProductById = async (id) => {
	try {
		return await db.one(`
      DELETE FROM products WHERE products.product_id=$1 
      RETURNING *`, id
    );
	} catch (error) {
		return error;
	}
};

module.exports = { 
	getAllProducts, 
	getProductById, 
	updateProductById, 
	createProduct, 
	deleteProductById 
};