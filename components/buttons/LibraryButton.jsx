import Link from "next/link";
import LibrarySvg from "@/public/library.svg";
import styled from "styled-components";

export default function LibraryButton() {
  return (
    <StyledLibraryLink href="/library" aria-label="view library">
      <LibrarySvg />
    </StyledLibraryLink>
  );
}

const StyledLibraryLink = styled(Link)`
  display: flex;
  color: var(--menuColor);
  background-color: var(--backgroundSubSection);
  box-shadow: var(--boxShadow);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
`;
