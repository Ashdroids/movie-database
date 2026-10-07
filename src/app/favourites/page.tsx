import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function FavouritesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Favourites</h1>
      <p>Your favourite movies will appear here.</p>
    </main>
  );
}