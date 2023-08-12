import Question from '../components/Question';
import QuestionModel from '../model/QuestionModel';
import ResponseModel from '../model/AnswerModel';
import { useState } from 'react';
import Answer from '../components/Answer';

const questionMock = new QuestionModel(1, 'Qual é a sua cor favorita?',
  [
    ResponseModel.wrong('Verde'),
    ResponseModel.wrong('Vermelha'),
    ResponseModel.wrong('Azul'),
    ResponseModel.right('Preta'),
  ],
);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  function answerProvided(indice: number): void {
    setQuestion(question.toAnswerWith(indice));
  };

  function timerIsOver(): void {
    if (question.notAnswered) {
      setQuestion(question.toAnswerWith(-1));
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question
        value={question}
        answerProvided={answerProvided}
        timerIsOver={timerIsOver}
      />
    </div>
  );
};
