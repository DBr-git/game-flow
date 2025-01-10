import Link from "next/link";
import BackSvg from "../BackSvg";
import styled from "styled-components";
export default function BackButton({ href }) {
  return (
    <StyledLink href={href}>
      <BackSvg width="24" height="24" />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  background-color: var(--backgroundSubSection);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;