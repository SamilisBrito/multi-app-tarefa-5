import styled from "styled-components"; // Importa styled-components para estilizar os componentes

// Define o estilo do container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  background: #fff;
  border-radius: 0.9375rem;
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.2);
  max-width: 50rem;
  margin: 1.875rem auto;
  max-height: calc(100vh - 200px) ;
`;

// Define o estilo do título
export const Title = styled.h2`
  color: #333;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  text-align: center;
`;

// Define o estilo do campo de entrada
export const Input = styled.input`
  margin-bottom: 1.25rem;
  padding: 0.75rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
  width: 100%;
  box-shadow: inset 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do botão
export const Button = styled.button`
  padding: 0.75rem 1.25rem; // Adiciona padding de 0.75rem verticalmente e 1.25rem horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 0.3125rem; // Adiciona bordas arredondadas de 0.3125rem.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 1rem; // Define o tamanho da fonte como 1rem.
  margin: 0.625rem; // Adiciona uma margem de 0.625rem ao redor do botão.
  transition: background-color 0.3s, transform 0.3s; // Adiciona uma transição suave para a cor de fundo e transformação.
  display: inline-flex;
  align-items: center;
  gap: 0.3125rem;

  &:hover {
    // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
    transform: scale(1.05); // Aumenta levemente o tamanho do botão.
  }

  &:active {
    // Aplica estilos ao botão quando ele é clicado.
    background-color: #004494; // Muda a cor de fundo para um tom ainda mais escuro de azul.
    transform: scale(0.95); // Reduz levemente o tamanho do botão.
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #004494; // Muda a cor de fundo para um tom ainda mais escuro de azul.
    color: #007bff;
  }
`;
