import React from "react";
import { api_key } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
export async function loader({ params }) {
  const imdbID = params?.imdbID;
  const singlePageEndPoint = `http://www.omdbapi.com/?apikey=${api_key}&i=${imdbID}&plot=full`;
  try {
    const response = await axios.get(singlePageEndPoint);
    return {
      movie: response.data,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMessage =
      error?.response?.data?.Error || error.message || "Something went wrong";
    console.log(error);
    return {
      movie: null,
      isError: true,
      error: errorMessage,
    };
  }
}
function SinglePageDetail() {
  const { movie, isError, error } = useLoaderData();
  console.log(movie);
  if (isError) {
    return <h1>{error}</h1>; //for apikey or network error
  }

  if (movie && movie.Response === "False") {
    return <h1>{movie.Error || "Something went wrong"}</h1>;
  }
  return <div>{movie.Title}</div>;
}

export default SinglePageDetail;
