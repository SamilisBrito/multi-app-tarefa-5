import { NavLink } from "react-router-dom";
import styled from "styled-components"; // Importa styled-components para estilizar os componentes

// Estiliza a barra de navegação.
export const NavBar = styled.div`
  width: 15rem;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  box-shadow: 0.1875rem 0 0.9375rem rgba(0, 0, 0, 0.3);
  z-index: 1000;

  @media (max-width: 48rem) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

// Estiliza o botão de alternância da barra de navegação.
export const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 48rem) {
    display: block;
  }
`;

// Estiliza os links na barra de navegação.
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

export const ButtonLogout = styled.button`
  padding: 0.75rem;
  margin-top: 1.25rem;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 0.3125rem;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;
