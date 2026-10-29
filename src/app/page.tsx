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
    <main className={styles.page}> 
      <section className={styles.intro}>
        <h1>Discover Movies</h1>
        <p>
          Explore popular films, discover your next favourite,
          and keep track of the movies you love.
        </p>
      </section>

      <section className={styles.movies}>
        <h2>Popular Movies</h2>
        <div className={styles.gridWrapper}>
          <MovieGrid movies={movies} />
        </div>
      </section>
    </main>
  );
}

