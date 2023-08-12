import QuestionModel from "../../model/QuestionModel";

export interface QuestionProps {
    value: QuestionModel;
    timeToAnswer?: number;
    answerProvided: (indice: number) => void;
    timerIsOver: () => void;
}