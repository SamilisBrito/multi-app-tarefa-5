// Importa hooks e componentes do React e bibliotecas externas.
import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaBars,
  FaGlobeAmericas,
  FaNetworkWired,
  FaQrcode,
  FaRegQuestionCircle,
  FaSearch,
  FaTasks,
} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Nav } from "./pages/nav-bar";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

// Estiliza o rodapé do aplicativo.
const Footer = styled.div`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 12px;
  }
`;

// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

// Define o componente principal do aplicativo.
const App = () => {
  const navigate = useNavigate(); // Hook para navegação.

  function handleReturn(rote) {
    navigate(rote);
  }

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <Nav handleReturn={handleReturn} />

      <MainContent>
        <Outlet />
        <ReturnButton onClick={() => handleReturn("/carousel")}>
          <FaArrowLeft /> Voltar
        </ReturnButton>

        <Footer>© 2024 Your Company | All rights reserved</Footer>
      </MainContent>
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
