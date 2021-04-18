const reducer = (state, action) => {
  if (action.type === "NO_VALUE") {
    return { ...state, searchMovie: "a" };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_MOVIES") {
    return {
      ...state,
      movies: action.payload,
      loading: false,
    };
  }

  if (action.type === "PAGINATE") {
    return {
      ...state,
      currentPage: action.payload,
    };
  }

  if (action.type === "FIND_MOVIE") {
    return {
      ...state,
      searchMovie: action.payload,
    };
  }

  throw new Error("no matching action type");
};

export default reducer;
