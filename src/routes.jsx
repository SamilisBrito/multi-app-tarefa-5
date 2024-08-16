import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";


import { CarouselPage } from "./pages/carousel-page";
import { IPAddressFinder } from "./pages/ip-address-finder";
import { MovieSearchEngine } from "./pages/movie-search-engine";
import { Layout } from "./templates/layout";
import { LanguageTranslator } from "./pages/language-translator";
import { QRCodeGenerator } from "./pages/qr-code-genarator";
import QuizApp from "./pages/quiz-app";
import { TodoApp } from "./pages/todo-app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/qr-code-generator",
        element: <QRCodeGenerator />,
      },
      {
        path: "/ip-address-finder",
        element: <IPAddressFinder />,
      },
      {
        path: "/movie-search-engine",
        element: <MovieSearchEngine />,
      },
      {
        path: "/todo-app",
        element: <TodoApp />,
      },
      {
        path: "/quiz-app",
        element: <QuizApp />,
      },
      {
        path: "/language-translator",
        element: <LanguageTranslator />,
      },
      {
        index: true,
        element: <CarouselPage/>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
