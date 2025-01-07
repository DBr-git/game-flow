import styled from "styled-components";
import Link from "next/link";

export const StyledDefaultButton = styled.button`
  flex: 1;
  padding: 0.5em;
  padding-left: 12px;
  background-color: var(--primaryColor2);
  color: var(--secondaryColor1);
  border: none;
  font-family: var(--textFont);
  font-size: 1rem;
  border-radius: var(--borderRadius);
  border: 1px solid var(--primaryColor1);
  box-shadow: var(--boxShadow);
  &:hover {
    border: 1px solid var(--secondaryColor2);
  }
`;

export const StyledDeleteButton = styled.button`
  flex: 1;
  padding: 0.5em;
  padding-left: 12px;
  background-color: var(--primaryColor2);
  color: var(--accentColor1);
  border: none;
  font-family: var(--textFont);
  font-size: 1rem;
  border-radius: var(--borderRadius);
  border: 1px solid var(--primaryColor1);
  box-shadow: var(--boxShadow);
  &:hover {
    border: 1px solid var(--secondaryColor2);
  }
`;

export const StyledLinkButton = styled(Link)`
  flex: 1;
  text-align: center;
  padding: 0.5em;
  padding-left: 12px;
  background-color: var(--primaryColor2);
  color: var(--secondaryColor1);
  border: none;
  font-family: var(--textFont);
  font-size: 1rem;
  border-radius: var(--borderRadius);
  border: 1px solid var(--primaryColor1);
  box-shadow: var(--boxShadow);
  &:hover {
    border: 1px solid var(--secondaryColor2);
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  gap: 5px;
`;
