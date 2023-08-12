import styles from '../styles/Statement.module.css';
import { StatementProps } from './interfaces/StatementProps';

export default function Statement(props: StatementProps) {
    return (
        <div className={styles.statement}>
            <span className={styles.text}>
                {props.text}
            </span>
        </div>
    )
};