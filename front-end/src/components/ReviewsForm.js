import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

export default function ReviewsForm(props) {
  let { id } = useParams();
  const { reviewData } = props;

  const [review, setReview] = useState({
    user_id: 1,
    content: "",
    rating: "",
    product_id: id,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewData) {
      setReview(reviewData);
    }
  }, [id, reviewData, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    // Validating review
    if (reviewData) {
      props.toggleView();
    }
    setReview({
      username: "",
      content: "",
      rating: "",
      product_id: id,
    });
  };

  return (
    <Fragment>
      <form class="flex w-full space-x-3">
        <div class="w-full max-w-2xl px-5 py-5 m-auto mt-0 bg-white border rounded-lg shadow ">
          <div class="px-0 pb-6 text-xl font-bold text-left text-gray-800">
            Post a review
          </div>
          <div class="grid  grid-cols-2 gap-4 m-auto">
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input 
                  type="text" 
                  id="username" 
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                  placeholder="Name"
                  value={review.username}
                  onChange={handleTextChange}
                  required
                />
              </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                  <input 
                    type="number" 
                    id="rating"
                    min="1"
                    max="5"
                    step="1"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                    placeholder="rating"
                    value={review.rating}
                    onChange={handleTextChange}
                    required
                  />
                </div>
            </div>
            <div class="col-span-2">
              <label class="text-gray-700" for="content">
              <textarea 
                id="content" 
                name="content" 
                rows="3" cols="40"
                placeholder="Enter your review"
                class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                value={review.content}
                onChange={handleTextChange}
                required
              >
              </textarea>
              </label>
            </div>
            <div class="col-span-2 text-right">
              <button 
                type="submit" 
                class="mx-auto py-4 px-4 bg-blue-800 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 items-center text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={(e) => handleSubmit(e)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-auto object-center" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>  
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}