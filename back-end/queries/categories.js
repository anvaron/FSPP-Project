const db = require("../db/dbConfig.js");

//GET all Categories
const getCategories = async () => {
	try {
		const query = await db.any(`
			SELECT category_id as id, name, description, icon, image
			FROM product_category`
			);
		return query;
	} catch (error) {
		console.log('select*:', error.message || error)
		return error;
	}
};

//GET category by :id
const getCategoryById = async (id) => {
	try {
		const query = await db.one(`
      SELECT category_id as id, name, description, icon, image
      FROM product_category 
      WHERE category_id=$1`, id
    );
		return query;
	} catch (error) {
		console.log('selectxId:', error.message || error)
		return error;
	}
};

// // CREATE: create category
const createCategory = async (category) => {
	try {
		const { name, description, icon, image } = category;
		const query = await db.one(`
			INSERT INTO product_category (
        name, description, icon, image
      ) 
      VALUES (
        $1, $2, $3, $4
      ) 
      RETURNING *`,
			[name, description, icon, image]
		);
    return query;
	} catch (error) {
		console.log('insert:', error.message || error)
		return error;
	}
};

// // UPDATE: one product by :id
const updateCategory = async (id, category) => {
	const { name, description, icon, image } = category;
	
  try {
		const query = await db.one(`
			UPDATE product_category
      SET name=$1, description=$2, icon=$3, image=$4
      WHERE category_id=$5
      RETURNING *`,
			[name, description, icon, image, id]
		);
    return query;
	} catch (error) {
		console.log('update:', error.message || error)
		return error;
	}
};

// DELETE: category :id
// CONSTRAINT Products by Category!!
const deleteCategory = async (id) => {
	try {
		return await db.one(`
      DELETE FROM product_category WHERE category_id=$1 
      RETURNING *`, id
    );
	} catch (error) {
		console.log('delete:', error.message || error)
		return error;
	}
};

module.exports = { 
	getCategories,
	createCategory,
	updateCategory,
	deleteCategory
};