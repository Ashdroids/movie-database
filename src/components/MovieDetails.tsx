import Image from "next/image";
import CastList from "./CastList";
import FavouriteButton from "./FavouriteButton";
import styles from "@/app/movie/[id]/page.module.css";

export type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  runtime: number;
  release_date: string;
  vote_average: number;
  genres: { id: number; name: string }[];
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
    }[];
  };
};

export type Genre = {
  id: number;
  name: string;
};

type Props = {
  movie: MovieDetails;
  isFavourite: boolean;
  isLoggedIn: boolean;
};

export default function MovieDetails({
  movie,
  isFavourite,
  isLoggedIn,
}: Props) {
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

        {isLoggedIn && (
          <div className={styles.favouriteButton}>
            <FavouriteButton
              movieId={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              initialIsFavourite={isFavourite}
            />
          </div>
        )}

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
          {movie.genres.map((genre: Genre) => genre.name).join(", ")}
        </p>

        <h2>Overview</h2>

        <p>{movie.overview}</p>

        <CastList cast={movie.credits.cast} />
      </div>
    </main>
  );
}