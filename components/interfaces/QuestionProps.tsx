import QuestionModel from "../../model/QuestionModel";

export interface QuestionProps {
    value: QuestionModel;
    answerProvided: (indice: number) => void;
    timerIsOver: () => void;
}