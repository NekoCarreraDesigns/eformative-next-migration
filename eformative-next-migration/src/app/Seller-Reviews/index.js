import React, { useEffect, useState } from "react";
import "./sellerReviews.module.css";
import reviewStyles from ".reviews.module.css"

const SellerReviews = () => {
  const [sellers, setSellers] = useState();

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((sellers) => setSellers(sellers));
  });

  return (
    <>
      <div className='hero-section'>
        <h1 className={styles.sellerReviewsHeader}>Seller Reviews</h1>
          <div className={reviewStyles.reviewsContainer}>
          {sellers?.map((sellers, reviewDisplay) => (
            <div key={reviewDisplay} className={reviewStyles.reviewsItem}>
              <h1 className={styles.reviewsHeader}>
                Seller: {sellers.sellerName}, Reviewed by: {sellers.reviewerName}
              </h1>{" "}
              <div className={styles.reviewsDiv}>{sellers.review}</div> <hr />
            </div>
          ))}
          </div>
      </div>
    </>
  );
};

export default SellerReviews;