import Image from "next/image";
import styles from "./page.module.css";
import MovieGrid from "@/components/MovieGrid";


const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    releaseYear: "2008",
    poster: "https://placehold.co/300x450",
  },
  {
    id: 2,
    title: "Inception",
    releaseYear: "2010",
    poster: "https://placehold.co/300x450",
  },
  {
    id: 3,
    title: "Interstellar",
    releaseYear: "2014",
    poster: "https://placehold.co/300x450",
  },
];


export default function Home() {
  return (
    <main>
      <h1>Movie Database</h1>
      <p>Popular Movies:</p>

      <MovieGrid movies={movies} />
    </main>
  );
}