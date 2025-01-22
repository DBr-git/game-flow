import useSWR from "swr";
import { useState, useEffect } from "react";
import GameCard from "@/components/GameCard";
import styled from "styled-components";
import Pagination from "@/components/Pagination";
import MenuButton from "@/components/buttons/MenuButton";
import MenuOption from "@/components/MenuOption";
import SearchSvg from "@/public/search.svg";
import Header from "@/components/Header";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Library({ menuMode, setMenuMode }) {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMenuMode("closed");
  }, [setMenuMode]);

  async function handleSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let searchFormData = Object.fromEntries(formData);
    setSearchTerm(searchFormData.searchInput);
    setPage(1);
    setSearchResults(null);
  }

  useEffect(() => {
    async function searchGame() {
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
        setSearchResults(searchData);
      } catch (error) {
        console.error("Error during game search:", error);
      } finally {
        setLoading(false);
      }
    }
    if (searchTerm) {
      searchGame();
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
      <Header />
      <StyledHeading>Library</StyledHeading>
      <StyledForm onSubmit={handleSearch}>
        <StyledSearchInput
          type="text"
          aria-label="search input"
          placeholder="Type your search"
          name="searchInput"
          required
        />
        <StyledSubmitButton type="submit">
          <SearchSvg />
        </StyledSubmitButton>
      </StyledForm>
      {searchTerm && (
        <StyledSearchTerm>
          You searched for: <strong>{searchTerm}</strong>
        </StyledSearchTerm>
      )}
      {displayData?.length > 0 ? (
        <>
          <StyledList>
            {displayData.map((game) => (
              <li key={game.id}>
                <GameCard game={game} />
              </li>
            ))}
          </StyledList>
          <Pagination page={page} setPage={setPage} />
          <MenuButton setMenuMode={setMenuMode} />
          {menuMode === "opened" && <MenuOption setMenuMode={setMenuMode} />}
        </>
      ) : (
        <StyledErrorMessage>
          <strong>No games found !</strong>
        </StyledErrorMessage>
      )}
    </>
  );
}

const StyledHeading = styled.h1`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  padding: var(--mainContentPadding);
  margin: 0 auto;
  width: auto;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1em;

  @media screen and (min-width: 1024px) {
    max-width: 1144px;
  }
`;

const StyledSearchInput = styled.input`
  background-color: var(--backgroundSubSection);
  color: var(--headingColor);
  border-radius: var(--borderRadius);
  border: 2px solid var(--backgroundSubSection);
  box-shadow: var(--boxShadow);
  font-family: var(--textFont);
  font-size: 1rem;
  padding: 0.3em;
  outline: none;
  flex: 1;
  max-width: 450px;
  &:focus {
    border: 2px solid var(--menuColor);
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  padding: var(--mainContentPadding);

  @media screen and (min-width: 1024px) {
    justify-content: center;
    margin: 1em auto;
  }
`;

const StyledSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--backgroundSubSection);
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  border: 2px solid var(--backgroundSubSection);
  width: 35px;
  color: var(--menuColor);
  &:hover {
    border: 2px solid var(--menuColor);
  }
`;

const StyledSearchTerm = styled.p`
  padding: var(--mainContentPadding);
  padding-top: 0;
  font-size: 0.9em;

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;

const StyledErrorMessage = styled.div`
  padding: var(--mainContentPadding);
  padding-top: 6.5em;
  text-align: center;
`;
