import { createBrowserRouter } from "react-router-dom";
import { CarouselPage } from "./pages/carousel-page";
import { IPAddressFinder } from "./pages/ip-address-finder";
import { MovieSearchEngine } from "./pages/movie-search-engine";
import { Layout } from "./templates/layout";
import { LanguageTranslator } from "./pages/language-translator";
import { QRCodeGenerator } from "./pages/qr-code-genarator";
import { TodoApp } from "./pages/todo-app";
import { Login } from "./pages/login";
import ProtectedRoute from "../src/components/protectedRoute/index";
import { QuizApp } from "./pages/quiz-app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/qr-code-generator",
        element: (
          <ProtectedRoute>
            <QRCodeGenerator />
          </ProtectedRoute>
        ),
      },
      {
        path: "/ip-address-finder",
        element: (
          <ProtectedRoute>
            <IPAddressFinder />
          </ProtectedRoute>
        ),
      },
      {
        path: "/movie-search-engine",
        element: (
          <ProtectedRoute>
            <MovieSearchEngine />
          </ProtectedRoute>
        ),
      },
      {
        path: "/todo-app",
        element: (
          <ProtectedRoute>
            <TodoApp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/quiz-app",
        element: (
          <ProtectedRoute>
            <QuizApp />
          </ProtectedRoute>
        ),
      },
      {
        path: "/language-translator",
        element: (
          <ProtectedRoute>
            <LanguageTranslator />
          </ProtectedRoute>
        ),
      },
      {
        index: true,
        element: (
          <ProtectedRoute>
            <CarouselPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
