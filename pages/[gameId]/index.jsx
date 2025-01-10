import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "@/components/buttons/BackButton";
import styled from "styled-components";
import {
  StyledButton,
  StyledLinkButton,
  StyledButtonWrapper,
  StyledDeleteButton,
} from "@/components/buttons/DefaultButtons";

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
      <StyledDiv color={selectedGame.color}>
        <BackButton href="/" />
        <h1>{selectedGame.title}</h1>
      </StyledDiv>
      <StyledArticle>
        <select
          name="progress"
          defaultValue={selectedGame.progress}
          onChange={handleChange}
        >
          <option value="In Progress">In Progress</option>
          <option value="Planned">Planned</option>
          <option value="Completed">Completed</option>
        </select>
        <p>Rating: {selectedGame.rating}</p>

        <StyledDescription>{selectedGame.description}</StyledDescription>

        {buttonMode === "default" && (
          <>
            <StyledLinkButton href={`/${gameId}/edit`}>Edit</StyledLinkButton>
            <StyledDeleteButton
              type="button"
              onClick={() => setButtonMode("delete")}
            >
              Delete
            </StyledDeleteButton>
          </>
        )}
        {buttonMode === "delete" && (
          <>
            <p>Do you really want to delete this Game?</p>
            <StyledButtonWrapper>
              <StyledButton
                type="button"
                onClick={() => setButtonMode("default")}
              >
                Cancel
              </StyledButton>
              <StyledDeleteButton
                type="button"
                onClick={() => {
                  onDeleteGame(selectedGame);
                  router.push("/");
                }}
              >
                Delete
              </StyledDeleteButton>
            </StyledButtonWrapper>
          </>
        )}
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  padding: var(--mainContentPadding);
  overflow-wrap: anywhere;
 
    color: var(--headingColor);
  }
  select {
    padding: 0.5em;
    padding-left: 12px;
    background-color: var(--backgroundSubSection);
    color: var(--headingColor);
    border: none;
    font-family: var(--textFont);
    font-size: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }

  p {
    background-color: var(--backgroundSubSection);
    padding: 0.5em 1em;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
  }
`;

const StyledDescription = styled.p`
  flex-basis: 100%;
  margin-bottom: 1em;
`;
const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  height: 150px;
  margin: -0.5em -1.75em 0 -1.75em;
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.75em;
`;
