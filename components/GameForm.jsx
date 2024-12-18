import Router from "next/router";

export default function GameForm({ onSubmit }) {
  const router = Router();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="gameTitleInput">Gametitle:</label>
      <input
        type="text"
        id="gameTitleInput"
        name="gameTitleInput"
        required
      ></input>
      <label htmlFor="gameRatingInput">Your rating:</label>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        id="gameRatingInput"
        name="gameRatingInput"
        required
      ></input>
      <label htmlFor="gameDescriptionInput">Description:</label>
      <textarea
        placeholder="Your description"
        id="gameDescriptionInput"
        name="gameDescriptionInput"
        required
      />
      <button type="submit">Create</button>
      <button onClick={() => router.push("/")}>Cancel</button>
    </form>
  );
}
