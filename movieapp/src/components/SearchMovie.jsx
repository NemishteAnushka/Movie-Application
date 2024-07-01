import React from "react";
import { Form } from "react-router-dom";
function SearchMovie({ searchTerm }) {
  return (
    <Form method="GET">
      <input type="text" name="search" id="search" defaultValue={searchTerm} />
      <button type="submit">Search</button>
    </Form>
  );
}

export default SearchMovie;
