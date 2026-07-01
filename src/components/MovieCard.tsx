import Link from "next/link";
import Image from "next/image";
import styles from "./MovieCard.module.css";
import type { Movie } from "@/types/movie";

type MovieCardProps = Movie;

export default function MovieCard({
  id,
  title,
  releaseYear,
  poster,
}: MovieCardProps) {
  return (
    <Link href={`/movie/${id}`} className={styles.card}>
      <Image
        src={poster}
        alt={`${title} poster`}
        width={350}
        height={350}
        className={styles.poster}
      />

      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{releaseYear}</p>
      </div>
    </Link>
  );
}