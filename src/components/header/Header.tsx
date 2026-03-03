import Link from 'next/link';
import styles from './Header.module.css';
import ThemeToggleButton from '../theme/ThemeToggleButton';

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/Hogwarts-Logo.png" alt="Logo" />
      <ThemeToggleButton />
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/houses">Houses</Link></li>
          <li><Link href="/characters">Characters</Link></li>
          <li><Link href="/students">Students</Link></li>
          <li><Link href="/spells">Spells</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
}
