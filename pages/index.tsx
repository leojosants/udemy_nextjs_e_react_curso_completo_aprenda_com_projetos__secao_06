import Question from '../components/Question';
import QuestionModel from '../model/QuestionModel';
import ResponseModel from '../model/ResponseModel';

export default function Home() {
  const questionTest = new QuestionModel(1, 'Cor favorta?',
    [
      ResponseModel.right('Verde'),
      ResponseModel.right('Vermelha'),
      ResponseModel.right('Azul'),
      ResponseModel.wrong('Preta'),
    ],
  );

  return (
    <Question value={questionTest} />
  );
};