import React from "react";
import { Form } from "react-router-dom";
function SearchMovie() {
  return (
    <Form method="GET">
      <input type="text" name="search" id="search" />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchMovie;
