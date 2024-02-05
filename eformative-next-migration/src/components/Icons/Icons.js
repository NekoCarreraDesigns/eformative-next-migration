import React from "react";
import "./Icons.css";

const IconsSection = () => {
  return (
    <div className='icons-section'>
      <div className='container'>
        <div className='row'>
          {[
            {
              src: "/assets/electric-products-white.png",
              alt: "Electric Products Icon",
              title: "Electric Products",
            },
            { src: "/assets/news-white.png", alt: "News Icon", title: "News" },
            {
              src: "/assets/reviews-white.png",
              alt: "Reviews Icon",
              title: "Reviews",
            },
          ].map(({ src, alt, title }) => (
            <div className='icons-column shake-on-hover' key={title}>
              <img className='icons-column-image' src={src} alt={alt} />
              <h2 className='icons-column-title'>{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
