import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";

type Movie = {
  id: number;
  title: string;
  releaseYear: string;
  poster: string;
};

type MovieGridProps = {
  movies: Movie[];
};

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
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
  );
}