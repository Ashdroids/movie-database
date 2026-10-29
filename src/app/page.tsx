import styles from "./page.module.css";
import MovieGrid from "@/components/MovieGrid";
import { getPopularMovies } from "@/lib/tmdb";


export default async function Home() {
  const data = await getPopularMovies();

  console.log(data);

  const movies = data.results.map((movie: any) => ({
  id: movie.id,
  title: movie.title,
  releaseYear: movie.release_date.slice(0, 4),
  poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "/placeholder.png",
}));

  return (
    <main> 
      <h1>Movie Database</h1>
      <p>Popular Movies:</p>

      <MovieGrid movies={movies} />
      
    </main>
  );
}

