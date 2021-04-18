import React from "react";
import { useGlobalContext } from "../context";
import Movie from "./Movie";
import styles from "./MovieList.module.scss";

const MovieList = () => {
  const { movies, loading, currentPage, moviesPerPage } = useGlobalContext();
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (currentMovies.length < 1) {
    return <h2>no matching movie</h2>;
  }

  return (
    <div className={styles.movies}>
      {currentMovies.map((movie) => {
        return <Movie key={movie.id} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
