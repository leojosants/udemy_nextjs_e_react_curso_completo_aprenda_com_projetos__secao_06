import styles from '../styles/Result.module.css';
import { useRouter } from 'next/router';

export default function Result() {
    const router = useRouter();
    const total = +router.query.total;
    const right = +router.query.right;
    const percentage = Math.round((right / total) * 100);

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div>{total}</div>
            <div>{right}</div>
            <div>{`${percentage}%`}</div>
        </div>
    );
};