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

      <div>
        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>
      </div>
    </main>
  );
}