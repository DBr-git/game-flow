import useSWR from "swr";
import { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
import styled from "styled-components";
import Pagination from "@/components/Pagination";
import MenuButton from "@/components/buttons/MenuButton";
import MenuOption from "@/components/MenuOption";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Library({ menuMode, setMenuMode }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setMenuMode("closed");
  }, [setMenuMode]);

  async function searchGame(searchTerm) {
    try {
      const searchResponse = await fetch("api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm }),
      });

      if (!searchResponse.ok) {
        throw new Error(`Error: ${searchResponse.status}`);
      }

      const searchData = await searchResponse.json();
      return searchData;
    } catch (error) {
      console.error("Error during game search:", error);
    }
  }

  const { data, error, isLoading } = useSWR(`/api/${page}`, fetcher);

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
          <MenuButton setMenuMode={setMenuMode} />
          {menuMode === "opened" && <MenuOption setMenuMode={setMenuMode} />}
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
