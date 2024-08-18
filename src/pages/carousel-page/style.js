import styled from "styled-components"; // Importa styled-components para estilizar os componentes

import { Carousel } from "react-responsive-carousel";

// Estiliza o carrossel personalizado.
export const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

// Estiliza o contêiner do carrossel.
export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  background-color: #2c3e50;
  border-radius: 1.25rem;
  padding: 1.25rem;
  position: relative; 
  z-index: 1; 
`;
