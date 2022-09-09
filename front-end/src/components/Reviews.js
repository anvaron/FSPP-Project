import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewsForm from "./ReviewsForm";

const API = process.env.REACT_APP_API_URL;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  let { id } = useParams();
  console.log('useParams=', useParams())

  useEffect(() => {
    axios.get(`${API}/products/${id}/reviews`).then((response) => {
      //console.log(response.data);
      setReviews(response.data);
    });
  }, [id]);

  const handleCreate = (review) => {
    axios
      .post(`${API}/products/${id}/reviews`, review)
      .then(
        (response) => {
          console.log(response)
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  
  const handleDelete = (review_id) => {
    axios
      .delete(`${API}/products/${id}/reviews/${review_id}`)
      .then((response) => {
        console.log(response)
        
      })
      .catch((c) => console.warn('catch', c))
  }

  const handleEdit = (review) => {
    console.log(review)
    axios
      .put(
        `${API}/products/${id}/reviews/${review.review_id}`, review
      )
      .then((response) => {
        console.log(response)
        
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <>
    <div className="flex">
      <h2 className="mb-4 font-bold text-black sm:text-2xl text-xl text-left">
        Product reviews 
        <span className="px-4 py-2 mx-2 text-sm font-bold rounded-full text-white bg-teal-400 ">
          ( {reviews.length} ) Reviews
        </span>
      </h2>
    </div>
      
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
      <div className="lg:col-start-2 md:pl-20">
        <ReviewsForm handleSubmit={handleCreate} />
      </div>
      <div className="mt-0 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
        
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
    </>
  );
}