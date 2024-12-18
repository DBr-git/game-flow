import { useRouter } from "next/router";

export default function GameForm({ onSubmit }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit}>
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
        placeholder="Your description"
        id="gameDescriptionInput"
        name="description"
        required
      />
      <button type="submit">Create</button>
      <button onClick={() => router.push("/")}>Cancel</button>
    </form>
  );
}
