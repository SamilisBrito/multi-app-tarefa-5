// Cria um componente estilizado chamado Question usando styled-components.

import styled from "styled-components";

// Esse componente estiliza um <p> para exibir a pergunta com cor, tamanho da fonte e margem.
export const Question = styled.p`
  color: #555; // Define a cor do texto como um tom médio de cinza.
  font-size: 1.25rem; // Define o tamanho da fonte como 1.25rem.
  margin-bottom: 1.25rem; // Adiciona uma margem de 1.25rem abaixo da pergunta.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado Score usando styled-components.
// Esse componente estiliza um <p> para exibir a pontuação com cor, tamanho da fonte e margem.
export const Score = styled.p`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  font-size: 1.25rem; // Define o tamanho da fonte como 1.25rem.
  margin-top: 1.25rem; // Adiciona uma margem de 1.25rem acima da pontuação.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;
