import { searchMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { q } = await searchParams;

  let movies = [];

  if (q) {
    const data = await searchMovies(q);

    movies = data.results.map((movie: any) => ({
      id: movie.id,
      title: movie.title,
      releaseYear: movie.release_date?.slice(0, 4) ?? "Unknown",
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/300x450",
    }));
  }

  return (
    <>
      <h1>Search Movies</h1>

      <form>
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Search for a movie..."
        />

        <button type="submit">Search</button>
      </form>
      
      {movies.length > 0 && <MovieGrid movies={movies} />}
     
    </>
  );
}