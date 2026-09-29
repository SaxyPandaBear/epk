import styles from "./Header.module.css";

// Mirrors the name header on the main site. The brand links out to the main
// site rather than using next/link, since this app is served under /epk.
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="https://saxypandabear.github.io/" className={styles.brand}>
          Andrew Huynh
        </a>
      </nav>
    </header>
  );
}
