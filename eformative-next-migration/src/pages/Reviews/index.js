import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Reviews.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Reviews = () => {
  const [reviews, setReview] = useState();
  let navigate = useNavigate();

  const postReview = () => {
    let postPath = `/post-reviews`;
    navigate(postPath);
  };

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((reviews) => setReview(reviews));
  });

  return (
    <>
      <div className='hero-section reviews-container'>
        <h1 className='reviews-page-header'>Reviews</h1>
       <SearchBar/>
            <button
              className='clear-btn-green-border post-a-review-button'
              onClick={postReview}>
              Post A Review
            </button>
        {reviews?.map((review, userReview) => (
          <div key={userReview} className='reviews-item'>
            <h1 className='reviews-header'>
              Reviewer: {review.reviewerName}, Seller: {review.sellerName},
              Product: {review.productName}
            </h1>{" "}
            <div className='reviews-div'>{review.review}</div> <hr />
          </div>
        ))}
      </div>
      {/* <div className="page-pagination-container">
        <Pagination
          className='page-pagination'
          color='primary'
          variant='outlined'
          count={20}>
        </Pagination>
      </div> */}
    </>
  );
};

export default Reviews;
