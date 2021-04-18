import React from "react";
import SearchMovie from "../components/SearchForm";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
const Home = () => {
  return (
    <>
      <SearchMovie />
      <MovieList />
      <Pagination />
    </>
  );
};

export default Home;
