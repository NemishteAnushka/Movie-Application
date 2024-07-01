import React from "react";
import MovieListItems from "./MovieListItems";

function MovieList({ data }) {
  const { movieApiResponse } = data;

  if (movieApiResponse && movieApiResponse?.Response === "False") {
    return <h1>{movieApiResponse.Error}</h1>;
  }
  return (
    <div>
      {movieApiResponse.Search &&
        movieApiResponse.Search.map((movie) => (
          <MovieListItems {...movie} key={movie.imdbID} />
        ))}
    </div>
  );
}

export default MovieList;
