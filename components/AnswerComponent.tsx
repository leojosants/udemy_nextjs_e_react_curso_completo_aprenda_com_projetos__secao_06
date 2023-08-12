import styles from '../styles/Answer.module.css';
import { AnswerProps } from './interfaces/AnswerProps';

export default function Answer(props: AnswerProps) {
    const answer = props.value;

    return (
        <div className={styles.answer} onClick={() => props.answerProvided(props.indice)}>
            <div className={styles.contentAnswer}>
                {
                    !answer.revealed ? (
                        <div className={styles.front}>
                            <div className={styles.letter}
                                style={{ backgroundColor: props.backgroundColorLetter }}>
                                {props.letter}
                            </div>

                            <div className={styles.value}>
                                {answer.value}
                            </div>
                        </div>
                    ) : (
                        <div className={styles.back}>
                            {
                                answer.right ? (
                                    <div className={styles.right}>
                                        <div>A resposta certa é...</div>
                                        <div className={styles.value}>{answer.value}</div>
                                    </div>
                                ) : (
                                    <div className={styles.wrong}>
                                        <div>A resposta informada está errada...</div>
                                        <div className={styles.value}>{answer.value}</div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};