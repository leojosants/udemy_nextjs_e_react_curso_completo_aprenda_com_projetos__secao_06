import { QuestionProps } from './interfaces/QuestionProps';
import styles from '../styles/Question.module.css';

export default function Question(props: QuestionProps) {
    const question = props.value;

    return (
        <div className={styles.question}>
            <h1>Question</h1>
        </div>
    );
};