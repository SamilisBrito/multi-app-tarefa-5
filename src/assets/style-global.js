import styled from "styled-components"; // Importa styled-components para estilizar os componentes

// Define o estilo do container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 30px auto;
  max-height: 100vh;
`;

// Define o estilo do título
export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Define o estilo do campo de entrada
export const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do botão
export const Button = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  margin: 10px; // Adiciona uma margem de 10px ao redor do botão.
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
