import ChevronLeft from "@/public/chevron-left.svg";
import ChevronRight from "@/public/chevron-right.svg";
import styled from "styled-components";

export default function Pagination({ page, setPage }) {
  return (
    <StyledDiv>
      <StyledButton
        type="button"
        disabled={page <= 0}
        onClick={() => setPage(page - 1)}
      >
        <ChevronLeft />
      </StyledButton>
      <p>{page + 1}</p>
      <StyledButton type="button" onClick={() => setPage(page + 1)}>
        <ChevronRight />
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin: 1em;
  padding: 0.5;
  p {
    color: var(--headingColor);
  }
`;

const StyledButton = styled.button`
  display: flex;
  color: var(--menuColor);
  background-color: var(--backgroundSubSection);
  border: none;
  border-radius: var(--borderRadius);
  &:disabled {
    color: var(--headingColor);
  }
`;
