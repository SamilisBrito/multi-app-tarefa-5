import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Item } from "./components/carousel-item";
import { CarouselContainer, CustomCarousel } from "./style";
import { Head } from "../../custom-hooks/Head";

const itens = [
  { id: 0, title: "QR Code Generator", route: "/qr-code-generator" },
  { id: 1, title: "IP Address Finder", route: "/ip-address-finder" },
  { id: 2, title: "Movie Search Engine", route: "/movie-search-engine" },
  { id: 3, title: "Todo App", route: "/todo-app" },
  { id: 4, title: "Quiz App", route: "/quiz-app" },
  { id: 5, title: "Language Translator", route: "/language-translator" },
];
export function CarouselPage() {
  const navigate = useNavigate(); // Hook para navegação.
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
  const handleAccess = (index, route) => {
    setCarouselIndex(index);
    navigate(route);
  };

  return (
    <>
      <Head
        title="Carosel"
        description="Carousel: Display a series of images or content in a responsive and interactive slideshow format."
      />
      <CarouselContainer>
        <CustomCarousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          selectedItem={carouselIndex}
          onChange={(index) => setCarouselIndex(index)}
        >
          {itens.map(({ id, title, route }) => (
            <Item
              key={id}
              id={id}
              title={title}
              route={route}
              handleAccess={handleAccess}
            />
          ))}
        </CustomCarousel>
      </CarouselContainer>
    </>
  );
}
