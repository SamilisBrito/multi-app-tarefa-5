import React, { useState } from "react";
import useFetch from "../../custom-hooks/useFetch";
import { Movie } from "./components/movie";
import { Button, Container, Input, Title } from "../../assets/style-global";
import { MoviesContainer } from "./style";

// Componente principal MovieSearchEngine
export const MovieSearchEngine = () => {
  const {
    data,
    loading,
    error,
    request,
  } = useFetch();

  console.log(data);
  const [query, setQuery] = useState(""); // Define o estado para a consulta de busca

  React.useEffect(() => {
    searchMovies();
  }, [request]);

  async function searchMovies() {
    await request(
      `http://www.omdbapi.com/?s=${query}&apikey=${
        import.meta.env.VITE_APP_OMD_API_KEY
      }`
    );
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
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
          <Button onClick={searchMovies}>Search</Button>{" "}
          {/* Botão que chama a função searchMovies quando clicado */}
          <MoviesContainer>
            {data?.Search &&
              data.Search.map(
                (
                  movie // Verifica se há filmes e os mapeia para exibir MovieCard
                ) => <Movie movie={movie} />
              )}
          </MoviesContainer>
        </Container>
      </div>
    );
  else return null;
};
