import styled from "styled-components"; // Importa styled-components para estilizar os componentes

// Define o estilo do container principal do login
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Define o estilo do formulário de login
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 1.25rem;
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
`;