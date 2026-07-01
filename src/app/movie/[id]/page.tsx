import Image from "next/image";
import { getMovieDetails } from "@/lib/tmdb";
import styles from "./page.module.css";

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
                <strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10
            </p>

            <p>
                <strong>Genres:</strong>{" "}
                {movie.genres.map((genre: any) => genre.name).join(", ")}
            </p>

            <h2>Overview</h2>

            <p>{movie.overview}</p>

            <h2>Cast</h2>

            <ul>
            {movie.credits.cast.slice(0, 8).map((actor: any) => (
                <li key={actor.id}>
                {actor.name} as {actor.character}
                </li>
            ))}
            </ul>
        </div>
    </main>
  );
}