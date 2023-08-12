import { useEffect, useState } from 'react';
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

const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(questionMock);

  async function loadQuestionIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();
    console.log(questionsIds);
    setQuestionsIds(questionsIds);
  };

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await resp.json();
    console.log(json);
  };

  useEffect(() => {
    loadQuestionIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds]);

  function questionAnswered(question: QuestionModel) { };

  function goToNextStep() { };

  return (
    <Quiz
      question={question}
      lastQuestion={false}
      questionAnswered={questionAnswered}
      goToNextStep={goToNextStep}
    />
  );
};
