import Question from '../components/Question';
import QuestionModel from '../model/QuestionModel';
import ResponseModel from '../model/AnswerModel';
import { useState } from 'react';

const questionMock = new QuestionModel(1, 'Qual é a sua cor favorita?',
  [
    ResponseModel.right('Verde'),
    ResponseModel.right('Vermelha'),
    ResponseModel.right('Azul'),
    ResponseModel.wrong('Preta'),
  ],
);

export default function Home() {
  const [question, setQuestion] = useState(questionMock);

  function answerProvided(indice: number): void {
    console.log(indice);
    setQuestion(question.toAnswerWith(indice));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Question value={question} answerProvided={answerProvided} />
    </div>
  );
};
