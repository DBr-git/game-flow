import Link from "next/link";
import BackButtonSvg from "@/public/back-button.svg";
import styled from "styled-components";
export default function BackButton({ href }) {
  return (
    <StyledLink href={href}>
      <BackButtonSvg />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  background-color: var(--primaryColor2);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
`;
