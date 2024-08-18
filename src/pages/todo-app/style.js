// Cria um componente estilizado chamado TaskList usando styled-components.

import styled from "styled-components";

// Esse componente estiliza uma <ul> para listar as tarefas sem estilo de lista padrão.
export const TaskList = styled.ul`
  list-style-type: none; // Remove os pontos de lista padrão.
  padding: 0; // Remove o padding padrão.
  width: 100%; // Define a largura como 100% do contêiner pai.
  overflow-y: auto;
`;

// Cria um componente estilizado chamado TaskItem usando styled-components.
// Esse componente estiliza um <li> com fundo, bordas arredondadas, padding, margem, sombra e efeitos de transição.
export const TaskItem = styled.li`
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 0.3125rem; // Adiciona bordas arredondadas de 0.3125rem.
  padding: 0.625rem; // Adiciona padding de 0.625rem dentro do item.
  margin-bottom: 0.625rem; // Adiciona uma margem de 0.625rem abaixo do item.
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do item.
  font-size: 1rem; // Define o tamanho da fonte como 1rem.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  display: flex; // Define o layout como flexbox.
  justify-content: space-between; // Distribui o espaço entre os itens do item.
  align-items: center; // Alinha os itens no centro verticalmente.

  &:hover {
    // Aplica estilos ao item quando o cursor está sobre ele.
    background-color: #f1f1f1; // Muda a cor de fundo para um tom ligeiramente mais escuro de cinza.
  }

  button {
    // Estiliza os botões dentro do TaskItem.
    margin-left: 0.625rem; // Adiciona uma margem de 0.625rem à esquerda do botão.
    background: transparent; // Define o fundo como transparente.
    border: none; // Remove a borda padrão do botão.
    color: red; // Define a cor do texto como vermelho.
    cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
    font-size: 1rem; // Define o tamanho da fonte como 1rem.

    &:hover {
      // Aplica estilos ao botão quando o cursor está sobre ele.
      color: darkred; // Muda a cor do texto para um tom mais escuro de vermelho.
    }
  }
`;

// Cria um componente estilizado chamado EditInput usando styled-components.
// Esse componente estiliza um <input> para edição de tarefas com padding, borda, bordas arredondadas e sombra interna.
export const EditInput = styled.input`
  margin-left: 0.625rem; // Adiciona uma margem de 0.625rem à esquerda do input.
  padding: 0.375rem; // Adiciona padding de 0.375rem dentro do input.
  border: 0.0625rem solid #ccc; // Define uma borda de 0.0625rem sólida e cinza clara.
  border-radius: 0.3125rem; // Adiciona bordas arredondadas de 0.3125rem.
  width: 60%; // Define a largura como 60% do contêiner pai.
  box-shadow: inset 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 0.875rem; // Define o tamanho da fonte como 0.875rem.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus {
    // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;
