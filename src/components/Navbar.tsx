import Link from "next/link";
import styles from "./Navbar.module.css";
import LogoutButton from "./LogoutButton";
import { createClient } from "@/lib/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Movie<span className={styles.logoAccent}>DB</span>
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/search">Search</Link>
        </li>

        {user ? (
          <>
            <li>
              <Link href="/favourites">Favourites</Link>
            </li>

            <li>
              <Link href="/profile">Profile</Link>
            </li>

            <li>
              <LogoutButton />
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}