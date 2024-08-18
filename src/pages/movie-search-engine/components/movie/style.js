import styled from "styled-components"; // Importa styled-components para estilizar os componentes

export const MovieCard = styled.div`
  background: #f9f9f9;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  margin: 0.625rem;
  padding: 1.25rem;
  width: 11.25rem; /* Ajuste a largura conforme necessário */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.2);
  }

  img {
    border-radius: 0.625rem;
    max-width: 100%; /* Ajusta o tamanho da imagem para caber dentro do cartão */
    height: auto;
    margin-bottom: 0.625rem;
  }

  h3 {
    font-size: 1.125rem;
    margin: 0.625rem 0;
  }

  p {
    font-size: 0.875rem;
    color: #555;
  }
`;
