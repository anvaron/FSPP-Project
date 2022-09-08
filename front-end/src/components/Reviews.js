import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewsForm from "./ReviewsForm";

const API = process.env.REACT_APP_API_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();
  console.log('reviews==', id)

  useEffect(() => {
    axios.get(`${API}/products/${id}/reviews`).then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  }, [id]);

  const handleAdd = (review) => {
    axios
      .post(`${API}/products/${id}/reviews`, review)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/products/${id}/reviews/${id}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.review_id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedReview) => {
    console.log(updatedReview)
    axios
      .put(
        `${API}/products/${id}/reviews/${updatedReview.review_id}`,
        updatedReview
      )
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.review_id === updatedReview.review_id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
      <div className="lg:col-start-2 md:pl-20">
        <ReviewsForm handleSubmit={handleAdd} />
      </div>
      <div className="mt-0 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
        {(reviews)
        ? 
          <h2 className="mb-4 font-bold text-black sm:text-2xl text-xl">
            Product reviews
          </h2>
        : null}

        {(reviews)
        ?
          reviews.map((review, index) => (
            <Review
              key={index}
              review={review}
              handleSubmit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        : null} 
      </div>     
    </div>
  );
}