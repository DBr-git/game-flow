import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "@/components/BackButton";
import styled from "styled-components";

export default function GameDetails({ games, onDelete }) {
  const router = useRouter();
  const { gameId } = router.query;

  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);

  const selectedGame = games.find((game) => game.id === gameId);

  if (!selectedGame) {
    return <div>Loading...</div>;
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
      <StyledSectionWrapper>
        {!deleteButtonClicked && (
          <button type="button" onClick={() => setDeleteButtonClicked(true)}>
            Delete
          </button>
        )}

        {deleteButtonClicked && (
          <>
            <p>Do you really want to delete this Game?</p>
            <StyledButtonWrapper>
              <button
                type="button"
                onClick={() => setDeleteButtonClicked(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onDelete(selectedGame);
                  router.push("/");
                }}
              >
                Delete
              </button>
            </StyledButtonWrapper>
          </>
        )}
      </StyledSectionWrapper>
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

const StyledSectionWrapper = styled.section`
  margin: 10px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  button {
    flex: 1;
  }
`;
