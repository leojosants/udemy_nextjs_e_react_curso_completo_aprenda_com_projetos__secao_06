import QuestionModel from '../../model/QuestionModel';

export interface QuizProps {
    question: QuestionModel;
    lastQuestion: boolean;
    questionAnswered: (question: QuestionModel) => void;
    goToNextStep: () => void;
};