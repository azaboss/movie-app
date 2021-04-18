import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const initialState = {
  movies: [],
  loading: true,
  currentPage: 1,
  moviesPerPage: 10,
  searchMovie: "a",
};

const AppProvider = ({ children }) => {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=ec44438c9b56750d3fc59f1e406ff3f8&query=";

  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const fetchData = async () => {
    try {
      dispatch({ type: "LOADING" });
      const resp = await fetch(`${url}${state.searchMovie}`);
      const data = await resp.json();
      const { results } = data;
      dispatch({ type: "DISPLAY_MOVIES", payload: results });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [state.searchMovie]);

  if (!state.searchMovie) {
    dispatch({ type: "NO_VALUE" });
  }

  const paginate = (pageNumber) => {
    dispatch({ type: "PAGINATE", payload: pageNumber });
  };

  const search = (movie) => {
    console.log(movie);
    dispatch({ type: "FIND_MOVIE", payload: movie });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        imgUrl,
        paginate,
        search,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
