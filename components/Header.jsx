import Link from "next/link";
import styled from "styled-components";
import LibrarySvg from "@/public/library.svg";
import ListSvg from "@/public/list.svg";
import PlusSvg from "./PlusSvg";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledNavLink
            href="/library"
            aria-label="view library"
            $active={router.pathname === "/library"}
          >
            <LibrarySvg />
            Library
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="/add-game"
            aria-label="add game"
            $active={router.pathname === "/add-game"}
          >
            <PlusSvg width="50" height="50" />
            Add Game
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="/"
            aria-label="view personal list"
            $active={router.pathname === "/"}
          >
            <ListSvg />
            List
          </StyledNavLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0.5em;
  background-color: var(--backgroundSubSection);
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 3em;
  margin-right: calc((100% - 1144px) / 2);

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    margin-right: calc((100% - 900px) / 2);
  }
`;

const StyledNavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) =>
    props.$active ? "var(--menuColor)" : "var(--headingColor)"};
`;
