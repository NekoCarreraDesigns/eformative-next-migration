import React, { useState } from "react";
import axios from "axios";
import { FormControl, TextareaAutosize, FormHelperText } from "@mui/material";
import OnImageChange from "../../images/images";
import "./PostItem.css";



const PostItem = () => {
  const [sellerName, setSellerName] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [inputArea, setInputArea] = useState("");
  
  const characterCounter = (event) => {
    setInputArea(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    axios
      .post("/market/items/add", {
         sellerName,
        product: productName,
        price,
        image: "imageInput.value",
        description,
      })
      .then((res) => {
        res.status(200);
        alert("Your item has been posted!");
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  };

  return (
    <>
      <div className='hero-section'>
        <p className='post-item-paragraph'>Please post your item!</p>
        <div className='post-item-form-div'>
          <form>
            <FormControl>
              <input
                required
                placeholder='What is your name'
                variant='outlined'
                className='seller-name-post-input text-input-white'
                id='seller-input'
                onChange={(event) => setSellerName(event.target.value)}
              />
              <br />
              <br />
              <FormControl>
                <input
                  required
                  placeholder='Input item name'
                  variant='outlined'
                  className='item-name-input text-input-white'
                  id='item-input'
                  onChange={(event) => setProductName(event.target.value)}
                />
                <br />
                <br />
                <FormHelperText>Upload a picture or video</FormHelperText>
                <input
                  type='file'
                  multiple
                  accept='image/*'
                  className='upload-picture-video-input'
                  id='image-input'
                  name='post-item-picture-video'
                  placeholder='upload an image or a video'
                  onChange={OnImageChange}
                />
              </FormControl>

              <input
                required
                placeholder='Please input a price'
                variant='outlined'
                className='item-price-input text-input-white'
                id='price-input'
                onChange={(event) => setPrice(event.target.value)}
              />
              <br />
              <br />
              <TextareaAutosize
                className='post-item-textarea'
                onChange={(event) => {
                  characterCounter(event)
                  setDescription(event.target.value)}}
                id='text-area'
                placeholder='Enter item description'
                maxLength={300}
                style={{ width: "500px", height: "500px" }}
              />

              <br />
              <span className='character-count-post-span'>
                <strong>{300 - inputArea.length} characters left</strong>
              </span>
              <br />
              <button
                className='add-item-button clear-btn-green-border'
                onClick={addItem}>
                Post Item
              </button>
            </FormControl>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostItem;
