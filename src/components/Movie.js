import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import styles from "./Movie.module.scss";
import defaultImage from "../assets/default.png";
const Movie = ({ id, backdrop_path, title, overview }) => {
  const { imgUrl } = useGlobalContext();
  let img;
  backdrop_path ? (img = imgUrl + backdrop_path) : (img = defaultImage);
  return (
    <div className={styles.card}>
      <img src={`${img}`} className={styles.card_img} alt={title} />
      <div className={styles.card_body}>
        <h5 className={styles.card_title}>{title}</h5>
        <p className={styles.card_text}>{overview}</p>
        <div className={styles.btn_wrapper}>
          <Link to={`/movie/${id}`} className={styles.btn}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
