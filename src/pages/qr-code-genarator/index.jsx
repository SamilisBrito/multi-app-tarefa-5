// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from "react";
// Importa a biblioteca styled-components para criar componentes estilizados.
// Importa o componente QRCode da biblioteca qrcode.react para gerar códigos QR.
import QRCode from "qrcode.react";
import { Container, Input, Title } from "../../assets/style-global";
import { QRCodeContainer } from "./style";
import { Head } from "../../custom-hooks/Head";

// Define o componente funcional QRCodeGenerator.
export function QRCodeGenerator() {
  // Usa o hook useState para criar uma variável de estado chamada 'text' e uma função para atualizá-la.
  // 'text' armazena o texto que será codificado no QR Code.
  const [text, setText] = useState("");

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <>
      <Head
        title="QR code generator"
        description="QR Code Generator: Create and customize QR Codes instantly from text, URLs or data. Easy to use with real-time preview and image export."
      />
      <Container>
        {/* Exibe o título do gerador de QR Code */}
        <Title>QR Code Generator</Title>
        {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
        <Input
          type="text"
          value={text} // Define o valor do input como o texto do estado.
          onChange={(e) => setText(e.target.value)} // Atualiza o estado 'text' quando o valor do input muda.
          placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
        />
        {/* Renderiza o QRCode apenas se 'text' não estiver vazio */}
        {text && (
          <QRCodeContainer>
            <QRCode value={text} size={256} />{" "}
            {/* Gera o QR Code com o texto atual e tamanho 256px */}
          </QRCodeContainer>
        )}
      </Container>
    </>
  );
}
