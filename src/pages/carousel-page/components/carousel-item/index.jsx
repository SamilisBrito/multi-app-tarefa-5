import React from "react";
import { ItemCarousel } from "./style";

export const Item = ({title, route, handleAccess}) => {
  return (
    <ItemCarousel>
      <h2>{title}</h2>
      <button onClick={() => handleAccess(0, route)}>
        Acessar
      </button>
    </ItemCarousel>
  );
};
