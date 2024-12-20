import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import styled from "styled-components";
import {
  StyledDefaultButton,
  StyledLinkButton,
  StyledButtonWrapper,
} from "@/components/DefaultButtons";

export default function GameDetails({ games, onDeleteGame }) {
  const router = useRouter();
  const { gameId } = router.query;

  const [buttonMode, setButtonMode] = useState("default");

  const selectedGame = games.find((game) => game.id === gameId);

  if (!selectedGame) {
    return <div>Game not found!</div>;
  }

  return (
    <>
      <BackButton href="/" />
      <StyledArticle>
        <StyledRowWrapper>
          <p>{selectedGame.title}</p>
          <p>Rating: {selectedGame.rating}</p>
        </StyledRowWrapper>
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
  gap: 0.5rem;
  padding: 10px;
  p {
    border: solid 0.2rem black;
    border-radius: 5px;
    padding: 5px;
  }
`;

const StyledRowWrapper = styled.div`
  display: flex;
  gap: inherit;
  justify-content: space-between;
`;

const StyledDescription = styled.p`
  flex-basis: 100%;
`;
