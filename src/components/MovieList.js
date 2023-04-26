import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const Movies = Object.entries(movies).map(([movieID, movie]) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movie.title}</Link>
    </li>
  ));

  return <ul>{Movies}</ul>;
}

export default MoviesList;
