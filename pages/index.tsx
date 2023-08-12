import { useEffect, useState } from 'react';
import QuestionModel from '../model/QuestionModel';
import Quiz from '../components/QuizComponent';
import { useRouter } from 'next/router';


const BASE_URL = 'http://localhost:3000/api';

export default function Home() {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [anwersRight, setAnwersRight] = useState<number>(0);

  async function loadQuestionIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  };

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.createUsingObject(json);
    setQuestion(newQuestion);
  };

  useEffect(() => {
    loadQuestionIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds]);

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered);
    const hit = questionAnswered.hit;
    setAnwersRight(anwersRight + (hit ? 1 : 0));
  };

  function nextQuestionId() {
    if (question) {
      const nextIndice = questionsIds.indexOf(question.id) + 1;
      return questionsIds[nextIndice];
    }
  };

  function goToNextStep() {
    const nextId = nextQuestionId();
    nextId ? goToNextQuestion(nextId) : finalize();
  };

  function goToNextQuestion(nextId: number) {
    loadQuestion(nextId);
  };

  function finalize() {
    router.push({
      pathname: 'result',
      query: {
        total: questionsIds.length,
        right: anwersRight,
      }
    });
  };

  return (
    <Quiz
      question={question}
      lastQuestion={nextQuestionId() === undefined}
      questionAnswered={questionAnswered}
      goToNextStep={goToNextStep}
    />
  );
};
