import { useState } from "react";
import ReviewsForm from "./ReviewsForm";
import ReactStars from "react-rating-stars-component";

export default function Review({ review, handleDelete, handleSubmit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div>
      <div className="container">
        {(viewEditForm) ? (
          <ReviewsForm
            reviewData={review}
            toggleView={toggleView}
            handleSubmit={handleSubmit}
          />
        ) : (
          <div class="w-8/12 mx-auto bg-white rounded-lg p-4 mb-6 shadow sm:inline-block relative">
            <div class="flex absolute top-2 right-2">
              <button
                type="button"
                className="px-2 py-2 text-base bg-gray-100 hover:bg-gray-200 transition ease-in duration-300" 
                onClick={() => handleDelete(review.review_id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="w-4 h-4 mx-auto object-center" fill="#333333" viewBox="0 0 24 24">
                  <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/>
                </svg>
              </button>
              <button
                type="button"
                className="px-2 py-2 text-base bg-gray-100 hover:bg-gray-200 transition ease-in duration-300" 
                onClick={toggleView}
              >
                {!viewEditForm 
                ? 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-auto object-center" fill="#333333" viewBox="0 0 24 24"><path d="M18.31 2.828l2.862 2.862-15.032 15.032-3.583.722.723-3.585 15.03-15.031zm0-2.828l-16.872 16.872-1.438 7.128 7.127-1.437 16.873-16.874-5.69-5.689zm-.021 5.004l-12.728 12.728.707.708 12.728-12.728-.707-.708z"/></svg>
                :
                null
                }
              </button>
            </div>
            <div class="flex items-start text-left">
              <div class="flex-shrink-0">
                <div class="inline-block relative">
                  <a href="#" class="block relative">
                    <img alt="profil" src="https://images.generated.photos/vXh97jjk8eIrd8d8t4Ei-SPSrQ7tVnh5uX0xc2iiQBw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTk3MDQzLmpwZw.jpg" class="mx-auto object-cover rounded-full h-16 w-16 "/>
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                    <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="w-full ml-6">
                <p class="flex items-baseline">
                  <span class="text-gray-600  font-bold">
                  {review.username}
                  </span>
                  <span class="text-gray-500 ml-2 text-sm">
                    2 months ago
                  </span>
                </p>
                <div class="flex items-center mt-1">
                <ReactStars
                  count={review.rating}
                  edit={false}
                  // onChange={ratingChanged}
                  size={16}
                  activeColor='#63b3ed'
                />
                </div>
                <div class="mt-3">
                  <p class="mt-1 max-w-xs ">
                    {review.content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          
            /* <Rating
              name="read-only"
              value={Number(review.rating)}
              readOnly
              size="small"
            /> */
        )}
      </div>
      {/* <Box marginTop={2} marginBottom={2}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button onClick={toggleView}>
            {viewEditForm ? "Nevermind" : "Edit"}
          </Button>
          <Button onClick={() => handleDelete(review.review_id)}>Delete</Button>
        </ButtonGroup>
        <hr />
      </Box> */}
    </div>
  );
}