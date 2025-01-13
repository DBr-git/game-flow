import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Library() {
  const { data, error, isLoading } = useSWR("/api/games", fetcher);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Library</h1>
      {data ? (
        <ul>
          {data.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      ) : (
        <div>No games found.</div>
      )}
    </div>
  );
}
