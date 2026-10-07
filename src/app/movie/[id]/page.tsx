import { getMovieDetails } from "@/lib/tmdb";
import MovieDetails from "@/components/MovieDetails";
import { createClient } from "@/lib/supabase/server";

type MoviePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({
  params,
}: MoviePageProps) {
  const { id } = await params;

  const movie = await getMovieDetails(id);

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let isFavourite = false;

  if (user) {
    const { data } = await supabase
      .from("favourites")
      .select("id")
      .eq("user_id", user.id)
      .eq("movie_id", movie.id)
      .maybeSingle();

    isFavourite = !!data;
  }

  return (
    <MovieDetails
      movie={movie}
      isFavourite={isFavourite}
      isLoggedIn={!!user}
    />
  );
}