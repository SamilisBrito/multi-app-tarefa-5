import styled from "styled-components"; // Importa styled-components para estilizar os componentes

// Estiliza o contêiner principal do aplicativo.
export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: auto;
`;

// Estiliza o conteúdo principal do aplicativo.
export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`;

// Estiliza o rodapé do aplicativo.
export const Footer = styled.div`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 0.625rem 0;
  position: absolute;
  bottom: 0;

  @media (max-width: 48rem) {
    padding: 0.3125rem 0;
    font-size: 0.75rem;
  }
`;
