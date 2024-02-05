import React, { useEffect, useState } from "react";

const OnImageChange = (event) => {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURL = [];
    images.forEach((image) => newImageURL.push(URL.createObjectURL(image)));
    setImageURL(newImageURL);
  }, [images]);
  setImages([...event.target.files]);
  return (
    <>
      {imageURL.map((images, displayImage) => (
        <img alt='user-selected' key={displayImage} src={images.image}></img>
      ))}
    </>
  );
};

export default OnImageChange;
