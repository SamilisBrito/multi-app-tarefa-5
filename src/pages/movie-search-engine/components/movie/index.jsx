import React from "react";
import { MovieCard } from "./style";

export function Movie({ movie }) {
  return (
    <MovieCard key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />{" "}
      {/* Exibe o pôster do filme */}
      <h3>{movie.Title}</h3> {/* Exibe o título do filme */}
      <p>{movie.Year}</p> {/* Exibe o ano do filme */}
    </MovieCard>
  );
}
