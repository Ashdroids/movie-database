type Props = {
  cast: any[];
};

export default function CastList({ cast }: Props) {
  return (
    <>
      <h2>Cast</h2>

      <ul>
        {cast.slice(0, 8).map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </>
  );
}