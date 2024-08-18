import React, { useEffect, useState } from "react";
import { Button, Container, Input, Title } from "../../assets/style-global";
import { Content } from "../../components/content";
import useFetch from "../../custom-hooks/useFetch";
import { Movie } from "./components/movie";
import { MoviesContainer, NavPage, PaginationContainer, Total } from "./style";
import { Head } from "../../custom-hooks/Head";

// Componente principal MovieSearchEngine
export function MovieSearchEngine() {
  const { data, loading, error, request } = useFetch();
  const [query, setQuery] = useState(""); // Define o estado para a consulta de busca
  const [queryCurrent, setQueryCurrent] = useState(""); // Define o estado para a consulta de busca

  useEffect(() => {
    if (queryCurrent) {
      pagination(); // Chama a paginação sempre que queryCurrent for atualizado
    }
  }, [queryCurrent]);

  function searchMovies() {
    setQueryCurrent(query);
  }

  async function pagination(page = 1) {
    await request(
      `https://api.themoviedb.org/3/search/movie?query=${queryCurrent}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`,
        },
      }
    );
  }

  return (
    <>
      <Head
        title="Movie Search Engine"
        description="Movie Search Engine: Search detailed movie information using the TMDB API."
      />
      <Container>
        <Title>Movie Search Engine</Title>
        <Input
          type="text"
          value={query} // Valor do campo de entrada é ligado ao estado query
          onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
          placeholder="Search for a movie" // Placeholder do campo de entrada
        />
        {/* Botão que chama a função searchMovies quando clicado */}
        <Button onClick={() => searchMovies()} disabled={query?.length == 0}>
          Search
        </Button>{" "}
        <Content
          error={error} //todo exibir mensagem de erro
          loading={loading}
          data={data}
          renderContent={(data) =>
            data?.results?.length > 0 ? (
              <>
                <p>Results for {queryCurrent}</p>
                <MoviesContainer>
                  {data.results.map(
                    (
                      movie // Verifica se há filmes e os mapeia para exibir MovieCard
                    ) => (
                      <Movie key={movie.id} movie={movie} />
                    )
                  )}
                </MoviesContainer>
                <PaginationContainer>
                  <NavPage>
                    <Button
                      disabled={data.page === 1}
                      onClick={() => pagination(data.page - 1)}
                    >
                      Previous
                    </Button>
                    <p>{data.page}</p>
                    <Button
                      disabled={data.page === data.total_pages}
                      onClick={() => pagination(data.page + 1)}
                    >
                      Next
                    </Button>
                  </NavPage>
                  <Total>
                    <p>Total page: {data.total_pages}</p>
                    <p>Total results: {data.total_results}</p>
                  </Total>
                </PaginationContainer>
              </>
            ) : (
              <p>No result found</p>
            )
          }
          errorMessage={error}
        />
      </Container>
    </>
  );
}
