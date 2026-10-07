import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import MovieGrid from "@/components/MovieGrid";

export default async function FavouritesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: favourites, error } = await supabase
    .from("favourites")
    .select("movie_id, title, poster_path, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load favourites:", error);

    return (
      <main>
        <h1>Favourites</h1>
        <p>Something went wrong while loading your favourites.</p>
      </main>
    );
  }

  const movies = favourites.map((favourite) => ({
    id: favourite.movie_id,
    title: favourite.title,
    releaseYear: "",
    poster: favourite.poster_path
      ? `https://image.tmdb.org/t/p/w500${favourite.poster_path}`
      : "/placeholder.jpg",
  }));

  return (
    <main>
      <h1>Favourites</h1>

      {movies.length === 0 ? (
        <p>You haven't added any favourite movies yet.</p>
      ) : (
        <MovieGrid movies={movies} />
      )}
    </main>
  );
}