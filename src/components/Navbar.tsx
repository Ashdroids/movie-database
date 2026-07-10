import Link from "next/link";
import styles from "./Navbar.module.css";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
  MovieDB
</Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/favourites">Favourites</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
}