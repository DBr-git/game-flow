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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMenuMode("closed");
  }, [setMenuMode]);

  async function searchGame(searchTerm, page) {
    setLoading(true);
    try {
      const searchResponse = await fetch(`api/${page}`, {
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
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let searchFormData = Object.fromEntries(formData);
    setSearchTerm(searchFormData.searchInput);
    setPage(1);
    setSearchResults(null);
  }

  useEffect(() => {
    async function fetchData() {
      if (searchTerm) {
        const results = await searchGame(searchTerm, page);
        setSearchResults(results);
      }
    }
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm, page]);

  const { data, error } = useSWR(searchTerm ? null : `/api/${page}`, fetcher);

  if (loading || (!searchTerm && !data)) {
    return <div>Loading...</div>;
  }

  if (error) return <div>Error: {error.message}</div>;

  const displayData = searchResults || data;

  return (
    <>
      <h1>Library</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          aria-label="search input"
          placeholder="Type your search"
          name="searchInput"
          required
        />
        <button type="submit">Search</button>
      </form>

      {displayData && displayData.length > 0 ? (
        <>
          <StyledList>
            {displayData.map((game) => (
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
