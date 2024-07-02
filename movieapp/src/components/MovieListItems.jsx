import React from "react";
import { Link } from "react-router-dom";

function MovieListItems({ Title, imdbID }) {
  return (
    <div>
      <Link to={`detail/${imdbID}`}>
        <p>{Title}</p>
      </Link>
    </div>
  );
}

export default MovieListItems;
