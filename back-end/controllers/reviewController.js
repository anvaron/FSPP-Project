const express = require("express");

const reviewController = express.Router({ mergeParams: true });

const {
  getAllReviews,
  getReviewsByProduct,
  createReview,
	updateReview,
  deleteReview
} = require("../queries/reviews");

// INDEX
reviewController.get("/", async (req, res) => {
  const { id } = req.params;
	console.log('id reviewControl:', id)
  const data = await getAllReviews(id);
  try {
    if (data[0]) {
      res.status(200).json(data);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(404).json({ sucess: false });
  }
});

// SHOW
reviewController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReviewsByProduct(id);
  console.log(review);
  if (review.received !== 0) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found review with given id" });
  }
});

//POST
reviewController.post("/", async (req, res) => {
  try {
    const review = await createReview(req.body);
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json("Error: Review cannot posted");
  }
});

// UPDATE
reviewController.put("/:id", async (req, res) => {
  const { id } = req.params;
	console.log('put:', id)
  try {
    const data = await updateReview(id, req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json("Review not found");
  }
});

// DELETE
reviewController.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await deleteReview(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: "Review not found" });
  }
});

module.exports = reviewController;