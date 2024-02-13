import React from "react";
import styles from "./Icons.module.css";

const IconsSection = () => {
  return (
    <div className={styles.iconsSection}>
      <div className={styles.container}>
        <div className={styles.row}>
          {[
            {
              src: "/images/electric-products-white.png",
              alt: "Electric Products Icon",
              title: "Electric Products",
            },
            { src: "/images/news-white.png", alt: "News Icon", title: "News" },
            {
              src: "/images/reviews-white.png",
              alt: "Reviews Icon",
              title: "Reviews",
            },
          ].map(({ src, alt, title }) => (
            <div className={styles.iconsColumn} key={title}>
              <img className={styles.iconsColumnImage} src={src} alt={alt} />
              <h2 className={styles.iconsColumnTitle}>{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconsSection;
