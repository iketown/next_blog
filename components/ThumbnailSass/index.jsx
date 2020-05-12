import React from "react";
import styles from "./styles.module.scss";

const ThumbnailSass = ({ imageUrl, caption }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={imageUrl} className={styles.thumbnail__image} />
      <h4 className={styles.thumbnail__caption}>{caption}</h4>
    </div>
  );
};

export default ThumbnailSass;
