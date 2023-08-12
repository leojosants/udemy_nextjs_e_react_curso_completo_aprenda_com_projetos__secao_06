import Button from '../components/ButtonComponent';
import Statistic from '../components/StatisticComponent';
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

            <div style={{ display: 'flex' }}>
                <Statistic text='Perguntas' value={total} />
                <Statistic text='Certas' value={right} backgroundColor='#9CD2A4' />
                <Statistic text='Percentual' value={`${percentage}%`} backgroundColor='#DE6A33' />
            </div>

            <Button href='/' text={'Tentar Novamente'} />
        </div>
    );
};