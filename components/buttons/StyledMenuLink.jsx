import Link from "next/link";
import styled from "styled-components";

export const StyledMenuLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 4.5em;
  height: 4.5em;
  color: var(--menuColor);
  background-color: var(--backgroundSubSection);
  box-shadow: var(--boxShadow);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  p {
    font-size: 0.75em;
  }
`;
