import { QuestionProps } from './interfaces/QuestionProps';
import styles from '../styles/Question.module.css';
import Statement from './Statement';
import Answer from './Answer';
import Timer from './Timer';

const letters = [
    {
        value: 'A',
        color: '#F2C866',
    },
    {
        value: 'B',
        color: '#F266BA',
    },
    {
        value: 'C',
        color: '#85D4F2',
    },
    {
        value: 'D',
        color: '#BCE596',
    },
];

export default function Question(props: QuestionProps) {
    const question = props.value;

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    key={i}
                    value={answer}
                    indice={i}
                    letter={letters[i].value}
                    backgroundColorLetter={letters[i].color}
                    answerProvided={props.answerProvided}
                />
            );
        })
    };

    return (
        <div className={styles.question}>
            <Statement text={question.statement} />

            <Timer
                duration={props.timeToAnswer ?? 10}
                TimeIsOver={props.timerIsOver}
            />

            {renderAnswers()}
        </div>
    );
};