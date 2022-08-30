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

module.exports = { getAllProducts };