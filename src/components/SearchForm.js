import React, { useState, useRef } from "react";
import { useGlobalContext } from "../context";
const SearchForm = () => {
  const { search } = useGlobalContext();
  const searchValue = useRef(null);

  const getMovie = () => {
    search(searchValue.current.value);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Movie"
        ref={searchValue}
        onChange={getMovie}
      />
    </div>
  );
};

export default SearchForm;
