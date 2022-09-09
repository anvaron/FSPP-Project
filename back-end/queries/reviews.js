const db = require("../db/dbConfig.js");

//GET all reviews
const getAllReviews = async (id) => {
	try {
		const query = await db.any(`
			SELECT username, content, rating, date
			FROM product_reviews
			WHERE product_id=$1`, id
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
		const { username, content, rating, product_id } = review;
		const query = await db.one(`
			INSERT INTO product_reviews ( username, content, rating, product_id ) 
      VALUES ( $1, $2, $3, $4 ) 
      RETURNING *`,
			[username, content, rating, product_id]
		);
    return query;
	} catch (error) {
		return error;
	}
};

// UPDATE: review by :id
const updateReview = async (id, review) => {
	console.log('id=', id)
	console.log(id, review)
  try {
    const query = await db.one(`
      UPDATE product_reviews 
			SET username=$1, content=$2, rating=$3, product_id=$4 
			WHERE review_id=$5
			RETURNING *`,
      [review.username, review.content, review.rating, review.product_id, id]
    );
		console.log(query)
    return query;
  } catch (error) {
		console.log(error)
    return error;
  }
};

//DELETE review by :id
const deleteReview = async (id) => {
	try {
		const query = await db.one(`
      DELETE FROM product_reviews WHERE review_id=$1 
      RETURNING *`, id
    );
		return query;
	} catch (error) {
		return error;
	}
};

module.exports = { 
	getAllReviews, 
	getReviewsByProduct,
	createReview,
	updateReview,
	deleteReview
};