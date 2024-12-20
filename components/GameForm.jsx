import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
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
      <input
        type="text"
        id="gameTitleInput"
        name="title"
        required
        defaultValue={formMode === "edit" ? selectedGame.title : ""}
      />
      <label htmlFor="gameRatingInput">Your rating:</label>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        id="gameRatingInput"
        name="rating"
        required
        defaultValue={formMode === "edit" ? selectedGame.rating : ""}
      />
      <label htmlFor="gameDescriptionInput">Description:</label>
      <textarea
        rows="8"
        placeholder="Your description"
        id="gameDescriptionInput"
        name="description"
        required
        defaultValue={formMode === "edit" ? selectedGame.description : ""}
      />
      <StyledButtonRow>
        <Link href={formMode === "edit" ? `/${selectedGame.id}` : "/"}>
          Cancel
        </Link>
        <button type="submit">
          {formMode === "edit" ? "Submit" : "Create"}
        </button>
      </StyledButtonRow>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 0.5rem;
`;

const StyledButtonRow = styled.div`
  display: flex;
  a {
    flex: 1;
    text-decoration: none;
    text-align: center;
    border: solid 0.1rem grey;
    border-radius: 5px;
    &:hover {
      background-color: lightgrey;
    }
  }
  button {
    flex: 1;
    border: solid 0.1rem grey;
    border-radius: 5px;
    background-color: white;
    &:hover {
      background-color: lightgrey;
    }
  }
`;
