import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import OnImageChange from "../../images/images";
import "./PostReview.css";

const addReview = () => {
  const reviewerNameInput = document.getElementById("seller-name");
  const productInput = document.getElementById("product-name");
  const sellerReviewInput = document.getElementById("seller-review");
  const area = document.querySelector("textarea");

  axios
    .all([
      axios.post("/seller/reviews/post", {
        reviewerName: reviewerNameInput.value,
        sellerName: sellerReviewInput.value,
        review: area.value,
      }),
      axios.post("/product/reviews/post", {
        reviewerName: reviewerNameInput.value,
        sellerName: sellerReviewInput.value,
        productName: productInput.value,
        review: area.value,
      }),
    ])
    .then(
      axios.spread((res) => {
        console.log(res);
        alert("Review has been added");
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

const PostReview = () => {
  const [input, setInput] = useState(" ");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      
      <div className='review-container hero-section'>
        <h1 className='post-review-header'>Post a review!</h1>
        <form onSubmit={addReview} className='post-review-form'>
          <div className='form-control-wrapper'>
            <FormControl className='custom-form-control'>
              <TextField
                fullWidth
                required
                className='seller-name-input text-input-dark'
                id='seller-name'
                type='text'
                aria-label="Name input for the reviewer"
                placeholder='Please enter your name'
              />
              <br />
              <br />
              <TextField
                fullWidth
                className='product-name-input text-input-dark'
                id='product-name'
                type='text'
                placeholder='Product being reviewed'
                aria-label="name of the product being reviewed input"
              />
              <br />
              <br />
              <TextField
                fullWidth
                className='seller-review-input text-input-dark'
                type='text'
                placeholder='Seller being reviewed'
                id='seller-review'
                aria-label=" name of seller being reviewed"
              />
              <br />
              <br />
              <FormHelperText>Upload a picture or video</FormHelperText>
              <input
                type='file'
                multiple
                accept='image/*'
                id='image-input'
                name='post-item-picture-video'
                aria-label="user image upload button"
                placeholder='Upload an image or a video'
                onChange={OnImageChange}
                className='upload-button'
              />
              <br />
              <br />
              <TextareaAutosize
                maxLength={300}
                className='user-post-review-textarea text-input-dark'
                id='review-text-area'
                aria-label="user textarea to write reviews about sellers or products"
                onChange={inputHandler}
              />
              <br />
              <span className='character-count-span'>
                <strong>{300 - input.length} characters left</strong>
              </span>
              <br />
              <button className='clear-btn-green-border clear-btn-sm' type='submit' aria-label="click button to submit your review">
                Submit
              </button>
            </FormControl>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostReview;
