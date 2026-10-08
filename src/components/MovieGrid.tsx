import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";
import type { Movie } from "@/types/movie";

type MovieGridProps = {
  movies: Movie[];
};

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className={styles.gridWrapper}>
      <section className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseYear={movie.releaseYear}
            poster={movie.poster}
          />
        ))}
      </section>
    </div>
  );
}