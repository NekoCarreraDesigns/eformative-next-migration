import React, { useEffect, useState } from "react";
import "./ProductReview.css";

const ProductReview = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  });
  return (
    <>
      <div className='reviews-container hero-section'>
      <h1 className='product-review-header'>Product Reviews</h1>
        {products?.map((products, productDisplay) => (
          <div key={productDisplay} className='reviews-item'>
            <h1 className='reviews-header' aria-label='name of the product and reviewer'>
              Product:{products.productName}, Reviewer:{products.reviewerName}
            </h1>{" "}
            <div className='reviews-div'>{products.review}</div> <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductReview;
