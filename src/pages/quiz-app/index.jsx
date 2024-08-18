// Importa o hook useState da biblioteca React para gerenciar o estado do componente.
import { useState } from "react";
import { Question, Score } from "./style";
import { Button, Container, Title } from "../../assets/style-global";
import { Head } from "../../custom-hooks/Head";
// Importa a biblioteca styled-components para criar componentes estilizados.

// Define um array de perguntas, cada uma com a pergunta, opções e resposta correta.
const QUESTIONS = [
  {
    question: "What is 2+2?", // Pergunta da primeira questão.
    options: ["3", "4", "5", "6"], // Opções de resposta para a primeira questão.
    answer: "4", // Resposta correta para a primeira questão.
  },
  {
    question: "What is 3+3?", // Pergunta da segunda questão.
    options: ["5", "6", "7", "8"], // Opções de resposta para a segunda questão.
    answer: "6", // Resposta correta para a segunda questão.
  },
];

// Define o componente funcional QuizApp.
export function QuizApp() {
  // Usa o hook useState para criar variáveis de estado para a pontuação e a pergunta atual.
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Função que é chamada quando o usuário responde uma pergunta.
  const handleAnswer = (answer) => {
    // Verifica se a resposta fornecida está correta.
    if (answer === QUESTIONS[currentQuestion].answer) {
      // Se a resposta estiver correta, aumenta a pontuação em 1.
      setScore(score + 1);
    }
    // Passa para a próxima pergunta.
    setCurrentQuestion(currentQuestion + 1);
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <>
      <Head
        title="Quiz App"
        description="Quiz App: Test your knowledge with interactive quizzes."
      />
      <Container>
        <Title>Quiz App</Title> {/* Exibe o título do aplicativo de quiz */}
        {currentQuestion < QUESTIONS.length ? ( // Verifica se ainda há perguntas para responder.
          <div>
            <Question>{QUESTIONS[currentQuestion].question}</Question>{" "}
            {/* Exibe a pergunta atual */}
            {QUESTIONS[currentQuestion].options.map((option) => (
              <Button key={option} onClick={() => handleAnswer(option)}>
                {option}
              </Button> /* Renderiza os botões de opções de resposta */
            ))}
          </div>
        ) : (
          <Score>
            Your score: {score}
          </Score> /* Exibe a pontuação final após responder todas as perguntas */
        )}
      </Container>
    </>
  );
}
