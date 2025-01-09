import { useRouter } from "next/router";
import styled from "styled-components";
import {
  StyledButton,
  StyledLinkButton,
  StyledButtonWrapper,
} from "@/components/buttons/DefaultButtons";

export default function GameForm({ onSubmit, selectedGame, formMode }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = Object.fromEntries(formData);

    if (formMode === "edit") {
      data = { id: selectedGame.id, progress: selectedGame.progress, ...data };
    }

    onSubmit(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="gameTitleInput">Title:</label>
      <StyledTitleInput
        type="text"
        id="gameTitleInput"
        name="title"
        required
        defaultValue={formMode === "edit" ? selectedGame.title : ""}
      />
      <label htmlFor="gameRatingInput">Your rating:</label>
      <StyledRatingInput
        type="number"
        min="0"
        max="10"
        step="1"
        id="gameRatingInput"
        name="rating"
        required
        defaultValue={formMode === "edit" ? selectedGame.rating : ""}
      />
      <label htmlFor="gameDescriptionInput">Description:</label>
      <StyledTextareaInput
        rows="8"
        placeholder="Your description"
        id="gameDescriptionInput"
        name="description"
        required
        defaultValue={formMode === "edit" ? selectedGame.description : ""}
      />
      <StyledButtonWrapper>
        <StyledLinkButton
          href={formMode === "edit" ? `/${selectedGame.id}` : "/"}
        >
          Cancel
        </StyledLinkButton>
        <StyledButton type="submit">
          {formMode === "edit" ? "Submit" : "Create"}
        </StyledButton>
      </StyledButtonWrapper>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: var(--mainContentPadding);
  gap: 0.5rem;
  label {
    font-family: var(--titleFont);
    font-size: 1em;
    font-weight: 700;
    color: var(--secondaryColor2);
  }
`;

const StyledTitleInput = styled.input`
  background-color: var(--primaryColor2);
  color: var(--secondaryColor1);
  border-radius: var(--borderRadius);
  border: 2px solid var(--secondaryColor1);
  box-shadow: var(--boxShadow);
  font-family: var(--textFont);
  font-size: 1rem;
  padding: 0.3em;
  outline: none;
  &:focus {
    border-color: var(--accentColor3);
  }
`;

const StyledRatingInput = styled.input`
  background-color: var(--primaryColor2);
  color: var(--secondaryColor1);
  border-radius: var(--borderRadius);
  border: 2px solid var(--secondaryColor1);
  box-shadow: var(--boxShadow);
  font-family: var(--textFont);
  font-size: 1rem;
  padding: 0.3em;
  align-self: flex-start;
  outline: none;
  &:focus {
    border-color: var(--accentColor3);
  }
`;

const StyledTextareaInput = styled.textarea`
  background-color: var(--primaryColor2);
  color: var(--secondaryColor1);
  border-radius: var(--borderRadius);
  border: 2px solid var(--secondaryColor1);
  box-shadow: var(--boxShadow);
  font-family: var(--textFont);
  font-size: 1rem;
  padding: 0.3em;
  resize: none;
  outline: none;
  &:focus {
    border-color: var(--accentColor3);
  }
`;
