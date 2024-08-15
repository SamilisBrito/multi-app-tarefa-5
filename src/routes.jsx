import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import IPAddressFinder from "./components/IPAddressFinder";
import LanguageTranslator from "./components/LanguageTranslator";
import Login from "./components/Login";
import QRCodeGenerator from "./components/QRCodeGenarator";
import QuizApp from "./components/QuizApp";
import TodoApp from "./components/TodoApp";

import { MovieSearchEngine } from "./pages/movie-search-engine";
import { CarouselPage } from "./pages/carousel-page";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/carousel",
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
