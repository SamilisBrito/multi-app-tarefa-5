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

export const Nav = ({ handleReturn }) => {
  // Cria estado visibilidade da barra de navegação
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  
  // Alterna a visibilidade da barra de navegação.
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };
  return (
    <>
      <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>

      <NavBar isOpen={isNavBarOpen}>
        {links.map(({ id, icon, text, route }) => (
          <StyledLink key={id} to={route}>
            {icon}
            {text}
          </StyledLink>
        ))}

        <ButtonLogout onClick={() => handleReturn("/login")} to={"login"}>
          Logout
        </ButtonLogout>
      </NavBar>
    </>
  );
};
