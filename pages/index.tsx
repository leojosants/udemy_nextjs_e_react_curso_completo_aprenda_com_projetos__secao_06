import Question from '../components/Question';
import QuestionModel from '../model/QuestionModel';
import ResponseModel from '../model/AnswerModel';

export default function Home() {
  const questionTest = new QuestionModel(1, 'Cor favorita?',
    [
      ResponseModel.right('Verde'),
      ResponseModel.right('Vermelha'),
      ResponseModel.right('Azul'),
      ResponseModel.wrong('Preta'),
    ],
  );

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Question value={questionTest} />
    </div>
  );
};
