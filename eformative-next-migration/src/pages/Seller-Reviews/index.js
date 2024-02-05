import React, { useEffect, useState } from "react";
import "./SellerReviews.css";

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
        <h1 className='seller-reviews-header'>Seller Reviews</h1>
          <div className='reviews-container'>
          {sellers?.map((sellers, reviewDisplay) => (
            <div key={reviewDisplay} className='reviews-item'>
              <h1 className='reviews-header'>
                Seller: {sellers.sellerName}, Reviewed by: {sellers.reviewerName}
              </h1>{" "}
              <div className='reviews-div'>{sellers.review}</div> <hr />
            </div>
          ))}
          </div>
      </div>
    </>
  );
};

export default SellerReviews;