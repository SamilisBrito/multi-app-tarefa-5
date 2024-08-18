import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, LoginForm } from "./style";
import { Button, Input } from "../../assets/style-global";
import { Head } from "../../custom-hooks/Head";

// Função para criar um JWT simples
const createJWT = (payload) => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };
  const base64Header = btoa(JSON.stringify(header));
  const base64Payload = btoa(JSON.stringify(payload));
  const signature = btoa("my-secret"); // Assinatura fictícia, para fins didáticos

  return `${base64Header}.${base64Payload}.${signature}`;
};

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, [username, password]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (username === "admin" && password === "password") {
      const tokenPayload = {
        user: username,
        exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira em 1 hora
      };
      const token = createJWT(tokenPayload);
      localStorage.setItem("token", token); // Armazena o token no localStorage
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <Head
        title="Login"
        description="Login: Access your account securely using your credentials."
      />
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {error && <p>{error}</p>}
          <Button type="submit">Login</Button>
        </LoginForm>
      </LoginContainer>
    </>
  );
}
