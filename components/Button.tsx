import { ButtonProps } from './interfaces/ButtonProps';
import styles from '../styles/Button.module.css';
import Link from 'next/link';

export default function Button(props: ButtonProps) {
    function renderButton() {
        return (
            <button
                className={styles.button}
                onClick={props.onClick}
            >
                {props.text}
            </button>
        );
    };

    return props.href ?
        (
            <Link href={props.href}>
                {renderButton()}
            </Link>
        )
        : renderButton();
};