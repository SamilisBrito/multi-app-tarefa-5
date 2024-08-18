import { useState } from "react";
import { Button, Container, Input, Title } from "../../assets/style-global";
import { Content } from "../../components/content";
import useFetch from "../../custom-hooks/useFetch";
import { ResultsContainer } from "./style";
import { Head } from "../../custom-hooks/Head";

// Componente principal IPAddressFinder
export function IPAddressFinder() {
  const { data, loading, error, request } = useFetch();
  const [ip, setIp] = useState(""); // Define o estado para o IP digitado pelo usuário

  async function findIP() {
    await request(`https://ipinfo.io/${ip}/json`);
  }

  return (
    <>
      <Head
        title="IP Address Finder"
        description="IP Address Finder: Quickly find and display the user's current IP address. Simple, fast and efficient to obtain network information."
      />
      <Container>
        <Title>IP Address Finder</Title>
        <Input
          type="text"
          value={ip} // Valor do campo de entrada é ligado ao estado ip
          onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
          placeholder="Enter IP address" // Placeholder do campo de entrada
        />
        <Button onClick={findIP}>Find IP</Button>{" "}
        {/* Botão que chama a função findIP quando clicado */}
        <Content
          error={error}
          loading={loading}
          data={data}
          errorMessage={"Error fetching IP address"}
          renderContent={(data) => (
            <ResultsContainer>
              <p>
                <strong>IP:</strong> {data.ip}
              </p>
              <p>
                <strong>Location:</strong> {data.city}, {data.region},{" "}
                {data.country}
              </p>
              <p>
                <strong>ISP:</strong> {data.org}
              </p>
            </ResultsContainer>
          )}
        ></Content>
      </Container>
    </>
  );
}
