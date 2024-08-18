// Cria um componente estilizado chamado QRCodeContainer usando styled-components.

import styled from "styled-components";

// Esse componente estiliza uma <div> com padding, fundo, bordas arredondadas, e sombra.
export const QRCodeContainer = styled.div`
  margin-top: 1.25rem; // Adiciona uma margem de 1.25rem acima do QRCodeContainer.
  padding: 1.25rem; // Adiciona padding de 1.25rem dentro do contêiner.
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 0.625rem; // Adiciona bordas arredondadas de 0.625rem.
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do contêiner.
`;
