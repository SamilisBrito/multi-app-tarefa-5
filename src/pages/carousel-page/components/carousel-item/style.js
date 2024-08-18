import styled from "styled-components"; // Importa styled-components para estilizar os componentes


// Estiliza os itens individuais do carrossel.
export const ItemCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 2.5rem;
  border-radius: 0.9375rem;
  box-shadow: 0 0.375rem 0.75rem rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0.625rem 1.25rem rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    color: white;
  }

  button {
    padding: 0.625rem 1.25rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    margin-top: 0.625rem;
    font-size: 1rem;

    &:hover {
      background-color: #0056b3;
    }
  }
`;