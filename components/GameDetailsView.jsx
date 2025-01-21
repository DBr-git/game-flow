import { useRouter } from "next/router";
import { useState } from "react";
import BackButton from "@/components/buttons/BackButton";
import styled from "styled-components";
import Image from "next/image";
import {
  StyledButton,
  StyledLinkButton,
  StyledButtonWrapper,
  StyledDeleteButton,
} from "@/components/buttons/DefaultButtons";
import CommentSection from "./CommentSection";

export default function GameDetailsView({
  selectedGame,
  onEditGame,
  onDeleteGame,
}) {
  const router = useRouter();
  const { gameId } = router.query;
  const [buttonMode, setButtonMode] = useState("default");
  const [sliderValue, setSliderValue] = useState(selectedGame.progress);

  function handleStatusChange(event) {
    selectedGame = { ...selectedGame, status: event.target.value };
    onEditGame(selectedGame);
  }

  function handleProgressChange(event) {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    let updatedGame = {};

    updatedGame = {
      ...selectedGame,
      progress: newValue,
    };
    onEditGame(updatedGame);
  }

  return (
    <>
      <StyledImageContainer
        $color={!selectedGame.cover ? selectedGame.color : null}
      >
        {selectedGame.cover && (
          <StyledBackgroundImage
            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${selectedGame.artworks.image_id}.jpg`}
            width={selectedGame.artworks.width}
            height={selectedGame.artworks.height}
            alt={`artwork of ${selectedGame.name}`}
          />
        )}
        <StyledContent>
          <BackButton href="/" />
          <h1>{selectedGame.name}</h1>
        </StyledContent>
      </StyledImageContainer>

      <StyledArticle>
        <select
          name="status"
          defaultValue={selectedGame.status}
          onChange={handleStatusChange}
        >
          <option value="In Progress">In Progress</option>
          <option value="Planned">Planned</option>
          <option value="Completed">Completed</option>
        </select>
        <StyledParagraph>Rating: {selectedGame.rating}</StyledParagraph>
        <StyledSummary>{selectedGame.summary}</StyledSummary>

        <label htmlFor="sliderInput">Choose your progress:</label>
        <StyledRange
          id="sliderInput"
          type="range"
          min="0"
          max="100"
          step="1"
          value={sliderValue}
          onChange={handleProgressChange}
        ></StyledRange>
        <StyledValueParagraph>
          Progress: {sliderValue}%
          {sliderValue === 0 && (
            <StyledOptionsParagraph>
              {" "}
              - No progress made yet.
            </StyledOptionsParagraph>
          )}
          {sliderValue === 100 && (
            <StyledOptionsParagraph>
              {" "}
              complete – Congratulations!
            </StyledOptionsParagraph>
          )}
        </StyledValueParagraph>
        <CommentSection game={selectedGame} onEditGame={onEditGame} />
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
`;
const StyledParagraph = styled.p`
  background-color: var(--backgroundSubSection);
  padding: 0.5em 1em;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;
const StyledSummary = styled.p`
  background-color: var(--backgroundSubSection);
  padding: 0.5em 1em;
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  flex-basis: 100%;
  margin-bottom: 1em;
`;

const StyledRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.5em;
  border-radius: 5px;
  background: var(--backgroundSubSection);
  margin: 0.5em;
  outline: none;
  opacity: 0.9;

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 25px;
    border-radius: 20%;
    background: var(--menuColor);
    cursor: pointer;
  }

  &[type="range"]:hover {
    height: 0.6em;
    background: #224466;
  }

  &[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 25px;
    border-radius: 20%;
    background: var(--menuColor);
    cursor: pointer;
  }
`;

const StyledValueParagraph = styled.p`
  padding: 0.5em;
  display: inline-block;
  box-shadow: none;
  background: none;
`;
const StyledOptionsParagraph = styled.p`
  padding-left: 0.3em;
  display: inline-block;
  box-shadow: none;
  background: none;
`;

const StyledImageContainer = styled.div`
  background-color: ${(props) => props.$color};
  position: relative;
  height: 150px;
  margin: -0.5em -1.75em 0 -1.75em;
  padding: 0.5em 1.75em;
`;

const StyledBackgroundImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: none;
  object-fit: cover;
  height: 100%;
  width: 100%;
  mask: linear-gradient(
    330deg,
    var(--primaryBackground),
    20%,
    rgba(255, 255, 255, 0)
  );
  z-index: 1;
`;

const StyledContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;
