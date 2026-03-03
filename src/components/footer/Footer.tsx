import styles from './Footer.module.css';

export default function Footer({ year }: { year?: number }) {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>&copy; {year ?? new Date().getFullYear()} My Next.js App. All rights reserved.</p>
        </footer>
    );
}