import styled from "styled-components";
import Link from "next/link";
import PlusSvg from "../PlusSvg";

export default function PlusButton() {
  return (
    <StyledAddLink href="/add-game">
      <PlusSvg width="50" height="50" />
    </StyledAddLink>
  );
}

const StyledAddLink = styled(Link)`
  display: flex;
  color: var(--menuColor);
  background-color: var(--backgroundSubSection);
  box-shadow: var(--boxShadow);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`;
