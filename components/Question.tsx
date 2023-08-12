import { QuestionProps } from './interfaces/QuestionProps';
import styles from '../styles/Question.module.css';
import Statement from './Statement';

export default function Question(props: QuestionProps) {
    const question = props.value;

    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
        </div>
    );
};