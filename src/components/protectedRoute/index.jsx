import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Função para verificar e decodificar um JWT
const verifyJWT = (token) => {
  const [header, payload, signature] = token.split(".");
  
  if (signature !== btoa("my-secret")) {
    throw new Error("Invalid signature");
  }

  const decodedPayload = JSON.parse(atob(payload));

  if (decodedPayload.exp < Date.now() / 1000) {
    throw new Error("Token expired");
  }

  return decodedPayload;
};

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redireciona para o login se não houver token
    } else {
      try {
        const decodedToken = verifyJWT(token);
        // Se o token for válido, você pode usar `decodedToken` conforme necessário
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login"); // Redireciona para o login se o token for inválido ou expirado
      }
    }
  }, [navigate]);

  return children; // Renderiza o conteúdo protegido se o token for válido
};

export default ProtectedRoute;
