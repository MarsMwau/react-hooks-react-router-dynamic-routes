import React from "react";
import { useParams } from "react-router-dom";

const MovieShow = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies[movieId];

  return (
    <div>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieShow;
