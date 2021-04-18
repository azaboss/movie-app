import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import defaultImage from "../assets/default.png";
import styles from "./SingleMovie.module.scss";

const SingleMovie = () => {
  const { id } = useParams();

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ec44438c9b56750d3fc59f1e406ff3f8`;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { imgUrl } = useGlobalContext();
  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  const { backdrop_path, title, overview } = movie;
  let img;
  backdrop_path ? (img = imgUrl + backdrop_path) : (img = defaultImage);
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", margin: "0 auto" }}>
        <img src={`${img}`} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview}</p>
          <Link to="/" className="btn btn-primary mt-3">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
