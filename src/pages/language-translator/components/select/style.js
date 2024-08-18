import styled from "styled-components";

// Define o estilo do label
export const Label = styled.label`
  color: #555;
  font-size: 1rem;
  margin-right: 0.625rem;
`;

// Define o estilo do select
export const SelectStyle = styled.select`
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Define o estilo do texto traduzido
export const TranslatedText = styled.p`
  color: #333;
  font-size: 1.125rem;
  background: #f9f9f9;
  border-radius: 0.625rem;
  padding: 1.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;