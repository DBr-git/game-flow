import Link from "next/link";
import styled from "styled-components";
import LibrarySvg from "@/public/library.svg";
import ListSvg from "@/public/list.svg";
import PlusSvg from "./PlusSvg";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router.pathname);

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
            <p>Library</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="/add-game"
            aria-label="add game"
            $active={router.pathname === "/add-game"}
          >
            <PlusSvg width="50" height="50" />
            <p>Add Game</p>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            href="/"
            aria-label="view personal list"
            $active={router.pathname === "/"}
          >
            <ListSvg />
            <p>List</p>
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 3em;
  margin-right: calc((100% - 1144px) / 2);
`;

const StyledNavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) =>
    props.$active ? "var(--menuColor)" : "var(--headingColor)"};
`;
