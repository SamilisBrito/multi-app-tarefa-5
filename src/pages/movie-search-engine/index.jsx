import React, { useState } from "react";
import { Button, Container, Input, Title } from "../../assets/style-global";
import { Content } from "../../components/content";
import useFetch from "../../custom-hooks/useFetch";
import { Movie } from "./components/movie";
import { MoviesContainer } from "./style";

// Componente principal MovieSearchEngine
export function MovieSearchEngine() {
  const { data, loading, error, request } = useFetch();
  const [query, setQuery] = useState(""); // Define o estado para a consulta de busca

  async function searchMovies() {
    await request(
      `http://www.omdbapi.com/?s=${query}&apikey=${
        import.meta.env.VITE_APP_OMD_API_KEY
      }`
    );
  }

  return (
    <div>
      <Container>
        <Title>Movie Search Engine</Title>
        <Input
          type="text"
          value={query} // Valor do campo de entrada é ligado ao estado query
          onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
          placeholder="Search for a movie" // Placeholder do campo de entrada
        />
        {/* Botão que chama a função searchMovies quando clicado */}
        <Button onClick={searchMovies} disabled={query.length < 3}>Search</Button>{" "}
        <Content
          error={error}
          loading={loading}
          data={data}
          renderContent={(data) => (
            <MoviesContainer>
              {data.Search &&
                data.Search.map(
                  (
                    movie // Verifica se há filmes e os mapeia para exibir MovieCard
                  ) => <Movie key={movie.imdbID} movie={movie} /> //todo exibir mensagem de erro
                )}
            </MoviesContainer>
          )}
          errorMessage={error}
        />
        
      </Container>
    </div>
  );
}
