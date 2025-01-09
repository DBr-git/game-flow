import styled from "styled-components";
import Link from "next/link";

export const StyledButton = styled.button`
  flex: 1;
  padding: 0.5em;
  padding-left: 12px;
  background-color: var(--primaryCards);
  color: var(--headingColor);
  border: none;
  font-family: var(--textFont);
  font-size: 1rem;
  border-radius: var(--borderRadius);
  border: 1px solid var(--primaryBackground);
  box-shadow: var(--boxShadow);
  &:hover {
    border: 1px solid var(--subHeadingColor);
  }
`;

export const StyledDeleteButton = styled(StyledButton)`
  color: var(--alertColor);
`;

export const StyledLinkButton = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 0.5em;
  padding-left: 12px;
  background-color: var(--primaryCards);
  color: var(--headingColor);
  border: none;
  font-family: var(--textFont);
  font-size: 1rem;
  border-radius: var(--borderRadius);
  border: 1px solid var(--primaryBackground);
  box-shadow: var(--boxShadow);
  &:hover {
    border: 1px solid var(--subHeadingColor);
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  gap: 5px;
`;
