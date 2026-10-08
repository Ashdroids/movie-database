import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";
import styles from "./page.module.css"

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className={styles.container}>
      <h1>Profile</h1>

      <section className={styles.section}>
        <h2>Account Information</h2>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Member since:</strong>{" "}
          {new Date(user.created_at).toLocaleDateString("en-GB")}
        </p>
      </section>

      <section className={styles.section}>
        <h2>Account</h2>
        <LogoutButton />
      </section>
    </main>
  );
}