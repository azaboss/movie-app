import React from "react";
import { useGlobalContext } from "../context";
function Pagination() {
  const pageNumbers = [];
  const { moviesPerPage, paginate, movies, currentPage } = useGlobalContext();
  console.log(currentPage);

  for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((page) => {
        return (
          <li key={page} className="page-item">
            <a href="#" className="page-link" onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
