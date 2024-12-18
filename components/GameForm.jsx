import { useRouter } from "next/router";
import styled from "styled-components";

export default function GameForm({ onSubmit }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="gameTitleInput">Title:</label>
      <input type="text" id="gameTitleInput" name="title" required></input>
      <label htmlFor="gameRatingInput">Your rating:</label>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        id="gameRatingInput"
        name="rating"
        required
      ></input>
      <label htmlFor="gameDescriptionInput">Description:</label>
      <textarea
        rows="8"
        placeholder="Your description"
        id="gameDescriptionInput"
        name="description"
        required
      />
      <StyledButtonRow>
        <button type="submit">Create</button>
        <button onClick={() => router.push("/")}>Cancel</button>
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
  button {
    flex: 1;
  }
`;
