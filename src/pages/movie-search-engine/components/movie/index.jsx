import React from "react";
import { MovieCard } from "./style";
import noImage from "../../../../assets/imgs/no_image.png";

export function Movie({ movie }) {
  function getImage() {
    return movie.poster_path
      ? `
https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : noImage;
  }

  function getYear() {
    return movie.release_date
      ? new Date(movie.release_date).getFullYear()
      : "----";
  }

  return (
    <MovieCard key={movie.imdbID}>
      <img src={getImage()} alt={`${movie.title} Poster`} />{" "}
      {/* Exibe o pôster do filme */}
      <h3>{movie.title}</h3> {/* Exibe o título do filme */}
      <p>{getYear()}</p> {/* Exibe o ano do filme */}
    </MovieCard>
  );
}
