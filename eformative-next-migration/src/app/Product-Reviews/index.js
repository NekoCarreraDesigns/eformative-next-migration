import React, { useEffect, useState } from "react";
import styles from "./productReview.module.css";
import reviewStyles from "./reviews.module.css"

const ProductReview = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  });
  return (
    <>
      <div className={`${reviewStyles.reviewsContainer} heroSection`}>
      <h1 className={styles.productReviewHeader}>Product Reviews</h1>
        {products?.map((products, productDisplay) => (
          <div key={productDisplay} className={reviewStyles.reviewsItem}>
            <h1 className={reviewStyles.reviewsHeader} aria-label='name of the product and reviewer'>
              Product:{products.productName}, Reviewer:{products.reviewerName}
            </h1>{" "}
            <div className={reviewStyles.reviewsDiv}>{products.review}</div> <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductReview;
