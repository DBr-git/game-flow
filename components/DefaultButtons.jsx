import styled from "styled-components";
import Link from "next/link";

export const StyledDefaultButton = styled.button`
  flex: 1;
  border: solid 0.1rem grey;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: lightgrey;
  }
`;

export const StyledLinkButton = styled(Link)`
  flex: 1;
  text-decoration: none;
  text-align: center;
  border: solid 0.1rem grey;
  border-radius: 5px;
  color: currentColor;
  &:hover {
    background-color: lightgrey;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
