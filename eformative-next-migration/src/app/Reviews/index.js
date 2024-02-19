import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./reviews.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Reviews = () => {
  const [reviews, setReview] = useState();
  let navigate = useRouter();

  const postReview = () => {
    let postPath = `/post-reviews`;
    navigate.push(postPath);
  };

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((reviews) => setReview(reviews));
  });

  return (
    <>
      <div className={`hero-section ${styles.reviewsContainer}`}>
        <h1 className={styles.reviewsPageHeader}>Reviews</h1>
       <SearchBar/>
            <button
              className={`clear-btn-green-border ${stylesPostReviewButton}`}
              onClick={postReview}>
              Post A Review
            </button>
        {reviews?.map((review, userReview) => (
          <div key={userReview} className={styles.reviewsItem}>
            <h1 className={styles.reviewsHeader}>
              Reviewer: {review.reviewerName}, Seller: {review.sellerName},
              Product: {review.productName}
            </h1>{" "}
            <div className={styles.reviewsDiv}>{review.review}</div> <hr />
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
