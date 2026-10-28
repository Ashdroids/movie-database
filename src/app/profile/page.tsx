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

  const { count: favouriteCount } = await supabase
    .from("favourites")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

    const { count: ratingCount } = await supabase
      .from("ratings")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id);


  return (

  <main className={styles.container}>
    <h1>Profile</h1>
    <p className={styles.subtitle}>
      Manage your account and keep track of your movies.
    </p>

<section className={styles.section}>
  <h2>Account Information</h2>

  <div className={styles.card}>
    <p>
      <strong>Email:</strong> {user.email}
    </p>

    <p>
      <strong>Member since:</strong>{" "}
      {new Date(user.created_at).toLocaleDateString("en-GB")}
    </p>
  </div>
</section>

<section className={styles.section}>
  <h2>Your Activity</h2>

  <div className={styles.activityGrid}>
    <div className={styles.card}>
      <h3>♥ Favourites</h3>
      <p className={styles.count}>{favouriteCount ?? 0}</p>
      <p className={styles.description}>Movies you've saved</p>
    </div>

    <div className={styles.card}>
      <h3>★ Movies Rated</h3>
      <p className={styles.count}>{ratingCount ?? 0}</p>
      <p className={styles.description}>Movies you've rated</p>
    </div>
  </div>
</section>

<section className={styles.section}>
  <h2>Account</h2>

  <div className={styles.card}>
    <p>Want to leave your account?</p>
    <LogoutButton />
  </div>
</section>

  </main>
);
}