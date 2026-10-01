import styles from "./Header.module.css";

// Linktree logo from Simple Icons (https://simpleicons.org).
function LinktreeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
    </svg>
  );
}

// Mirrors the name header on the main site. The brand links out to the main
// site rather than using next/link, since this app is served under /epk.
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="https://saxypandabear.github.io/" className={styles.brand}>
          Andrew Huynh
        </a>
        <a
          href="https://linktr.ee/saxypandabear"
          className={styles.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinktreeIcon />
          linktree
        </a>
      </nav>
    </header>
  );
}
