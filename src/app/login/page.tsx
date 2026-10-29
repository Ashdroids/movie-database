import LoginForm from "@/components/LoginForm";
import styles from "./page.module.css";

export default function LoginPage() {
return (
<main className={styles.container}>
<div className={styles.loginCard}>
<h1>Welcome back</h1>
<p className={styles.subtitle}>
Sign in to access your MovieDB account.
</p>

    <LoginForm />
  </div>
</main>

);
}