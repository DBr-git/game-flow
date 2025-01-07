import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import styled from "styled-components";
import {
  StyledDefaultButton,
  StyledLinkButton,
  StyledButtonWrapper,
} from "@/components/DefaultButtons";

export default function GameDetails({ games, onDeleteGame, onEditGame }) {
  const router = useRouter();
  const { gameId } = router.query;

  const [buttonMode, setButtonMode] = useState("default");

  let selectedGame = games.find((game) => game.id === gameId);

  if (!selectedGame) {
    return <div>Game not found!</div>;
  }

  function handleChange(event) {
    selectedGame = { ...selectedGame, progress: event.target.value };
    onEditGame(selectedGame);
  }
  return (
    <>
      <BackButton href="/" />
      <StyledArticle>
        <h3>{selectedGame.title}</h3>
        <select
          name="progress"
          defaultValue={selectedGame.progress}
          onChange={handleChange}
        >
          <option value="In Progress">In progress</option>
          <option value="Planned">Planned</option>
          <option value="Completed">Completed</option>
        </select>
        <p>Rating: {selectedGame.rating}</p>

        <StyledDescription>{selectedGame.description}</StyledDescription>
      </StyledArticle>

      {buttonMode === "default" && (
        <StyledButtonWrapper>
          <StyledDefaultButton
            type="button"
            onClick={() => setButtonMode("delete")}
          >
            Delete
          </StyledDefaultButton>
          <StyledLinkButton href={`/${gameId}/edit`}>Edit</StyledLinkButton>
        </StyledButtonWrapper>
      )}

      {buttonMode === "delete" && (
        <>
          <p>Do you really want to delete this Game?</p>
          <StyledButtonWrapper>
            <StyledDefaultButton
              type="button"
              onClick={() => setButtonMode("default")}
            >
              Cancel
            </StyledDefaultButton>
            <StyledDefaultButton
              type="button"
              onClick={() => {
                onDeleteGame(selectedGame);
                router.push("/");
              }}
            >
              Delete
            </StyledDefaultButton>
          </StyledButtonWrapper>
        </>
      )}
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  h3 {
    margin-top: 1em;
    color: var(--secondaryColor2);
  }
  select {
    padding: 0.5em;
    padding-left: 12px;
    background-color: var(--primaryColor2);
    color: var(--secondaryColor1);
    border: none;
    font-family: var(--textFont);
    font-size: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }

  p {
    background-color: var(--primaryColor2);
    padding: 1em;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }
`;

const StyledDescription = styled.p`
  flex-basis: 100%;
  margin-bottom: 1em;
`;
