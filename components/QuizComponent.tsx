import styles from '../styles/Quiz.module.css';
import Button from './ButtonComponent';
import { QuizProps } from './interfaces/QuizProps';
import Question from './QuestionComponent';

export default function Quiz(props: QuizProps) {
    function answerProvided(indice: number) {
        if (props.question.notAnswered) {
            props.questionAnswered(props.question.toAnswerWith(indice));
        }
    };

    return (
        <div className={styles.quiz}>
            {
                props.question
                    ? <Question
                        value={props.question}
                        timeToAnswer={6}
                        answerProvided={answerProvided}
                        timerIsOver={props.goToNextStep} />
                    : false
            }
            <Button
                onClick={props.goToNextStep}
                text={props.lastQuestion ? 'Finalizar' : 'Próxima'}
            />
        </div>
    );
};