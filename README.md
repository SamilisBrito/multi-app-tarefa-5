# Documentação do Projeto Multi-App

## Instalação

1. **Clone o repositório**: `git clone <https://github.com/SamilisBrito/multi-app-tarefa-5.git>`
2. **Instale as dependências**: `npm install`
3. **Comandos principais**:
   - `npm run dev`: Inicia o servidor de desenvolvimento.
   - `npm run build`: Constrói a aplicação para produção.
   - `npm run lint`: Verifica a qualidade do código.

## Arquitetura

- **Modularização**: Código organizado em módulos.
- **Tratamento de Erros**: Implementado tratamento de erros amigável.

## Autenticação

- **JWT**: Implementação de autenticação via JWT com proteção de rotas e renovação de tokens.

## Interação com APIs

- **TMDB API**: Substituição da API OMDB pela TMDB para informações de filmes.

## Qualidade de Código

- **Linting**: ESLint configurado para garantir melhores práticas.
- **Revisões de Código**: Estabelecido processo de revisão para consistência.

## Desempenho

- **Lazy Loading**: Implementado no componente movie.

## Variáveis de Ambiente

- **VITE_APP_TMDB_API_KEY**
- **VITE_APP_TMDB_API_TOKEN**

## Dependências Principais

- `react`, `react-router-dom`, `styled-components`, `json-server`
