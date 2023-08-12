import { QuestionProps } from './interfaces/QuestionProps';
import styles from '../styles/Question.module.css';
import Statement from './Statement';
import Answer from './Answer';

export default function Question(props: QuestionProps) {
    const question = props.value;

    function renderAnswers() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    value={answer}
                    indice={i}
                    letter='A'
                    letterColor='#F2C866'
                />
            );
        })
    };

    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
            {renderAnswers()}
        </div>
    );
};