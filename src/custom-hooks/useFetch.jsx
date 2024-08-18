import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url, options) => {
    setLoading(true); // Inicia o carregamento
    setError(null); // Reseta o erro

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorText = await response.text(); // Tenta obter o texto de erro da resposta
        throw new Error(
          `HTTP error! Status: ${response.status} - ${errorText || "Unknown Error"}`
        );
      }
      
      const json = await response.json(); // Tenta converter a resposta para JSON
      setData(json); // Atualiza o estado com os dados
      return { response, json };
    } catch (err) {
      setError(err.message); // Define a mensagem de erro
      setData(null); // Reseta os dados
      return { response: null, json: null }; // Retorna nulo para ambos em caso de erro
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  }, []);

  return { data, loading, error, request };
};

export default useFetch;
