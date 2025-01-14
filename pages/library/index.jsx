import useSWR from "swr";
import { useState } from "react";
import GameCard from "@/components/GameCard";
import styled from "styled-components";
import Pagination from "@/components/Pagination";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Library() {
  const [page, setPage] = useState(0);
  console.log(page);
  const { data, error, isLoading } = useSWR(`/api/${page * 50}`, fetcher);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1>Library</h1>
      {data ? (
        <>
          <StyledList>
            {data.map((game) => (
              <li key={game.id}>
                <GameCard game={game} source={"api"} />
              </li>
            ))}
          </StyledList>
          <Pagination page={page} setPage={setPage} />
        </>
      ) : (
        <div>No games found.</div>
      )}
    </>
  );
}

const StyledList = styled.ul`
  padding: var(--mainContentPadding);
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;
