const db = require("../db/dbConfig.js");

//GET all reviews
const getReviews = async () => {
	try {
		const query = await db.any(`
			SELECT users.username, content, rating 
			FROM product_reviews
			INNER JOIN users 
      ON product_reviews.user_id = users.user_id
			ORDER BY id DESC`
		);
		return query;
	} catch (error) {
		return error;
	}
};

//GET reviews by product
const getReviewsByProduct = async (id) => {
	try {
		const query = await db.any(`
			SELECT users.username, content, rating 
			FROM product_reviews
			INNER JOIN users 
			ON product_reviews.user_id = users.user_id
			WHERE product_reviews.product_id=$1`, id
    );
		//console.log(query)
		return query;
	} catch (error) {
		return error;
	}
};

// CREATE: one product
const createReview = async (review) => {
	try {
		const { user_id, content, rating, product_id } = review;
		const query = await db.one(`
			INSERT INTO product_reviews (
        user_id, content, rating, product_id
      ) 
      VALUES (
        $1, $2, $3, $4
      ) 
      RETURNING *`,
			[user_id, content, rating, product_id]
		);
    return query;
	} catch (error) {
		return error;
	}
};

// UPDATE: one product by :id
const updateProductById = async (id, product) => {
	const { name, price, description, category_id, image_url, in_stock, product_tags } = product;
	
  try {
		const query = await db.one(`
			UPDATE products
      SET name=$1, price=$2, description=$3, category_id=$4, image_url=$5, in_stock=$6, product_tags=$7
      WHERE product_id=$8
      RETURNING *`,
			[name, price, description, category_id, image_url, in_stock, product_tags, id]
		);
		console.log(query)
    return query;
	} catch (error) {
		return error;
	}
};

//DELETE one product by :id
const deleteReview = async (id) => {
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
	getReviews, 
	getReviewsByProduct,
	// getProductsByCategory, 
	// updateProductById, 
	createReview, 
	// deleteProductById 
};