"use client";

import styles from "./LogoutButton.module.css";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const supabase = createClient();
  const router = useRouter();

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={handleLogout}
      className={styles.logoutButton}
    >
      Logout
    </button>
  );
}