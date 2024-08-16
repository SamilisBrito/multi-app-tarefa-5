// Cria um componente estilizado chamado QRCodeContainer usando styled-components.

import styled from "styled-components";

// Esse componente estiliza uma <div> com padding, fundo, bordas arredondadas, e sombra.
export const QRCodeContainer = styled.div`
  margin-top: 20px; // Adiciona uma margem de 20px acima do QRCodeContainer.
  padding: 20px; // Adiciona padding de 20px dentro do contêiner.
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 10px; // Adiciona bordas arredondadas de 10px.
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do contêiner.
`;
