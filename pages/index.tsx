import { useState } from 'react';
import QuestionModel from '../model/QuestionModel';
import ResponseModel from '../model/AnswerModel';
import Quiz from '../components/QuizComponent';

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

  function questionAnswered(question: QuestionModel) { };

  function goToNextStep() { };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>

      <Quiz
        question={question}
        lastQuestion={true}
        questionAnswered={questionAnswered}
        goToNextStep={goToNextStep}
      />
    </div>
  );
};
