import styled from "styled-components";
import { StyledButton } from "@/components/buttons/DefaultButtons";
import BackSvg from "./BackSvg";

export default function CommentSection({ game, onEditGame }) {
  const handleAddComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = formData.get("comment").trim();

    if (newComment) {
      const updatedGame = {
        ...game,
        comments: [
          { id: Date.now(), text: newComment },
          ...(game.comments || []),
        ],
      };
      onEditGame(updatedGame);
      event.target.reset();
    }
  };

  const handleDeleteComment = (id) => {
    const updatedGame = {
      ...game,
      comments: (game.comments || []).filter((comment) => comment.id !== id),
    };
    onEditGame(updatedGame);
  };

  const gameComments = game.comments || [];

  return (
    <section>
      <h2>Comments:</h2>
      <form onSubmit={handleAddComment}>
        <InputArea>
          <StyledTextareaInput
            name="comment"
            placeholder="Write a comment..."
            required
          />
          <StyledButton type="submit">Submit</StyledButton>
        </InputArea>
      </form>
      <CommentList>
        {gameComments.map(({ id, text }) => (
          <CommentItem key={id}>
            <p>{text}</p>
            <StyledDeleteButton onClick={() => handleDeleteComment(id)}>
              <BackSvg width={24} height={24} />
            </StyledDeleteButton>
          </CommentItem>
        ))}
      </CommentList>
    </section>
  );
}

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-top: 0.5rem;
`;

const StyledTextareaInput = styled.textarea`
  background-color: var(--backgroundSubSection);
  color: var(--headingColor);
  border-radius: var(--borderRadius);
  border: none;
  box-shadow: var(--boxShadow);
  font-family: var(--textFont);
  font-size: 1rem;
  padding: 0.4em;
  resize: none;
  outline: none;
`;

const CommentList = styled.ul`
  list-style: none;
  margin: 1rem 0 2rem 0;
`;

const CommentItem = styled.li`
  display: flex;
  align-items: center;
  background-color: var(--backgroundSubSection);
  justify-content: space-between;
  border-radius: var(--borderRadius);
  margin-bottom: 8px;
  p {
    flex: 1;
    padding-left: 0.5em;
    background-color: none;
    border: none;
    padding: 0.5em 0 0.4em 0.4em;
  }
`;

const StyledDeleteButton = styled.button`
  display: flex;
  align-self: start;
  padding-top: 0.5em;
  padding-right: 0.4em;
  border-radius: var(--borderRadius);
  background-color: var(--backgroundSubSection);
  color: var(--alertColor);
  border: none;
`;
