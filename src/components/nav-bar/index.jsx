import React, { useState } from "react";
import {
  FaBars,
  FaGlobeAmericas,
  FaNetworkWired,
  FaQrcode,
  FaRegQuestionCircle,
  FaSearch,
  FaTasks,
} from "react-icons/fa";
import { ButtonLogout, NavBar, NavBarToggle, StyledLink } from "./style";
import { useNavigate } from "react-router-dom";

const links = [
  {
    id: "/qr-code-generator",
    route: "/qr-code-generator",
    icon: <FaQrcode />,
    text: "QR Code Generator",
  },
  {
    id: "/ip-address-finder",
    route: "/ip-address-finder",
    icon: <FaNetworkWired />,
    text: " IP Address Finder",
  },
  {
    id: "/movie-search-engine",
    route: "/movie-search-engine",
    icon: <FaSearch />,
    text: "Movie Search",
  },
  { id: "/todo-app", route: "/todo-app", icon: <FaTasks />, text: "Todo App" },
  {
    id: "/quiz-app",
    route: "/quiz-app",
    icon: <FaRegQuestionCircle />,
    text: "Quiz App",
  },
  {
    id: "/language-translator",
    route: "/language-translator",
    icon: <FaGlobeAmericas />,
    text: "Translator",
  },
];

export const Nav = () => {
  // Cria estado visibilidade da barra de navegação
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  // Obtém a função de navegação
  const navigate = useNavigate();
  // Alterna a visibilidade da barra de navegação.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  // Função para handle do logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token do localStorage
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <>
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>

      <NavBar $isOpen={isNavBarOpen}>
        {links.map(({ id, icon, text, route }) => (
          <StyledLink key={id} to={route}>
            {icon}
            {text}
          </StyledLink>
        ))}

        <ButtonLogout onClick={() => handleLogout()} to={"login"}>
          Logout
        </ButtonLogout>
      </NavBar>
    </>
  );
};
