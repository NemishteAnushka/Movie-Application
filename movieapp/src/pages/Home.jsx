import React from "react";
import SearchMovie from "../components/SearchMovie";
import MovieList from "../components/MovieList";
import axios from "axios";
import { api_key } from "../constants";
import { useLoaderData } from "react-router-dom";
export async function loader({ request }) {
  //code to get searchparams
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search");
  const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${api_key}&s=${searchTerm}`;
  const response = await axios.get(movieSearchEndPoint);

  return { movieApiResponse: response.data };
}
function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <SearchMovie />
      <MovieList data={data} />
    </div>
  );
}

export default Home;
