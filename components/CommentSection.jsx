import styled from "styled-components";
import { StyledButton } from "@/components/buttons/DefaultButtons";
import BackSvg from "./BackSvg";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function CommentSection() {
  const router = useRouter();
  const { gameId } = router.query;
  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: {},
  });

  const handleAddComment = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newComment = formData.get("comment").trim();

    if (newComment) {
      const updatedComments = {
        ...comments,
        [gameId]: [
          { id: Date.now(), text: newComment },
          ...(comments[gameId] || []),
        ],
      };
      setComments(updatedComments);
      event.target.reset();
    }
  };

  const handleDeleteComment = (id) => {
    const updatedComments = {
      ...comments,
      [gameId]: comments[gameId].filter((comment) => comment.id !== id),
    };
    setComments(updatedComments);
  };

  const gameComments = comments[gameId] || [];

  return (
    <section>
      <h2>Comments:</h2>
      <InputArea as="form" onSubmit={handleAddComment}>
        <StyledTextareaInput
          name="comment"
          placeholder="Write a comment..."
          required
        />
        <StyledButton type="submit">Submit</StyledButton>
      </InputArea>
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
  padding: 0.3em;
  resize: none;
  outline: none;
`;

const CommentList = styled.ul`
  list-style: none;
  margin: 1rem 0 2rem 0;
  padding: 0;
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
    margin: 0;
    background-color: none;
    border: none;
  }
`;

const StyledDeleteButton = styled.button`
  display: flex;
  align-self: start;
  padding-top: 0.5em;
  padding-right: 0.3em;
  border-radius: var(--borderRadius);
  background-color: var(--backgroundSubSection);
  color: var(--alertColor);
  border: none;
`;
