import useSWR from "swr";
import { useState } from "react";
import GameCard from "@/components/GameCard";
import styled from "styled-components";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Library() {
  const [page, setPage] = useState(0);
  const { data, error, isLoading, mutate } = useSWR(`/api/${page}`, fetcher);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Library</h1>
      {data ? (
        <StyledList>
          {data.map((game) => (
            <li key={game.id}>
              <GameCard game={game} source={"api"} />
            </li>
          ))}
        </StyledList>
      ) : (
        <div>No games found.</div>
      )}
    </div>
  );
}

const StyledList = styled.ul`
  padding: var(--mainContentPadding);
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;
