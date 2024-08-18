import { useState } from "react"; // Importa o hook useState do React
import { Button, Container, Input, Title } from "../../assets/style-global";
import { Content } from "../../components/content";
import useFetch from "../../custom-hooks/useFetch";
import { Select } from "./components/select";
import { TranslatedText } from "./components/select/style";
import { Head } from "../../custom-hooks/Head";

const LANGUAGE_OPTIONS = [
  { text: "English", value: "en" },
  { text: "Spanish", value: "es" },
  { text: "French", value: "fr" },
  { text: "German", value: "de" },
  { text: "Italian", value: "it" },
  { text: "Portuguese", value: "pt" },
];

// Componente principal LanguageTranslator
export function LanguageTranslator() {
  const { data, loading, error, request } = useFetch();
  const [text, setText] = useState(""); // Define o estado para o texto a ser traduzido
  const [sourceLang, setSourceLang] = useState("en"); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState("es"); // Define o estado para a língua de destino

  async function translateText() {
    await request(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}`
    );
  }
  return (
    <>
      <Head
        title="Language Translator"
        description="Language Translator: Translate texts between different languages ​​quickly and accurately."
      />
      <Container>
        <Title>Language Translator</Title>
        <div>
          <Select
            label={"Source Language"}
            selectedValue={sourceLang}
            setSelectedValue={setSourceLang}
            options={LANGUAGE_OPTIONS}
          />
        </div>
        <div>
          <Select
            label={"Target Language"}
            selectedValue={targetLang}
            setSelectedValue={setTargetLang}
            options={LANGUAGE_OPTIONS}
          />
        </div>
        <Input
          type="text"
          value={text} // Valor do campo de entrada é ligado ao estado text
          onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
          placeholder="Enter text to translate" // Placeholder do campo de entrada
        />
        {/* Botão que chama a função translateText quando clicado */}
        <Button onClick={translateText} disabled={!text.length != 0}>
          Translate
        </Button>{" "}
        {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
        {text && (
          <Content
            error={error} //todo exibir mensagem de erro
            loading={loading}
            data={data}
            renderContent={(data) => (
              <TranslatedText>
                {data.responseData.translatedText}
              </TranslatedText>
            )}
            errorMessage={error}
          />
        )}
      </Container>
    </>
  );
}
