import React, { useState } from "react";
import axios from "axios";
import { FormControl, TextareaAutosize, FormHelperText } from "@mui/material";
import OnImageChange from "../../components/userImages";
import styles from "./postItem.module.css";



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
      <div className="heroSection">
        <p className={styles.postItemParagraph}>Please post your item!</p>
        <div className={styles.postItemFormDiv}>
          <form>
            <FormControl>
              <input
                required
                placeholder='What is your name'
                variant='outlined'
                className={`text-input-white ${styles.sellerNamePostInput}`}
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
                  className={`text-input-white ${styles.itemNameInput}`}
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
                  className={styles.uploadPictureVideoInput}
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
                className={`text-input-white ${styles.itemPriceInput}`}
                id='price-input'
                onChange={(event) => setPrice(event.target.value)}
              />
              <br />
              <br />
              <TextareaAutosize
                className={styles.postItemTextarea}
                onChange={(event) => {
                  characterCounter(event)
                  setDescription(event.target.value)}}
                id='text-area'
                placeholder='Enter item description'
                maxLength={300}
                style={{ width: "500px", height: "500px" }}
              />

              <br />
              <span className={styles.characterCountPostSpan}>
                <strong>{300 - inputArea.length} characters left</strong>
              </span>
              <br />
              <button
                className={`${styles.addItemButton} clear-btn-green-border`}
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
