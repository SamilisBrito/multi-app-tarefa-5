// Importa hooks e componentes do React e bibliotecas externas.
import { FaArrowLeft } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../index.css";
import { AppContainer, Footer, MainContent } from "./style";
import { Button } from "../../assets/style-global";
import { Nav } from "../../components/nav-bar";

// Define o componente principal do aplicativo.
export function Layout() {
  const navigate = useNavigate(); // Hook para navegação.
  // const location = useLocation();

  function handleReturn(rote) {
    navigate(rote);
  }

  // Renderiza o componente principal.
  return (
    <AppContainer>
      <Nav handleReturn={handleReturn} />
      <MainContent>
        <Outlet />
        {location.pathname != "/" && (
          <Button onClick={() => handleReturn("")}>
            <FaArrowLeft /> Return
          </Button>
        )}

        <Footer>© 2024 Your Company | All rights reserved</Footer>
      </MainContent>
    </AppContainer>
  );
}

// Exporta o componente App para ser utilizado em outras partes da aplicação.
