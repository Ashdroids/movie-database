import Image from "next/image";
import CastList from "./CastList";
import styles from "@/app/movie/[id]/page.module.css";

type Props = {
  movie: any;
};

export default function MovieDetails({ movie }: Props) {
  return (
    <main className={styles.container}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={350}
        height={525}
      />

      <div className={styles.info}>
        <h1>{movie.title}</h1>

        <p>
          <strong>Release:</strong> {movie.release_date}
        </p>

        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>

        <p>
          <strong>TMDB Rating:</strong> {movie.vote_average.toFixed(1)}/10
        </p>

        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre: any) => genre.name).join(", ")}
        </p>

        <h2>Overview</h2>

        <p>{movie.overview}</p>

        <CastList cast={movie.credits.cast} />
      </div>
    </main>
  );
}